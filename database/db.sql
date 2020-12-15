CREATE DATABASE finalProjectMTC; 

-- Using the database
use finalProjectMTC;

-- Tables
CREATE TABLE contacts (
    id INT(6) UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(200) NOT NULL,
    email VARCHAR(250),
    phone VARCHAR(15)
);

-- tpahow all tables
SHOW TABLES;

-- to describe the table
describe contacts;

update user set password=PASSWORD(root) where user='root';