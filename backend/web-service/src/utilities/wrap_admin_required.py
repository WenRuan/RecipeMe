"""Decorator creation for admin requirements for routes."""


from flask import jsonify, request
from functools import wraps
from ..models.model_user import user
from ..app import app
import jwt

def admin_required(f):
    @wraps(f)
    def decorator(*args, **kwargs):
        token = None

        if 'x-access-tokens' in request.headers:
            token = request.headers['x-access-tokens']

        if not token:
            return jsonify({"msg" : "a valid token is missing"})

        try:
            data = jwt.decode(token, app.config['SECRET_KEY'],  algorithms=["HS256"])
            current_user = user.query.filter_by(public_id=data['public_id']).first()
        except:
            return jsonify({"msg" : "token is invalid"})
        print(current_user.role)
        if current_user.role != 'admin':
            return jsonify({"msg" : "User is not admin."})

        return f(*args, **kwargs)
        # return None
    return decorator