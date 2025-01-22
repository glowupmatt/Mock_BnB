# Mock_BnB - Airbnb Clone

**Mock_BnB** is a web application that mimics the functionality of Airbnb. It allows users to browse, list, and book vacation rentals. Built using modern web technologies including Vite, React, Express.js, Sequelize, Google Maps API, and Cloudinary, this project is designed to be a fully functional clone with features like property search, booking, and user management.

---

## Features

- **User Authentication**: Secure user registration, login, and session management.
- **Property Listings**: Hosts can add and manage their properties, including images and descriptions.
- **Booking System**: Users can search for properties, check availability, and book rentals.
- **Google Maps Integration**: Displays property locations on a map for easy navigation.
- **Image Uploads**: Cloudinary integration for uploading and displaying property images.
- **Responsive Design**: The application is fully responsive, optimized for both desktop and mobile devices.

---

## Technologies

- **Frontend**:
  - [React](https://reactjs.org/) for building the user interface.
  - [Vite](https://vitejs.dev/) for fast development and bundling.
  - [Google Maps API](https://developers.google.com/maps/documentation) for displaying maps and property locations.

- **Backend**:
  - [Express.js](https://expressjs.com/) for building the API.
  - [Sequelize](https://sequelize.org/) for interacting with the SQL database.
  - [PostgreSQL](https://www.postgresql.org/) (or another SQL database of your choice) for storing user and property data.
  - [Cloudinary](https://cloudinary.com/) for handling image uploads.

---

## Getting Started

To run **Mock_BnB** locally, follow these steps:

### Prerequisites

- Node.js and npm installed on your machine. You can download them from [here](https://nodejs.org/).
- PostgreSQL (or other relational database) set up and running locally.

### Steps

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/mockbnb.git
   cd mockbnb
   ```

2. Install the backend dependencies:
   ```bash
   cd backend
   npm install
   ```

3. Install the frontend dependencies:
   ```bash
   cd ../frontend
   npm install
   ```

4. Set up environment variables:
   - Create a `.env` file in both the `backend` and `frontend` directories.
   - Set up the following variables in your `.env` file:
     - For the backend:
       ```
       DB_USER=your_db_user
       DB_PASSWORD=your_db_password
       DB_NAME=mockbnb
       CLOUDINARY_URL=your_cloudinary_url
       GOOGLE_MAPS_API_KEY=your_google_maps_api_key
       SESSION_SECRET=your_session_secret
       ```
     - For the frontend:
       ```
       REACT_APP_GOOGLE_MAPS_API_KEY=your_google_maps_api_key
       ```

5. Set up the database:
   - Run the migrations:
     ```bash
     cd backend
     npx sequelize-cli db:migrate
     ```

6. Start the development servers:
   - In the `frontend` directory:
     ```bash
     npm run dev
     ```
   - In the `backend` directory:
     ```bash
     npm run dev
     ```

7. Open your browser and navigate to `http://localhost:3000` to see the application in action.

## Environment Variables

The application uses several environment variables to securely manage sensitive data and configurations. Below is a list of the required variables:

### Backend (.env)

- `DB_USER`: Your database username.
- `DB_PASSWORD`: Your database password.
- `DB_NAME`: Your PostgreSQL database name.
- `CLOUDINARY_URL`: Your Cloudinary account URL.
- `GOOGLE_MAPS_API_KEY`: Your Google Maps API key.
- `SESSION_SECRET`: Secret key for session management.

### Frontend (.env)

- `REACT_APP_GOOGLE_MAPS_API_KEY`: Your Google Maps API key (needed for frontend map rendering).

---

## API Endpoints

- **POST** `/api/session`: Login a user.
- **POST** `/api/session`: Register a new user.
- **GET** `/api/spots`: Get a list of all properties.
- **POST** `/api/spots`: Add a new property listing (host only).
- **GET** `/api/spots/:id`: Get details of a specific property.
- **POST** `/api/reviews`: Create a booking for a reviews.
- **GET** `/api/reviews`: Get a list of user's reviews.

---

## Running Tests

To run tests for the backend and frontend:

### Backend

1. Install test dependencies:
   ```bash
   cd backend
   npm install --save-dev jest supertest
   ```

2. Run tests:
   ```bash
   npm test
   ```

### Frontend

1. Install test dependencies:
   ```bash
   cd frontend
   npm install --save-dev jest @testing-library/react @testing-library/jest-dom
   ```

2. Run tests:
   ```bash
   npm test
   ```

---

## Contributing

We welcome contributions to **Mock_BnB**! If you'd like to contribute, please follow these steps:

1. Fork the repository.
2. Create a new branch (`git checkout -b feature-name`).
3. Make your changes and commit (`git commit -am 'Add feature'`).
4. Push to the branch (`git push origin feature-name`).
5. Create a pull request.
---
