from tinydb import TinyDB
from pathlib import Path

db_path = Path(__file__).parent / "db.json"  
db = TinyDB(db_path)

