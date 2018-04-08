-- drop a database if exists - 
DROP DATABASE IF EXISTS moMovie;

-- create a database --
CREATE DATABASE moMovie;

-- use a database --

USE moMovie;

-- create a table --
CREATE TABLE movies (
    id INT NOT NULL AUTO_INCREMENT,
    title TEXT NOT NULL,
    release_date TEXT,
    image_path TEXT,
    rating INT,
    votes INT,
    overview TEXT,
    PRIMARY KEY(id)
);



