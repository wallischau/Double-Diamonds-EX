DROP DATABASE IF EXISTS sherpaDB;

CREATE DATABASE sherpaDB;

USE sherpaDB;

CREATE TABLE equipment (
  item_id INT NOT NULL AUTO_INCREMENT,
  package_level VARCHAR(5) NOT NULL,
  equipment_name VARCHAR(100) NOT NULL,
  size VARCHAR(5) NOT NULL,
  season_name VARCHAR(10) NOT NULL,
  price DECIMAL(10,2) NOT NULL,
  stock_quantity INT NULL,
  PRIMARY KEY (item_id)
);

CREATE TABLE reservations (
  reservation_id INTEGER NOT NULL AUTO_INCREMENT,
  product_name VARCHAR (100) NOT NULL,
  department_name VARCHAR (100) NOT NULL,
  price DECIMAL (10,2) NOT NULL,
  PRIMARY KEY (reservation_id)
);

CREATE TABLE payment (
  payment_id INTEGER NOT NULL AUTO_INCREMENT,
  payment_type VARCHAR(50) NOT NULL,
  payment_number VARCHAR(100) NOT NULL,
  payment_expire DATE NOT NULL,
  payment_amount DECIMAL (10,2) NOT NULL,
  PRIMARY KEY (payment_id)
);

CREATE TABLE systemUser (
  user_id INTEGER NOT NULL AUTO_INCREMENT,
  user_type VARCHAR (5) NOT NULL,
  last_name VARCHAR (100) NOT NULL,
  first_name VARCHAR (100) NOT NULL,
  user_email VARCHAR (30) NOT NULL,
  user_phone VARCHAR (20) NOT NULL,
  user_birthdate DATE NOT NULL,
  PRIMARY KEY (user_id)
);

DROP DATABASE IF EXISTS testDB;

CREATE DATABASE testDB;

USE testDB;

CREATE TABLE users (
  id INTEGER (4) AUTO_INCREMENT,
  email VARCHAR (40) NOT NULL,
  password VARCHAR (100) NOT NULL,
  PRIMARY KEY (id)
);
