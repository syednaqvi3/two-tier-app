CREATE DATABASE IF NOT EXISTS testdb;

USE testdb;

CREATE TABLE users (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(100)
);

INSERT INTO users (name) VALUES
('Ali'),
('Ahmed'),
('Sara'),
('Hamza');
