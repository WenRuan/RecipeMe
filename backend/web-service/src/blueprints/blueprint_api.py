from flask import Blueprint, jsonify, request
import jwt
import datetime
from ..models.model_user import user
from ..app import app, db
from ..utilities.wrap_token_required import token_required
from ..utilities.wrap_admin_required import admin_required

# Define the blueprint
blueprint_api = Blueprint(name="blueprint_api", import_name=__name__)


# Add test view functions to blueprints
@blueprint_api.route('/test', methods=['GET'])
def test_get():
    """Test GET method to test client-server connection."""
    output = {"msg" : "Test GET endpoint from blueprint_api is successful."}
    return jsonify(output)


@blueprint_api.route('/test', methods=['POST'])
def test_post():
    """Test POST method to test client-server connection."""
    output = {"msg" : "Test POST endpoint from blueprint_api is successful."}
    return jsonify(output)


@blueprint_api.route('/login', methods=['POST'])
def login_user():
    """Authenticates user, returns unique JWT."""
    auth = request.authorization
    if not auth or not auth.username or not auth.password:
        return jsonify({"msg" : "Could not verify. Missing credentials."}), 401
    
    try:
        current_user = user.query.filter_by(user_name=auth.username).first()
        if current_user.verify_user(auth.password):
            token = jwt.encode({"public_id" : current_user.public_id, "exp" : datetime.datetime.utcnow() + datetime.timedelta(minutes=45)}, app.config['SECRET_KEY'], algorithm="HS256")

            return jsonify({"token" : token})
        return jsonify({"msg" : "Could not verify. Incorrect credentials."}), 401
    except:
        return jsonify({"msg" : "Could not verify. Incorrect credentials."}), 401

# Admin routes
@blueprint_api.route('/create-user', methods=['POST'])
def create_user():
    """
    Creates user object, inserts into database.
    """
    json_data = request.get_json()
    user_name = json_data["user_name"]
    email = json_data["email"]
    password = json_data["password"]
    first_name = json_data["first_name"]
    last_name = json_data["last_name"]

    # # Create new User
    new_user = user(user_name, email, first_name, last_name)
    
    # # Insert user
    success = new_user.create_user(password)
    if success:
        output = {"msg" : "Create-user POST endpoint from blueprint_api is successful."}
        code = 201
    else:
        output = {"msg" : "Error during user creation"}
        code = 400

    return jsonify(output), code


@blueprint_api.route('/query-all-users', methods=['GET'])
@token_required
@admin_required
def query_users(current_user):
    """
    Queries database, returns all users data allowed for admins.
    
    Requires:
        JWT verifiable token
        Admin role
    """
    data = user.query.all()
    result: list = []
    for single_user in data:
        temp = single_user.return_user_admin_public_info()
        
        result.append(temp)

    return jsonify(result)


@blueprint_api.route('/query-user/<id>', methods=['GET'])
@token_required
@admin_required
def query_single_user(current_user, id):
    """
    Queries database, returns requested user data allowed for admins.
    
    Requires:
        JWT verifiable token
        Admin role
    """
    data = user.query.filter_by(user_id = id).first_or_404()
    result = data.return_user_admin_public_info()

    return jsonify(result)