# Login

In this the login authentication is done by using Passport JS.

## Requirement

node version : v12.14.1
psql (PostgreSQL) : 9.5.19

## for package install

```node
npm i
```

## configure file .env

create .env file
and paste following

DB_HOST=localhost
DB_USER=Abhishek
DB_PASS=1234
DB_NAME=login
DB_DIALECT=postgres
DB_PORT=5432 
APP_HOST=localhost
APP_PORT=3000
SECRET=adasxovnklnqklnkjdsankdnw


# start connection with server

```node
node index.js
```