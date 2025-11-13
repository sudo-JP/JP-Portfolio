from flask import Flask
from flask_cors import CORS
from routes.contributions import bp as contributions_bp

if __name__ == '__main__': 
    app = Flask(__name__)
    CORS(app)
    app.register_blueprint(contributions_bp)
    app.run(debug=True) 



