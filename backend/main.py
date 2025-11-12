from flask import Flask
from app.routes.contributions import bp as contributions_bp

if __name__ == '__main__': 
    app = Flask(__name__)
    app.register_blueprint(contributions_bp)
    app.run(debug=True) 



