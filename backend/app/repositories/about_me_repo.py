from app.data.db_instance import db
from tinydb import Query

def get_about_me(): 
    About = Query() 
    result = db.search(About.AboutMe.exists())
    return result[0]['AboutMe'] if result else None

