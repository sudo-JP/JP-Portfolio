from clients.github_client import fetch_contributions
from data.db_instance import db
from datetime import datetime, timedelta
from copy import deepcopy

def validate_contributions(lst: list, target_len: int = 7) -> list:
    """
    Ensures the list has at least target_len items by appending defaults forward.
    Uses last real date to fill missing days.
    Returns a new list (does not mutate original).
    """
    lst_copy = deepcopy(lst)
    
    if not lst_copy:
        start_date = datetime.today() - timedelta(days=target_len)
        for i in range(target_len):
            lst_copy.append({
                'date': (start_date + timedelta(days=i)).strftime('%Y-%m-%d'),
                'contributionCount': 0,
                'color': '#ebedf0'
            })
        return lst_copy

    while len(lst_copy) < target_len:
        last_date_str = lst_copy[-1]['date']
        if last_date_str == 'N/A':
            last_date = datetime.today() - timedelta(days=target_len - len(lst_copy))
        else:
            last_date = datetime.strptime(last_date_str, '%Y-%m-%d')
        next_date = last_date + timedelta(days=1)
        lst_copy.append({
            'date': next_date.strftime('%Y-%m-%d'),
            'contributionCount': 0,
            'color': '#ebedf0'
        })

    return lst_copy

def ordinal_suffix(day: int) -> str: 
    if 10 <= day % 100 <= 20:
        return 'th'
    return {1: 'st', 2: 'nd', 3: 'rd'}.get(day % 10, 'th')

def format_date(date_s: str) -> str: 
    if date_s == 'N/A':
        return date_s
    dt_obj = datetime.strptime(date_s, '%Y-%m-%d')
    day = dt_obj.day
    suffix = ordinal_suffix(day)
    return dt_obj.strftime(f'%B {day}{suffix}')

def format_contributions(lst: list) -> list:
    """
    Returns a new list with formatted date strings, preserving contributionCount and color.
    """
    return [
        {**x, "date": format_date(x["date"])}
        for x in lst
    ]

def contributions_service() -> list:
    """
    Fetch contributions, ensure 7 days, format dates, insert into DB, and return data.
    """
    raw_data = fetch_contributions()
    
    # Safety check: ensure the key exists
    if 'contributionDays' not in raw_data or not isinstance(raw_data['contributionDays'], list):
        raw_data['contributionDays'] = []

    # Validate length
    contributions = validate_contributions(raw_data['contributionDays'])
    
    # Format dates
    contributions = format_contributions(contributions)

    # Update the main dict
    raw_data['contributionDays'] = contributions

    # Insert into DB
    db.insert(raw_data)

    return raw_data['contributionDays']
