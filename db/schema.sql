CREATE DATABASE IF NOT EXISTS burger_db;

USE burger_db;

DROP TABLE IF EXISTS burgers;

CREATE TABLE burgers(
    id INT NOT NULL AUTO_INCREMENT,
    burger_name NVARCHAR(30) NOT NULL,
    devour BOOLEAN DEFAULT false,
    PRIMARY KEY (id)
);