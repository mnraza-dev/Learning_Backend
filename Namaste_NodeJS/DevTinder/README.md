# DevTinder

DevTinder is a simple social media platform for developers. It allows users to create profiles, connect with other developers, and share their skills and experience.

## Table of Contents

- [Features](#features)
- [DB Schema](#db-schema)
- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)

## Features

- Create a profile
- update the profile details
- Search for other developers
- Connect with other developers
- Share your skills and experience
- View other developer profiles

## DB Schema
The database schema for DevTinder is as follows:

- `Users` collection
  - `id` (primary key)
  - `firstname`
  - `lastname`
  - `email`
  - `username`
  - `age`
  - `gender`
  - `avatar`
  - `password`
  - `bio`
  - `location`
  - `skills`
  - `githubusername`
  - `experience`

- `ConnectionRequest` collection
  - `id` (primary key)
  - `senderId`
  - `receiverId`
  - `status` enum ('pending','ignored', 'accepted', 'rejected')

- `Message` collection
  - `id` (primary key)
  - `senderId`
  - `receiverId`
  - `text`
  - `timestamp`

- `Notification` collection
  - `id` (primary key)
  - `senderId`
  - `receiverId`
  - `text`
  - `timestamp`
  
- `Like` collection
  - `id` (primary key)
  - `senderId`
  - `receiverId`
  - `timestamp`

## API Endpoints

The API endpoints for DevTinder are as follows:
- POST   `/api/signup` - Create a user
- POST   `/api/login` - Login a user
- GET    `/api/profile` - Get user profile
- POST   `/api/profile` - Create a user profile
- PATCH  `/api/profile` - Update user
- DELETE `/api/profile` - Delete user profile 
- POST   `/api/sendRequest` - Send a connection request
- GET    `/api/requests` - Get connection requests
- POST   `/api/reviewRequest` - Review a connection request
- GET    `/api/connections` - Get all connections

## Installation

To install DevTinder, run the following command:

```
npm install
```

## Usage

To start DevTinder, run the following command:

```
node app.js
```

## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
