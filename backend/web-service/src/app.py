"""Flask Application"""

# Load libraries
from flask import Flask, jsonify
import sys

# Init Flask app
app = Flask(__name__)

# Load configuration
app.config.from_object("config.DevelopmentConfig")

# Load SQL Alchemy and initialize
from flask_sqlalchemy import SQLAlchemy
db = SQLAlchemy(app)

# Load modules
from src.blueprints.blueprint_api import blueprint_api

print(app.config["SQLALCHEMY_DATABASE_URI"])

# Register blueprints (versioning included here)
app.register_blueprint(blueprint_api, url_prefix="/api/v1/api")
