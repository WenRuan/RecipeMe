from ..app import db
from passlib.hash import pbkdf2_sha256
from uuid import uuid4

class user(db.Model):
    """
    A class to represent a user

    ...
    Attributes
    ----------
    __tablename__ : str
        name of table in database
    user_id : int
        unique id of the user
    user_name : str
        unique display name of the user
    email : str
        email associated with the user
    hashed_password : str
        hashed password used to verify the user
    public_id : str
        publicly used id of the user (used to keep user_id private)
    first_name : str
        first name of the user
    last_name : str
        last name of the user
    role : str
        roles assigned to the user
    country_code : str
        code associated with user's country
    creation_date : str
        date the user was created
    last_pinged : str
        date the user last pinged the server
    
    Methods
    -------
    create_user(password) -> bool:
        Inserts self into database.

    verify_user(password) -> bool:
        Return if passed password verfies against user hashed password.

    return_user_admin_public_info(self) -> dict:
        Return user data approved for admin usage.
    """
    __tablename__ = "user"

    user_id         = db.Column("user_id",          db.Integer, primary_key = True)
    user_name       = db.Column("user_name",        db.String(50))
    email           = db.Column("email",            db.String(255))
    hashed_password = db.Column("hashed_password",  db.String(255))
    public_id       = db.Column("public_id",        db.String(255))
    first_name      = db.Column("first_name",       db.String(255))
    last_name       = db.Column("last_name",        db.String(255))
    role            = db.Column("role",             db.String(255))
    country_code    = db.Column("country_code",     db.String(255))
    creation_date   = db.Column("creation_date",    db.String(30))
    last_pinged     = db.Column("last_pinged",      db.String(30))

    def __init__ (self, user_name, email, first_name, last_name, role = 'basic') -> None:
        """Inits user class with client-passed data."""
        self.user_name = user_name
        self.email = email
        self.user_name = user_name
        self.first_name = first_name
        self.last_name = last_name
        self.role = role

    def create_user(self, password) -> bool:
        """Inserts self into database."""
        self.hashed_password = pbkdf2_sha256.hash(password)
        self.public_id = uuid4()
        if pbkdf2_sha256.verify(password, self.hashed_password):
            db.session.add(self)
            db.session.commit()
            return True
        else:
            return False

    def verify_user(self, password) -> bool:
        """Return if passed password verfies against user hashed password."""
        if pbkdf2_sha256.verify(password, self.hashed_password):
            return True
        else:
            return False

    def return_user_admin_public_info(self) -> dict:
        """Return user data approved for admin usage."""
        result: dict = {}

        result['public_id']     = self.public_id
        result['user_name']     = self.user_name    
        result['email']         = self.email 
        result['first_name']    = self.first_name 
        result['last_name']     = self.last_name 
        result['role']          = self.role 
        result['country_code']  = self.country_code 
        result['creation_date'] = self.creation_date 
        result['last_pinged']   = self.last_pinged

        return result