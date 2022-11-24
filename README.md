# Introduction 
This is a Spring Boot Angular App secured with Keycloak

# Getting Started

## Prerequisites
* Docker
* Java 17
* Node 16.16.0
* Angular 14.2.2

## Run flowable-ui
```sh
cd infra
docker-compose up
```
Keycloak UI will be running on http://localhost:8080

## Initialize Keycloak config
1. Create a realm called "myrealm"
2. Create a client called "myclient"
3. Create a role called "admin"
4. Create one user which has the "admin" role
5. Create as many users you want without specific role

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
