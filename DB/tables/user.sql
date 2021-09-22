CREATE TABLE [IF NOT EXISTS] user (
    user_id             INT AUTO_INCREMENT,
    user_name           VARCHAR(255),

    email               VARCHAR(255),

    hashed_password     VARCHAR(255),
    public_id           VARCHAR(255),

    salt                VARCHAR(255),
    
    first_name          VARCHAR(20),
    last_name           VARCHAR(20),

    country_code        VARCHAR(10),

    creation_date       TIMESTAMP,
    last_pinged         TIMESTAMP,

    primary key(user_id)
);