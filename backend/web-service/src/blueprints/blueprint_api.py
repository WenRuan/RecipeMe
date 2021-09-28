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
    output = {"msg" : "Test GET endpoint from blueprint_api is successful."}
    return jsonify(output)


@blueprint_api.route('/test', methods=['POST'])
def test_post():
    output = {"msg" : "Test POST endpoint from blueprint_api is successful."}
    return jsonify(output)


@blueprint_api.route('/create-user', methods=['POST'])
def create_user():
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


@blueprint_api.route('/login', methods=['POST'])
def login_user():
    auth = request.authorization
    if not auth or not auth.username or not auth.password:
        return jsonify({"msg" : "Could not verify."})
    
    current_user = user.query.filter_by(user_name=auth.username).first()
    if current_user.verify_user(auth.password):
        print(current_user.public_id)
        token = jwt.encode({"public_id" : current_user.public_id, "exp" : datetime.datetime.utcnow() + datetime.timedelta(minutes=45)}, app.config['SECRET_KEY'], algorithm="HS256")

        return jsonify({"token" : token})
    return jsonify({"msg" : "Could not verify."})


@blueprint_api.route('/query-all-users', methods=['GET'])
@token_required
@admin_required
def query_users(current_user):
    data = user.query.all()
    user_list = []
    for single_user in data:
        temp_dict = {}
        temp_dict['user_id'] = single_user.user_id 
        temp_dict['user_name'] = single_user.user_name 
        temp_dict['public_id'] = single_user.public_id
        temp_dict['email'] = single_user.email 
        temp_dict['first_name'] = single_user.first_name 
        temp_dict['last_name'] = single_user.last_name 
        temp_dict['role'] = single_user.role 
        temp_dict['country_code'] = single_user.country_code 
        temp_dict['creation_date'] = single_user.creation_date 
        temp_dict['last_pinged'] = single_user.last_pinged 
        
        user_list.append(temp_dict)

    return jsonify(user_list)


@blueprint_api.route('/query-user/<id>', methods=['GET'])
@token_required
@admin_required
def query_single_user(current_user, id):
    data = user.query.filter_by(user_id = id).first_or_404()
    temp_dict = {}
    temp_dict['user_id'] = data.user_id 
    temp_dict['user_name'] = data.user_name 
    temp_dict['public_id'] = data.public_id
    temp_dict['email'] = data.email 
    temp_dict['first_name'] = data.first_name 
    temp_dict['last_name'] = data.last_name 
    temp_dict['role'] = data.role 
    temp_dict['country_code'] = data.country_code 
    temp_dict['creation_date'] = data.creation_date 
    temp_dict['last_pinged'] = data.last_pinged 

    return jsonify(temp_dict)