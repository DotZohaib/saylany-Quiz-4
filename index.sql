CREATE DATABASE school_of_wisdom;

USE school_of_wisdom;

CREATE TABLE students (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(50) NOT NULL,
  surname VARCHAR(50) NOT NULL,
  gender VARCHAR(10) NOT NULL,
  dob DATE NOT NULL,
  father_name VARCHAR(100) NOT NULL,
  father_cnic VARCHAR(50) NOT NULL,
  mother_name VARCHAR(100) NOT NULL,
  mother_cnic VARCHAR(50) NOT NULL,
  father_cell VARCHAR(50) NOT NULL,
  mother_cell VARCHAR(50) NOT NULL,
  phone_res VARCHAR(50),
  email VARCHAR(100) NOT NULL,
  address TEXT NOT NULL
);
