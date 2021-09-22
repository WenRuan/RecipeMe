"""Flask Application"""

# Load libraries
from flask import Flask, jsonify
import sys


# Load modules
from src.blueprints.blueprint_api import blueprint_api

# Init Flask app
app = Flask(__name__)


# Register blueprints (versioning included here)
app.register_blueprint(blueprint_api, url_prefix="/api/v1/api")
