#CREATE DATABASE ToList;

#USE ToList;

CREATE TABLE User (
	UserId 			INT AUTO_INCREMENT PRIMARY KEY,
    UserName 		VARCHAR(200),
	UserEmail 		VARCHAR(200),
    UserPassword	VARCHAR(200),
    UserStatus		BOOL DEFAULT true
);

SELECT * FROM User;

INSERT INTO User 
	(UserName, UserEmail, UserPassword, UserStatus)
VALUES 
	('Nome 1', 'email1@teste.com', 'S3nh@_1', DEFAULT),
	('Nome 2', 'email2@teste.com', 'S3nh@_2', false),
	('Nome 3', 'email3@teste.com', 'S3nh@_3', DEFAULT),
	('Nome 4', 'email4@teste.com', 'S3nh@_4', false);

SELECT * FROM User;