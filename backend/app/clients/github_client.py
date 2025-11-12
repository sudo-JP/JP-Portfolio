import requests
from environs import env 

def fetch_contributions() -> dict:
    env.read_env()
    GITHUB_TOKEN = env('GITHUB_TOKEN')
    URL = "https://api.github.com/graphql"
    query = """
    {
    user(login: "sudo-jp") {
        contributionsCollection {
        contributionCalendar {
            weeks {
            contributionDays {
                date
                contributionCount
                color
            }
            }
        }
        }
    }
    }
    """
    result = requests.post(URL, json={"query": query},headers={'Authorization': f'bearer {GITHUB_TOKEN}'})
    data = result.json()
    return data['data']['user']['contributionsCollection']['contributionCalendar']['weeks'][-1]

if __name__ == '__main__':
    print(fetch_contributions())
