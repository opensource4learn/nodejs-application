# NodeJs Crud Application with PostgreSQL Database

This is a basic Crud Application written in Nodejs with PostgreSQL. This Application has a customer page where we can add the user details such as Name, Address, Email and Contact Number. These details can be modified or delete.

**Prerequisites**
  * [Nodejs](https://nodejs.org/en/)
  * [PostgreSQL](https://www.postgresql.org/download/)

## Database Connections - PostgreSQL

Create database `database` in Postgresql database.

Export following variables in system environment or configure in .env file located in application `code` folder.
```
POSTGRES_USER=postgres
POSTGRES_PASSWORD=postgres
POSTGRES_HOST=localhost
POSTGRES_DB=database
PORT=3000
```

## Setting up for local development

- Clone the project using git or download zip file.
- Installing NPM Packages and Run Application.
- Application server started on port 3000 (http://localhost:3000/).

```
# `code` is the application source folder where `package.json` is located.

cd nodejs-application/code
npm install
npm start
```

## Execute the Test Cases

- The application has of basic tests written in Mocha and Chai.
- These two are JavaScript frameworks commonly used together for unit/api testing.
- We can excute the test cases by executing the `npm test --prefix code` command in separate terminal or console if the application is already running as mentioned in above section.
- To run application and execute the test cases in one go, use commands given below.

```
# `code` is the application source folder where `package.json` is located.

cd nodejs-application/code
npm run start-and-test
```

## Run Application and Database in Docker Containers

This appliocation can also be deployed using Docker and Docker Compose.

- Install the Docker daemon and docker-compose on your host machine.
- Run the following commands.

```
# Application source is consists of a `Dockerfile` and `docker-compose.yml`
# Bash script `wait-for-postgres.sh` helps to wait application until the postgres database container starts.
# User can use docker-compose `-d` option to run containers in detached mode.

cd nodejs-application
docker-compose up
```

## Summary

This Prototype includes operations like - Create, read, update, delete in a Node.js app with an Express server and Postgres database. Non-blocking PostgreSQL client for Node.js. Pure JavaScript and optional native libpq bindings.
If you encounter a bug with the library please open an issue on the GitHub repo.
