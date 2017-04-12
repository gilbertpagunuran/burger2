CREATE DATABASE burgers_db;

USE burgers_db;

CREATE TABLE burgers
(
	id int NOT NULL AUTO_INCREMENT,
	burger_name CHAR(25) NOT NULL,
	devoured BOOLEAN NOT NULL DEFAULT FALSE,
	create_tmstmp TIMESTAMP NOT NULL,
	PRIMARY KEY (id)
);

