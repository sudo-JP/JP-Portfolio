from app.repositories.about_me_repo import get_about_me
from flask import Flask, jsonify

router = Flask(__name__)

@router.route('/')
def about_me_route():
    try:
        data = get_about_me()
        print(data)
        if not data:
            return jsonify({"error": "About Me not found"}), 404
        return jsonify(data)
    except Exception:
        return jsonify({"error": "Internal server error"}), 500


