from flask import Blueprint
from services.contributions_service import contributions_service

bp = Blueprint("contributions", __name__)

@bp.route("/contributions")
def get_contributions():
    return contributions_service()
