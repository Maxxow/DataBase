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

-- Ejercicio, Realiza una consulta que muestre solo el email que concida con una contraseña de mas de 8 caracteres y otra que realice una consulta a los id´s pares 

```
