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
        return jsonify({"msg" : "Could not verify."})
    
    current_user = user.query.filter_by(user_name=auth.username).first()
    if current_user.verify_user(auth.password):
        token = jwt.encode({"public_id" : current_user.public_id, "exp" : datetime.datetime.utcnow() + datetime.timedelta(minutes=45)}, app.config['SECRET_KEY'], algorithm="HS256")

        return jsonify({"token" : token})
    return jsonify({"msg" : "Could not verify."})

# Admin routes
@blueprint_api.route('/create-user', methods=['POST'])
@token_required
@admin_required
def create_user(current_user):
    """
    Creates user object, inserts into database.
    
    Requires:
        JWT verifiable token
        Admin role
    """
    user_name = request.form["user_name"]
    email = request.form["email"]
    password = request.form["password"]
    first_name = request.form["first_name"]
    last_name = request.form["last_name"]
    role = request.form["role"]

    # Create new User
    new_user = user(user_name, email, first_name, last_name, role)
    
    # Insert user
    success = new_user.create_user(password)
    if success:
        output = {"msg" : "Create-user POST endpoint from blueprint_api is successful."}
    else:
        output = {"msg" : "Error during user creation"}
    return jsonify(output)


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