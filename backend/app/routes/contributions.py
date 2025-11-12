from flask import Blueprint
from app.services.contributions_service import contributions_service

bp = Blueprint("contributions", __name__)

@bp.route("/contributions")
def get_contributions():
    data = contributions_service()
    return data
