from app.clients.github_client import fetch_contributions
from app.data.db_instance import db

def contributions_service():
    data = fetch_contributions()
    db.insert(data)
    return data 

