CREATE DATABASE burger_db;

USE burger_db;

CREATE TABLE burgers(
    id INT NOT NULL AUTO_INCREMENT,
    burger_name NVARCHAR(30) NOT NULL,
    devour BOOLEAN,
    PRIMARY KEY (id)
);