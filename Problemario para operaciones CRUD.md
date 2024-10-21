# Problemario para operaciones CRUD

## CREACION DE LA BASE DE DATOS

```sql
CREATE TABLE clientes (
    id_cliente INT PRIMARY KEY AUTO_INCREMENT,
    nombre VARCHAR(100) NOT NULL,
    email VARCHAR(100) UNIQUE NOT NULL CHECK (email LIKE '%_@_%._%'),
    telefono VARCHAR(15) CHECK (LENGTH(telefono) >= 10),
    direccion VARCHAR(255) NOT NULL
);
```

## Ejercicios CREATE

1. Inserta un cliente válido en la tabla.

2. Inserta un cliente sin especificar el campo `id_cliente`.

3. Intenta insertar un cliente con un formato de correo incorrecto (debería fallar).

4. Inserta múltiples clientes en una sola consulta.

5. Inserta un cliente con un número de teléfono de menos de 10 caracteres (debería fallar).

```sql
-- I
INSERT INTO clientes VALUES (45, "Maxin", "ejemplo1@gmail.com", "5549154852", "Naucalpan El Molinito");
--II
INSERT INTO clientes VALUES (DEFAULT, "Luis", "ejemplo@gmail.com", "5549227752", "Naucalpan El Molinito")
--III
INSERT INTO clientes VALUES (DEFAULT, "David", "ejemplo@gmailcom", "5541478952", "Aculco San Martin Ejido")
--IV
  INSERT Users VALUES (DEFAULT, "Nombre0", "example01@gmail.com","123456788") ,
  (DEFAULT, "Nombre1","example02@gmail.com","123456788") ,
  (DEFAULT, "Nombre2","example03@gmail.com","123456788") ,
  (DEFAULT, "Nombre3","example04@gmail.com","123456788") ,
  (DEFAULT, "Nombre4","example05@gmail.com","123456788") ,
  (DEFAULT, "Nombre5","example06@gmail.com","123456788") ,
  (DEFAULT, "Nombre6","example07@gmail.com","123456788") ,
  (DEFAULT, "Nombre7","example08@gmail.com","123456788") ,
  (DEFAULT, "Nombre8","example09@gmail.com","123456788") ,
  (DEFAULT, "Nombre9","example10@gmail.com","123456788") ,
  (DEFAULT, "Nombre10","example11@gmail.com","123456788") ,
  (DEFAULT, "Nombre11","example12@gmail.com","123456788") ,
  (DEFAULT, "Nombre12","example13@gmail.com","123456788") ,
  (DEFAULT, "Nombre13","example14@gmail.com","123456788") ,
  (DEFAULT, "Nombre14","example15@gmail.com","123456788") ,
  (DEFAULT, "Nombre15","example16@gmail.com","123456788") ,
  (DEFAULT, "Nombre16","example17@gmail.com","123456788") ,
  (DEFAULT, "Nombre17","example18@gmail.com","123456788") ,
  (DEFAULT, "Nombre18","example19@gmail.com","123456788") ,
  (DEFAULT, "Nombre19","example50@gmail.com","123456788") ;
--V
INSERT INTO clientes VALUES (DEFAULT, "Luis Gabriel", "ejemplo@gmailcom", "5541478", "El tejon")
```

## Ejercicios READ

1. Consulta todos los registros de la tabla `clientes`.

2. Consulta el `nombre` y `email` de todos los clientes.

3. Consulta los clientes cuyo número de teléfono empiece con "555".

4. Consulta los clientes cuyo nombre contenga "López".

5. Consulta los clientes ordenados por `nombre` en orden ascendente.

6. Consulta el `email` de los clientes cuyo id sea par.

7. Consulta los clientes con direcciones que contengan más de 10 caracteres.


```sql
--I
SELECT * FROM clientes;
--II
SELECT email, nombre FROM clientes;
--III
SELECT 

```

## Ejercicios UPDATE

1. Actualiza el número de teléfono de un cliente específico.

2. Cambia el `email` de un cliente con un `id_cliente` específico.

3. Intenta actualizar el correo de un cliente a un email que ya existe (debería fallar).

4. Actualiza la dirección de todos los clientes cuyos nombres contengan "López".

5. Incrementa los `id_cliente` de todos los clientes en 10 (esto es solo un ejercicio teórico).

## Ejercicios DELETE

1. Elimina un cliente específico con un `id_cliente` dado.

2. Elimina todos los clientes que tengan un número de teléfono que empiece con "555".

3. Elimina todos los clientes cuyo nombre contenga "Gómez".

4. Elimina todos los clientes con direcciones que contengan menos de 10 caracteres.

5. Elimina todos los registros de la tabla `clientes` (¡CUIDADO!).


