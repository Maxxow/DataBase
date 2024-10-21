# h1
## h2
###### h6

# Operaciones Crud en MySql
**Palabra en Negrita**
*Palabra*
---
Las operaciones *CRUD* son un conjunto de 4 operaciones fundamentales en el manejo de bases de datos. CRUD es un acronimo de:
---
- 1.-**C**reate(Crear)

- 2.-**R**ead(Leer)

- 3.-**U**pdate(Actualizar)

- 4.-**D**elete(Eliminar)

**Primero creamos una tabla:** 
```sql 
CREATE TABLE Users(
    id_user INT PRIMARY KEY AUTO_INCREMENT,
    email_user VARCHAR(100) UNIQUE NOT NULL CHECK(email_user LIKE "%_@_%._%"),
    password VARCHAR(15) NOT NULL CHECK(password (LENGTH(password)>=8)),
);
``` 

## Create
la operacion crear es responsable de insertar nuevos datos en la base de datos. En MySQL esto se realiza con la sentencia: 
`INSERT INTO` o `INSERT`. El proposito de la operacion es añadir el nuevo registro o fila a una tabla
```sql
-- Ejemplo de una insercion valida usando todos los caracteres 
INSERT INTO Users VALUES(1, "m4x025o@gmail.con", "12345678");

-- Ejemplo de una insercion valida usando el comando DEFAULT
INSERT INTO Users VALUES(DEFAULT, "ejemplo1@gmail.com", "abcdefeg");

-- Ejemplo de una insercion sin incluir el id user con INSERT
INSERT Users(email_user, password) VALUES ("ejemplo@gmai.com","12345678");

-- 


```
### Ejercicio 
Identifica los errores que pueden salir con esta tabla e inserta 4 registros nuevos en un solo INSERT 

```sql
INSERT Users(email_user, password) VALUES ()
```

## Leer
La operacion leer es utilizada para consultar o recuperar datos de la DataBase. Esto no modifica los datos, simplemente los extráe. En MySQL, esta operacion se realiza con la sentencia: `SELECT` 
```sql
-- Ejemplo para consulta datos de una tabla
SELECT * FROM Users;

-- Ejemplo de consulta condicionada para un registro en especifico a traves del id con el comando WHERE
SELECT * FROM Users WHERE id_users=1;

-- Ejemplo de consulta para un registro con un email en especifico 
SELECT * FROM Users WHERE email = "Ejemplo@gmail.com";

-- Ejemplo de consulta con solo el campo email
SELECT email FROM Users; 

-- Ejemplo de consulta con un condicional logico 
-- con el check
SELECT * FROM Users WHERE password = passsword>=9;

--Ejemplo corregido:
SELECT * FROM Users WHERE password CHECK(password (LENGTH(password)>=9))

-- Ejercicio, Realiza una consulta que muestre solo el email que concida con una contraseña de mas de 8 caracteres y otra que realice una consulta a los id´s pares 

```
## 3.-UPDATE (Actualizar)
La operacion actualizar se utiliza para modificar registros existentes en la base de datos. Esto se hace con la setencia `UPDATE`. especificamos que datos cambiar y aplicamos condiciones para identificar los registros a actualizar 
```sql
-- Ejemplo para actualizar la contraseña de un usuario por su id 
UPDATE Users SET password="12345xyz" WHERE id_user = 12;

-- Ejemplo para actulizar el email y password de un usario especifico 
UPDATE Users SET email="correo@gmail.", password="12345678" WHERE id_user=7;

-- Ejercicio, Intenta actualizar registros con valores que violen las restricciones
UPDATE Users SET email = "ejemplo0@gmail.com" WHERE id_users = 1;

UPDATE Users SET password = "12345678abcdefg" WHERE id_users = 1;

UPDATE Users SET email = "ejemplo.gmail.com" WHERE id_users = 1;


```
## DELETE
La operacion *ELIMINAR* se usa para borrar registros de la base de datos esto se realiza con la senrencia ```DELETE```. debemos ser muy cuidadosos con esta operacion ya que una vez que los datos son eliminados no pueden ser recuperados 
```sql
-- Eliminar el usuario por el id
DELETE FROM Users WHERE  id_users = 1;
-- Eliminar los usarios con el email especifico
DELETE FROM Users WHERE email = "ejemplo12@gmail.com";
-- Eliminar todos los registros de la tabla
DELETE FROM Users;
-- Eliminar usuarios cuya contraseña tenga menos de 10 caracteres
DELETE FROM Users WHERE LENGTH (password) < 10

```
### Ejercicios 
```sql
--Eliminar usuarios cuyo email contenga uno o mas 5´s 
DELETE FROM Users WHERE email_user CHECK(email_user LIKE "%_5@_%._%")

--ELiminar usuarios que tengan una contraseña que contenga letras mayusculas 
DELETE FROM Users WHERE password REGEXP '[A-Z]'

--Eliminar usuarios con contraseñas que contengan solo numeros
DELETE FROM Users WHERE password REGEXP '^[1-9]'

--Eliminar usuarios que no tengan el dominio gmail.com
DELETE FROM Users WHERE email_user CHECK(email_user LIKE "%_@gmail%._%")

-- Ejemplo LIKE
email_user VARCHAR(100) UNIQUE NOT NULL CHECK(email_user LIKE "%_@_%._%")
```
