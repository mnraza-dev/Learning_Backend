# Course Selling App

## Description
-- This is a simple course selling app.

## Features
- User/Admin can register and login
- User can see all courses, buy a course and sees the purchased courses
- Admin can add a course, delete a course and update a course content

## DB Schema
- User
    - name
    - email
    - password
    - role
- Course
    - title
    - description
    - price
    - image

## API Endpoints
- GET /api/courses
- POST /api/courses
- GET /api/courses/:id
- DELETE /api/courses/:id
- PUT /api/courses/:id

- POST /api/signup
- POST /api/login

## Technologies
- Node.js
- Express.js
- MongoDB

## Installation
- `npm install`

## Usage
- `npm start`

## License
MIT 