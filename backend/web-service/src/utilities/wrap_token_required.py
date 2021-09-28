"""Decorator creation for token requirements for routes."""

from flask import jsonify, request
from functools import wraps
from ..models.model_user import user
from ..app import app
import jwt

def token_required(f):
    @wraps(f)
    def decorator(*args, **kwargs):
        token = None

        if 'x-access-tokens' in request.headers:
            token = request.headers['x-access-tokens']

        if not token:
            return jsonify({"msg" : "a valid token is missing"})

        try:
            data = jwt.decode(token, app.config['SECRET_KEY'],  algorithms=["HS256"])
            print(data)
            current_user = user.query.filter_by(public_id=data['public_id']).first()
            print(current_user)
        except:
            return jsonify({"msg" : "token is invalid"})

        return f(current_user, *args, **kwargs)
        # return None
    return decorator