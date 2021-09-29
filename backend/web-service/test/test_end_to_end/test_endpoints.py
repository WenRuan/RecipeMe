import os
import requests

def test_blueprint_api_test_get(api_v1_host):
    endpoint = os.path.join(api_v1_host, 'api', 'test').replace("\\", "/")
    response = requests.get(endpoint)
    assert response.status_code == 200
    json = response.json()
    assert 'msg' in json
    assert json['msg'] == "Test GET endpoint from blueprint_api is successful."

def test_blueprint_api_test_post(api_v1_host):
    endpoint = os.path.join(api_v1_host, 'api', 'test').replace("\\", "/")
    response = requests.post(endpoint)
    assert response.status_code == 200
    json = response.json()
    assert 'msg' in json
    assert json['msg'] == "Test POST endpoint from blueprint_api is successful."

def test_blueprint_api_login(api_v1_host, py_admin_user):
    login_endpoint = os.path.join(api_v1_host, 'api', 'login').replace("\\", "/")
    
    # Login
    response_login = requests.post(login_endpoint, data={}, auth=py_admin_user)
    assert response_login.status_code == 200
    response_token = response_login.json()
    assert "token" in response_token

def test_blueprint_api_create_user_post(api_v1_host, test_user_admin, py_test_admin_token):
    endpoint = os.path.join(api_v1_host, 'api', 'create-user').replace("\\", "/")
    # Create user
    response = requests.post(endpoint, data=test_user_admin, headers=py_test_admin_token)
    assert response.status_code == 200
    json = response.json()
    assert 'msg' in json
    assert json['msg'] == "Create-user POST endpoint from blueprint_api is successful."

def test_blueprint_api_query_single_user(api_v1_host, py_test_user, py_test_admin_token):
    endpoint = os.path.join(api_v1_host, 'api', 'query-user', '19').replace("\\", "/")
    # Query User
    response = requests.getresponse = requests.get(endpoint, headers=py_test_admin_token)
    assert response.status_code == 200
    json = response.json()
    assert json == py_test_user
