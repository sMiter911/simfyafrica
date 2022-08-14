# SIMFY AFRICA

Objective
Create a simple Music API to handle operations on Tracks and Playlists.

The main CRUD objectives have be implemented. Database use was MongoDB. In order to create the REST APIs Loopback 4 was used. JWT Auth and Authorization was used in order to protect the endpoints.

## Requirement

1. NodeJS
2. Loopback CLI (npm install -g @loopback/cli)
3. MongoDB

## Feautures not added

1. Logging
2. Caching
3. Unit Test - File and suite created for future unit testing

## Features added

1. Auth and Authorization
2. CRUD

# Start of application

```sh
npm i
npm start
```

Once launched, go to localhost:3000 on you browser. adn select /explorer.

## Accessing Endpoints

Sign up using the `/signup` API, this is to create a user:

```sh
{
  "email": "testuser@example.com",
  "password": "testuser"
}
```

Then Log in using the `POST /users/login` API (same structure).

After calling `/users/login`, the response body will look something like:

```
{
  "token": "XXXXXXXXXXX.XXXXXXXXXXXXX"
}
```

\*Above is an example
