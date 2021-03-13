# LAB - Class 06

## Project: Authentication

### Author: Cody Carpenter

### Links and Resources

- [ci/cd](https://github.com/CallMeCody/basic-auth/actions) (GitHub Actions)
- [Pull Request](https://github.com/CallMeCody/basic-auth/pull/2)
- [HEROKU App](https://basic-auth-lab-06.herokuapp.com/)

### Setup

#### `.env` requirements (where applicable)

- `PORT` - 3000

#### How to initialize/run your application (where applicable)

- `nodemon`
- `node index.js`
- `npm start`

#### How to use your library (where applicable)

#### Tests

##### Assert the following

- POST to /signup to create a new user
- POST to /signin to login as a user (use basic auth)
- Need tests for auth middleware and the routes
  - Does the middleware function (send it a basic header)
  - Do the routes assert the requirements (signup/signin)

#### UML

![UML Example]();
