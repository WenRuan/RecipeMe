from ..app import db
from passlib.hash import pbkdf2_sha256
from uuid import uuid4

class user(db.Model):
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

    def __init__ (self, user_name, email, first_name, last_name, role) -> None:
        self.user_name = user_name
        self.email = email
        self.user_name = user_name
        self.first_name = first_name
        self.last_name = last_name
        self.role = role

    def create_user(self, password) -> bool:
        self.hashed_password = pbkdf2_sha256.hash(password)
        self.public_id = uuid4()
        if pbkdf2_sha256.verify(password, self.hashed_password):
            db.session.add(self)
            db.session.commit()
            return True
        else:
            return False

    def verify_user(self, password) -> bool:
        if pbkdf2_sha256.verify(password, self.hashed_password):
            return True
        else:
            return False

    def return_user_admin_public_info(self) -> dict:
        result: dict = {}

        result['user_id']       = self.user_id 
        result['user_name']     = self.user_name 
        result['public_id']     = self.public_id
        result['email']         = self.email 
        result['first_name']    = self.first_name 
        result['last_name']     = self.last_name 
        result['role']          = self.role 
        result['country_code']  = self.country_code 
        result['creation_date'] = self.creation_date 
        result['last_pinged']   = self.last_pinged

        return result