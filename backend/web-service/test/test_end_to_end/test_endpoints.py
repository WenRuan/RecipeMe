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