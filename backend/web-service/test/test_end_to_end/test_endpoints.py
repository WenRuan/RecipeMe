import os
import requests

################################################
# Testing the GET /api/test
# Test successful
def test_blueprint_api_test_get(api_v1_host):
    """Tests the successfulresponse message and response code of /api/test."""
    endpoint = os.path.join(api_v1_host, 'api', 'test').replace("\\", "/")
    response = requests.get(endpoint)
    assert response.status_code == 200
    json = response.json()
    assert 'msg' in json
    assert json['msg'] == "Test GET endpoint from blueprint_api is successful."


################################################
# Testing the POST /api/test
# Test successful
def test_blueprint_api_test_post(api_v1_host):
    """Tests the successful response message and response code of /api/test."""
    endpoint = os.path.join(api_v1_host, 'api', 'test').replace("\\", "/")
    response = requests.post(endpoint)
    assert response.status_code == 200
    json = response.json()
    assert 'msg' in json
    assert json['msg'] == "Test POST endpoint from blueprint_api is successful."


################################################
# Testing the login route /api/login
# Successful test
def test_blueprint_api_login_success(api_v1_host, py_admin_user):
    """Tests the login function to see if a token is returned and status code 200."""
    login_endpoint = os.path.join(api_v1_host, 'api', 'login').replace("\\", "/")
    
    # Login
    response_login = requests.post(login_endpoint, data={}, auth=py_admin_user)
    assert response_login.status_code == 200
    response_token = response_login.json()
    assert "token" in response_token

# Failure tests
# Incorrect user
def test_blueprint_api_login_failure_incorrect_username(api_v1_host, py_admin_user):
    """Tests the login function to see if failure is given when provided wrong username."""
    login_endpoint = os.path.join(api_v1_host, 'api', 'login').replace("\\", "/")
    
    # Login (setting incorrect username)
    temp_user = (py_admin_user[0] + 'q', py_admin_user[1])
    response_login = requests.post(login_endpoint, data={}, auth=temp_user)
    assert response_login.status_code == 401
    json = response_login.json()
    assert "msg" in json
    assert json["msg"] == "Could not verify. Incorrect credentials."

# Incorrect password
def test_blueprint_api_login_failure_incorrect_password(api_v1_host, py_admin_user):
    """Tests the login function to see if failure is given when provided wrong password."""
    login_endpoint = os.path.join(api_v1_host, 'api', 'login').replace("\\", "/")
    
    # Login (setting incorrect username)
    temp_user = (py_admin_user[0], py_admin_user[1] + 'q')
    response_login = requests.post(login_endpoint, data={}, auth=temp_user)
    assert response_login.status_code == 401
    json = response_login.json()
    assert "msg" in json
    assert json["msg"] == "Could not verify. Incorrect credentials."


################################################
# Testing the create user route /api/create-user
def test_blueprint_api_create_user_post(api_v1_host, test_user_admin, py_test_admin_token):
    """Tests the status code and message to ensure was successful with creation."""
    endpoint = os.path.join(api_v1_host, 'api', 'create-user').replace("\\", "/")
    # Create user
    response = requests.post(endpoint, data=test_user_admin, headers=py_test_admin_token)
    assert response.status_code == 201
    json = response.json()
    assert 'msg' in json
    assert json['msg'] == "Create-user POST endpoint from blueprint_api is successful."


################################################
# Testing the query single user route /api/query-user
def test_blueprint_api_query_single_user(api_v1_host, py_test_user, py_test_admin_token):
    endpoint = os.path.join(api_v1_host, 'api', 'query-user', '4').replace("\\", "/")
    # Query User
    response = requests.getresponse = requests.get(endpoint, headers=py_test_admin_token)
    assert response.status_code == 200
    json = response.json()
    assert json == py_test_user
