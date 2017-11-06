### Schema

CREATE DATABASE burger_db;
USE burger_db;

CREATE TABLE burgers
(
	id int NOT NULL AUTO_INCREMENT,
    description VARCHAR(255),
    createdAt TIMESTAMP NOT NULL,
    PRIMARY KEY (id),
	name varchar(255) NOT NULL,
	devoured BOOLEAN DEFAULT false,
    date DATETIME default NOT NULL,
);

INSERT INTO burgers (name, devoured) VALUES ('bacon cheeseburger', true);
