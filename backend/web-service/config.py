"""Configuration file for environments of application"""


# Base Configuration
class Config(object):
    DEBUG                   = False
    TESTING                 = False

    SECRET_KEY              = ""

    SQLALCHEMY_DATABASE_URI = ""


# Production Configuration
class ProductionConfig(Config):
    SECRET_KEY              = ""
    SQLALCHEMY_DATABASE_URI = ""


# UAT Configuration
class UATConfig(Config):
    SECRET_KEY              = ""
    SQLALCHEMY_DATABASE_URI = ""


# Development Configuration
class DevelopmentConfig(Config):
    DEBUG                   = True
    TESTING                 = True

    SECRET_KEY              = ""
    SQLALCHEMY_DATABASE_URI = ""