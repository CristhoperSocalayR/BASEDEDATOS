CREATE DATABASE registrosncs

USE registrosncs;

CREATE TABLE usuarios
(
	IDUS int AUTO_INCREMENT,
    NOMBRE varchar(40),
    APELLIDO varchar(40),
    DNI char(8),
    CELULAR char(9),
    EMAIL varchar(50),
    primary key (IDUS)
);

INSERT INTO usuarios
(	NOMBRE,	APELLIDO,	DNI,	CELULAR,	EMAIL)
VALUES
('Chris','Socalay Ramirez','72202308', '981750860', 'cristhoper.socalay@hotmail.com')

Select*from usuarios