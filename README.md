## Simple Rest API for React-App

## Installation

```bash
$ npm install
```
## Docker configuration
```bash
$ docker-compose up -d
```

## Running the app

```bash
#migrations
$ npm run migration:generate
$ npm run migration:run

# development
$ npm start

```

## Configure .env file
You should create the Postgres db and configure the .env file with that date.
```bash
POSTGRES_USER='some user'

POSTGRES_PASSWORD='some password'

POSTGRES_DB='some db name'

POSTGRES_PORT='some port'

JWT_SECRET='secretKay'
```

# Examples of requests
# Create report
### POST

### http://localhost:8000/api/create/report
``` bash 
{
    "userAgent": "Mozilla/5.0 (X11; CrOS x86_64 8172.45.0) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/51.0.2704.64 Safari/537.36",
    "category": "category 58",
    "countryid": "it",
    "creationdate": 1651281626947,
    "id": "408f10d8-62a3-40bc-a65d-51c511bd78fa",
    "clientid": "2f4cbf92-ca71-4f2f-ae0b-8d9a4f8b8d13",
    "subcategory": "subcategory 01"
}
```
# Get all reports
### GET
### http://localhost:8000/api/reports

# Login
### POST
### http://localhost:8000/apo/clients/login
``` bash 
{
    "email": "user343@user.com",
    "password": "33432423"
}
```

# Registration
### POST
### http://localhost:8000/api/clients/create
``` bash 
{
    "email": "password@gmail",
    "username": "vika",
    "password": "password"
}
```
