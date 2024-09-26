# Tarea, identificacion de errores en el codigo
Bloque de codigo a revisar:
```sql
CREATE TABLE Users(
    id_user INT PRIMARY KEY AUTO_INCREMENT,
    email_user VARCHAR(100) UNIQUE NOT NULL CHECK(email_user LIKE "%_@_%._%"),
    password VARCHAR(15) NOT NULL CHECK(password (LENGTH(password)>=8)),
);

-- Ejemplo de una insercion valida usando todos los caracteres 
INSERT INTO Users VALUES(1, "m4x025o@gmail.con", "12345678");

-- Ejemplo de una insercion valida usando el comando DEFAULT
INSERT INTO Users VALUES(DEFAULT, "ejemplo1@gmail.com", "abcdefeg");

-- Ejemplo de una insercion sin incluir el id user con INSERT
INSERT Users(email_user, password) VALUES ("ejemplo@gmai.com","12345678");

```
## Primer error:

```sql
CREATE TABLE Users(
    id_user INT PRIMARY KEY AUTO_INCREMENT,
    email_user VARCHAR(100) UNIQUE NOT NULL CHECK(email_user LIKE '%_@_%._%'),
    password VARCHAR(15) NOT NULL CHECK(LENGTH(password) >= 8) -- Aqui el error fue la sintaxis para que evalue bien que tiene que se mayor o igual a 8 caracteres
);
```
## Segundo Error
```sql
-- En la linea:
INSERT INTO Users VALUES(1, "m4x025o@gmail.con", "12345678");
-- El error es en el 1 ya que como tiene el AUTO_INCREMENT se lo v a asignar solo

--///////////////////////////////////////////////////////////////

--Error corregido:
INSERT INTO Users(email_user, password) VALUES ("m4x025o@gmail.com", "12345678");

```

## Tercer Error
```sql
-- En esta linea el error esta en la contraseña ingresada es de 7 caracteres y en el CHECK indicamos que fuera mayor o igual a 8
INSERT INTO Users VALUES(DEFAULT, "ejemplo1@gmail.com", "abcdefg");
--//////////////////////////////////////////////////////////
-- Error corregido
INSERT INTO Users VALUES(DEFAULT, "ejemplo1@gmail.com", "abcdefghi");
```

## Cuarto error
```sql
-- 
```
## Asignacion de la validacion logica a una tabla

```sql
-- Ejemplo de consulta con un condicional logico 
-- con el check
SELECT * FROM Users WHERE password = passsword>=9;

--Ejemplo corregido:
SELECT * FROM Users WHERE password CHECK(password (LENGTH(password)>=9));

```
## Ejercicio, Realiza una consulta que muestre solo el email que concida con una contraseña de mas de 8 caracteres y otra que realice una consulta a los id´s pares:
```sql
--Contraseña de 8 caracteres
SELECT email_user FROM Users WHERE password CHECK(LENGTH (password) >= 9);
--///////////////////////////////////////////////////////////////////////
--Consulta de los id´s pares
SELECT id_user FROM Users Where id CHECK(LENGTH (id_user) = (id % 2 = 0));

```