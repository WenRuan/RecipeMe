import pytest
import requests
import os

def pytest_addoption(parser):
    parser.addoption("--host", action="store", default="http://localhost:5000")

@pytest.fixture(scope="session")
def host(request):
    return request.config.getoption("--host")

@pytest.fixture(scope="session")
def api_v1_host(host):
    return os.path.join(host, "api", "v1")

@pytest.fixture(scope="session")
def py_admin_user():
    test_user = ("pytest_admin","password!")
    return test_user

@pytest.fixture(scope="session")
def test_user_admin():
    test_create_user = {
        "user_name" : "pytest_user_01",
        "email" : "pytest@tester.com",
        "password" : "pytest_password",
        "first_name" : "pytester",
        "last_name" : "pytestiesLOL",
        "role" : "admin"
    }
    return test_create_user

@pytest.fixture(scope="session")
def py_test_user():
    test_create_user = {
        "country_code": None,
        "creation_date": None,
        "email": "pytest_admin@gmail.com",
        "first_name": "Chicken",
        "last_name": "Waang",
        "last_pinged": None,
        "public_id": "190a6e56-65c4-4d31-aaa4-5eb93b779864",
        "role": "admin",
        "user_name": "pytest_test_user"
    }
    return test_create_user

@pytest.fixture(scope="session")
def py_test_admin_token(api_v1_host, py_admin_user):
    login_endpoint = os.path.join(api_v1_host, 'api', 'login').replace("\\", "/")
    
    # Login
    response_login = requests.post(login_endpoint, data={}, auth=py_admin_user)
    assert response_login.status_code == 200
    response_token = response_login.json()
    assert "token" in response_token

    msg = {"x-access-tokens" : response_token["token"]}

    return msg