# Introduction 
This is a Spring Boot Angular App secured with Keycloak

# Getting Started

## Prerequisites
* Docker
* Java 17
* Node 16.16.0
* Angular 14.2.2
* React 18.2 with Redux Toolkit 1.9.1

## Run flowable-ui
```sh
cd infra
docker-compose up
```
Keycloak UI will be running on http://localhost:8080

## Initialize Keycloak config
1. Create a realm called "myrealm"
2. Create a client called "myclient"
3. Fill in Valid redirect URIs, Valid post logout and Web origin with "http://localhost:4200"
4. Create a role called "admin"
5. Create one user which has the "admin" role
6. Create as many users you want without specific role

## Run the backend
```sh
./gradlew bootRun
```

## Run the frontend
```sh
cd frontend
npm i
ng serve 
```

## React Keycloak config
Add in the Keycloak UI "http://localhost:3000/*" in Valid redirect URIs and Valid post logout redirect URIs and "http://localhost:3000" in Web origin

## Run the React frontend
```sh
cd react-frontend
npm i
npm run start
```
