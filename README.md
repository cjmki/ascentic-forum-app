![test](https://github.com/CJMki/cj-s-nodejs-express-boilerplate/actions/workflows/workflow-test.yml/badge.svg) ![build](https://github.com/CJMki/cj-s-nodejs-express-boilerplate/actions/workflows/workflow-build.yml/badge.svg)

- Boilerplate code from [Charith Jayawardana's nodejs boilerplate](https://github.com/cjmki/cj-s-nodejs-express-boilerplate)

## Table of Contents
- [Table of Contents](#table-of-contents)
- [Completion Satatus](#completion-satatus)
  - [Functional Requirements](#functional-requirements)
  - [Non-Functional Requirements (Bonus):](#non-functional-requirements-bonus)
  - [Known Bugs and Improvements](#known-bugs-and-improvements)
- [Architecture](#architecture)
  - [ER Diagram](#er-diagram)
  - [System Diagram](#system-diagram)
- [Instructions](#instructions)
  - [Running locally:](#running-locally)
  - [Running in production:](#running-in-production)
  - [Testing:](#testing)
  - [Code formatting](#code-formatting)
- [Project Structure](#project-structure)
- [API Endpoints](#api-endpoints)
  - [List of available routes:](#list-of-available-routes)
  - [API Documentation](#api-documentation)
- [Database](#database)
  - [SQL - Postgres](#sql---postgres)
- [Coding Standard](#coding-standard)
  - [**Style Guide - Linting**](#style-guide---linting)
  - [**Error Handling**](#error-handling)
  - [**Logging**](#logging)
  - [**Environment Variables**](#environment-variables)
  - [**API Validation**](#api-validation)
  - [**Secured Routes - JTW**](#secured-routes---jtw)
- [Todo list](#todo-list)


## Completion Satatus

### Functional Requirements

| Task      | Status | Comments |
| ----------- | ----------- | ----------- 
| As a guest user, I want to register myself with an email and password so that I can login to the forum.      | Done       |
| As a registered user, I want to login to the system with email and password so that I can access the forum.   | Done        |
| As a user, I want to view all the approved posts on the forum.   | Done        |
| As a user, I want to create a post so that it will be sent to admin approval.   | Done        |
| As a user, I want to comment on posts.   | Done        |
| As a user, I want to edit my own posts so that I can modify my own posts.   | Done        |
| As a user, I want to delete my own posts so that I can remove my unwanted posts.   | Done        |
| As a user, I want to have a profile page so that I can see all my posts and basic information in one place.   | Done        |
| As an admin user, I can post directly without requiring approval.   | Done        |
| As an admin user, I want to assign admin role to other users so that other users can also have admin permissions.   | Done        |
| As an admin user, I want to approve/ reject others' post so that only admin approved posts will be posted.   | Done        |
| As an admin user, I want to delete anyone's post so that I can keep the forum spam free.   | Done        |
| As an admin user, I want to block/unblock users so that I can enable or disable users from the system.   | Done        |
| As a blocked user, I cannot post or comment on the system.   | Done        |
| As a user, I want to receive a summary email about posts published on a timeframe (like posts approved within 24hours) so that I can keep updated with forum posts.   | Done        |
| As a user, I want to search for a post using the search bar so that I can filter posts by matching text or the user.   | In Progress        |
| As a user, I want to set the number of posts per page.   | Done        |

### Non-Functional Requirements (Bonus):
| Task      | Status | Comments
| ----------- | ----------- |----------
| As a developer, I want to document APIs so that it will make it easy for anyone to read about the API.      | Done       | Find more [API endpoints](#api-endpoints)
| As a developer, Develop unit tests.   | POC Done        | With tide time constraint decided to prioritize implementing functionality and as a POC completed unit testing for route `/user/login`
| As a developer, restrict API access from the public so that only authorized people with the correct token can access it.   | Done        | Find more [API Security](#secured-routes---jtw)
| As a developer, I need to debug the application for critical bugs/errors.   | Done        | Find more [Logging](#logging)
| As a developer, do error handling so that the application will be reliable.   | Done        | Find more [Error handling](#error-handling)

### Known Bugs and Improvements

Please do a global keyword search on FIXME to find inline comments regarding potential bugs and improvements.

## Architecture 

### ER Diagram 

![Tux, the Linux mascot](/assets/images/er-diagram.png)
### System Diagram 

![Tux, the Linux mascot](/assets/images/system-diagram.png)

## Instructions

### Running locally:

```bash
# start sql instance in a docker container
docker-compose --env-file ./.env.development up
```
```bash
# populate test data
npm run test:pop
```

```bash
# start node app in dev mode with hot reload enabled
npm run dev
```

### Running in production:

```bash
# start sql instance in a docker container
docker-compose --env-file ./.env.production up
```

```bash
# generate minified production build
npm run build

# start server in production mode
npm start
```

### Testing:

```bash
# run all tests
npm run test
```

Linting:

### Code formatting 

```bash
# to see exsiting linting issues
npm run lint

# to fix auto fixable linting issues
npm run lint:fix
```


## Project Structure

```
src\
 |--.storage\       # Store logging files and assests
 |--config\         # Configuration related things
 |--exceptions\     # Custom exceptions
 |--middlewares\    # Custom express middlewares
 |--models\         # Elastcisearch and SQL models (data layer)
 |--routes\         # Routes
 |--services\       # Business logic (service layer)
 |--utils\          # Utility classes and functions
 |--index.js        # App entry point
 |--server.js       # Express app
```

## API Endpoints

### List of available routes:

**User routes**:\
`POST /api/v1/user/register` \
`POST /api/v1/user/login` \
`POST /api/v1/user/logout` \
`GET /api/v1/user` - \
`GET /api/v1/users` - \
`GET /api/v1/user/post-summary` - \
`GET /api/v1/user/post` - 

**Admin routes**:\
`PATCH /api/v1/admin/approve/post` \
`PATCH /api/v1/admin/block/user` \
`PATCH /api/v1/admin/update/user` \
`DELETE /api/v1/admin/post`

**Post routes**:\
`POST api/v1/post` \
`GET api/v1/post` \
`PUT api/v1/post` \
`DELETE api/v1/post` 

**Comment routes**:\
`GET api/v1/comment` 

### API Documentation 
 * **Find the link here** - [Documentation](https://documenter.getpostman.com/view/5642967/UVsQr3zi)
## Database

### SQL - Postgres

-  Version - `postgre 13`

## Coding Standard

### **Style Guide - Linting**

Linting is done using [ESLint](https://eslint.org/) and [Prettier](https://prettier.io).

In this app, ESLint is configured to follow the [Airbnb JavaScript style guide](https://github.com/airbnb/javascript/tree/master/packages/eslint-config-airbnb) with some modifications.

To modify the ESLint configuration, update the `.eslintrc.json` file. To modify the Prettier configuration, update the `.prettierrc.json` file.


The express app has a centralized error handling mechanism.

This utility will catch the errors propagated within the app from the error handling middleware (by calling `next(error)`). For convenience, you can wrap the routes inside the catchExpressExceptions utility wrapper, which forwards the error.

### **Error Handling**

Error handling middleware to catch exception thrown from express

```javascript
import cee from '../../util/catchExpressExceptions';

router.post('/:lang/items/', cee(controller.postItem));
```

The error handling middleware sends an error response using the custom exception classes, which has the following format:

```json
{
  "code": 404,
  "message": "Resource not found"
}
```

When running in development mode, the error response also contains the error stack.

### **Logging**

Logging module implemented to work as a middleware ([Morgan](https://www.npmjs.com/package/morgan)) to intercept incoming request and to use it as output necessary information.

* multiple transports to std out and store logging message in files ([Winston](https://www.npmjs.com/package/winston))

```javascript
transports: [
    new winston.transports.Console({ level: LOG_LEVEL }),
    new winston.transports.File({ level: LOG_LEVEL, filename: FILE_PATH }),
    new winston.transports.File({
      level: 'error',
      filename: FILE_PATH_ERROR,
    }),
  ],
```

### **Environment Variables**

The environment variables can be found and modified in the `.env` files.

- keep the general variables in the `.env` file and use .env._env mode_ files for values which are specific to a certain mode.
- create .env.\*.locally using a CI when running in production because it is not recommended to commit sensitive information to the repository.

### **API Validation**

API endpoints being validated using [Joi](https://joi.dev/). Check the [documentation](https://joi.dev/api/) for more details on how to write Joi validation schemas.

The validation schemas are defined in the `src/routes/route/schema.js` directory.

### **Secured Routes - JTW**

API endpoints has been secured using [JWT](https://www.npmjs.com/package/jsonwebtoken). We create a random string and store it in both the database and the JWT. This way we can invalidate (sort of) JWTs on demand. one could argue this defeats the purpose and runs contrary to the core stateless concept of JWTs. But I think invalidation is important, this is the solution that came to my mind.

## Todo list

- Complete unit test to cover all functionality
- API documentation auto generation using [swagger](https://www.npmjs.com/package/swagger)
