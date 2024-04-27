## Ejecución 🚀

### Tecnologías y herramientas 🔧🌟

- MySQL
- Java 17
- Maven 4.0.0
- Spring Boot 3.2.5
- React

### *Parte I: Base de datos*

Dentro de la carpeta scripts se encuentran los scrips para la creación de la base de datos, inserccion de datos y consultas sql realizadas a la misma

### *Parte II: Interfaz de Programación de Aplicación (API)*

Dentro de la carpeta *e-commerce* se encontraran con el desarrollo de la API utilizando Java y Spring para el diseño de la capa de acceso de datos.

El proyecto tiene la siguiente estructura:

```
   e-commerce
   │   .mvn
   │   .gitignore
   │   mvnw
   │   mvnw.cmd
   │   pom.xml
   └───src
```

##### ⚡ Ejecución ulizando IntelliJ IDEA

1. Abriremos el proyecto con *IntelliJ IDEA* e iremos a la siguiente ruta
```
 src/main/java/resources/application.yml 
```

 Reemplazaremos los campos user y password por las credenciales de nuestro gestor de base de datos:

```
    username: DB-USER
    password: DB-PASSWORD
```

2. Nos dirigiremos a la ruta 
```
 /src/main/java/com/tbtbglobal/ecommerce/
```
Daremos click derecho sobre el archivo y Run
```
ECommerceApplication.java
```
En este punto la aplicación deberia estar ejecutandose.


##### ⚡ Ejecución ulizando la terminal 

👁 Se debe tener instalado Maven y Java 17

1. Ejecutamos los siguiente comandos sobre la carpeta e-commerce:
```
mvn package
```
Para la compilacion y empaquetamiento del proyecto.

```
$ java -jar target\e-commerce-0.0.1-SNAPSHOT.jar
```
En este punto la aplicación deberia estar ejecutandose.


#### 🤖 Pruebas en Postman

*Endpoint :*  http://localhost:8080/api/v1/clients

Cuerpo de la peticion POST y PUT:
```
{
    "name":"Andres",
    "lastName":"Perez",
    "phone":"33434555"
}
```

*Nota*: Las peticiones GET, PUT y DELETE reciben el id del cliente que se quiere listar, actualizar o eliminar como PATH VARIABLE

### *Parte III: Aplicación Web*

Dentro de la carpeta *AplicacionWeb* se encuentra el desarrollo de este punto.

#### ⚡Ejecucion

Una vez sobre la carpeta *AplicacionWeb* ejecutaremos los siguientes comandos:

```
npm install
```
para instalar las dependencias dentro del package.json

```
npm run dev
```
Para la ejecucion de la aplicación.