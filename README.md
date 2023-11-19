# Marvel-API

Project of Marvel library using data from Json hosted by Le Reacteur training center's API
See full project online via this link ==> https://marvel-library-23.netlify.app/

## Description

This project contains all Routes for front-end project (see Front-end repo here ==> https://github.com/Vincent-Saillard/Marvel-Front)

Requests are sent to API whit API key hidden in .env file
* Index
  * User Routes
    * Create User (Register) POST method, send back a Token
    * Login User (Login) POST method, send back a Token
  * Favorite Routes
    * Add fav to list , POST method, Bearer token necessary sent in Headers
    * Delete fav from list, DELETE method, Bearer token necessary sent in Headers
    * Get all favs, GET method, Bearer token necessary sent in Headers
  * Characters Routes
    * Get list of all characters, with filters (name, results limit number, skip page number) GET method
    * Get a specific character by Id, GET method
  * Comics Routes
    * Get list of all comics, with filters (title, results limit number, skip page number) GET method
    * Get a specific comic by comic's Id, GET method
    * Get list of comics by character's Id, GET method
   
  It is hosted on NorthFlank and tested before using Postman, database is on MongoDB.

## Getting Started

use npm to install needed dependencies and npx nodemon to test

### Dependencies

- Express
- Cors
- Mongoose
- dotenv
- crypto-js
- uid2
- nodemon

## Author

Vincent Saillard

- https://www.linkedin.com/in/vincent-saillard-096255a7/
- https://github.com/Vincent-Saillard

## Acknowledgments

[Northflank](https://pbs.twimg.com/profile_images/1260194537001103361/grioVrbA_400x400.png)

[Postman](https://logowik.com/content/uploads/images/postman-api-platform6643.logowik.com.webp)

[MongoDB](https://infinapps.com/wp-content/uploads/2018/10/mongodb-logo.png)
