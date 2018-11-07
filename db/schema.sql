CREATE DATABASE burger_db;

USE burger_db;

CREATE TABLE burgers(
    id INT AUTO_INCREMENT,
    burger_name NVARCHAR(30),
    devour BOOLEAN,
    PRIMARY KEY (id)
);