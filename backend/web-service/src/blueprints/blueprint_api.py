from flask import Blueprint, jsonify, request

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
