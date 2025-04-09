# Task Management API

A RESTful API for managing tasks with JWT authentication built with express and Mongoose.

## Environment Variables

Create a `.env` file in the root directory with the following variables:

```
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret_key
```

## Setup Instructions

1. Clone the repository
2. Install dependencies: `npm install`
3. Set up environment variables in `.env`
4. Run the development server: `npm start`
5. The API will be available at `http://localhost:5000/`

## Base URL (Deployed)

- [Live URL](https://cactro-test-rest-api.onrender.com/)

## API Endpoints

### Authentication

#### Signup a new user

- **URL**: `/signup`
- **Method**: `POST`
- **Body**:
  ```json
  {
    "firstName": "John",
    "lastName": "Doe",
    "email": "john@example.com",
    "password": "password123"
  }
  ```
- **Response**:
  ```json
  {
    "message": "User registered successfully"
  }
  ```

#### Signin

- **URL**: `/signin`
- **Method**: `POST`
- **Body**:
  ```json
  {
    "email": "john@example.com",
    "password": "password123"
  }
  ```
- **Response**:
  ```json
  {
    "message": "Signed in successfully"
  }
  ```

### Tasks

All task endpoints require authentication.

#### Get all tasks

- **URL**: `/tasks`
- **Method**: `GET`
- **Response**:

  ```json
  [
    {
      "_id": "task_id",
      "title": "test1@gmail.com",
      "description": "test 6",
      "status": "pending",
      "user": "user_id",
      "__v": 0
    }
  ]
  ```

#### Create a new task

- **URL**: `/add-task`
- **Method**: `POST`
- **Body**:
  ```json
  {
    "title": "New task",
    "description": "Task description",
    "status": "pending"
  }
  ```
- **Response**:

  ```json
  {
    "message": "Task created successfully"
  }
  ```

#### Update a task

- **URL**: `/task/:id`
- **Method**: `PUT`
- **Body**:
  ```json
  {
    "title": "Updated task",
    "description": "Updated description",
    "status": "completed"
  }
  ```
- **Response**:
  ```json
  {
    "message": "Task updated successfully",
    "task": {
      "_id": "67f659be45db52e3b20d6f53",
      "title": "test@gmail.com udate2",
      "description": "test 6",
      "status": "pending",
      "user": "67f5ea13d530332e805df320",
      "__v": 0
    }
  }
  ```

#### Delete a task

- **URL**: `/task/:id`
- **Method**: `DELETE`
- **Response**:
  ```json
  {
    "message": "Task deleted successfully"
  }
  ```

## Postman Collection

You can import the following Postman collection to test the API:

```json
{
  "info": {
    "_postman_id": "your-postman-id",
    "name": "Task Api",
    "schema": "https://schema.getpostman.com/json/collection/v2.1.0/collection.json",
    "_exporter_id": "43916332"
  },
  "item": [
    {
      "name": "New User signup",
      "request": {
        "method": "POST",
        "header": [],
        "body": {
          "mode": "raw",
          "raw": "{\r\n    \"firstName\": \"John\",\r\n    \"lastName\": \"Doe\",\r\n    \"email\": \"john@example.com\",\r\n    \"password\": \"password123\"\r\n  }",
          "options": {
            "raw": {
              "language": "json"
            }
          }
        },
        "url": {
          "raw": "https://cactro-test-rest-api.onrender.com/signup",
          "protocol": "https",
          "host": ["cactro-test-rest-api", "onrender", "com"],
          "path": ["signup"]
        }
      },
      "response": []
    },
    {
      "name": "User Sign in",
      "request": {
        "method": "POST",
        "header": [],
        "body": {
          "mode": "raw",
          "raw": "{\r\n    \"email\": \"john@example.com\",\r\n    \"password\": \"password123\"\r\n  }",
          "options": {
            "raw": {
              "language": "json"
            }
          }
        },
        "url": {
          "raw": "https://cactro-test-rest-api.onrender.com/signin",
          "protocol": "https",
          "host": ["cactro-test-rest-api", "onrender", "com"],
          "path": ["signin"]
        }
      },
      "response": []
    },
    {
      "name": "Fetch all tasks of a User",
      "request": {
        "method": "GET",
        "header": [],
        "url": {
          "raw": "https://cactro-test-rest-api.onrender.com/tasks",
          "protocol": "https",
          "host": ["cactro-test-rest-api", "onrender", "com"],
          "path": ["tasks"]
        }
      },
      "response": []
    },
    {
      "name": "Add task",
      "request": {
        "method": "POST",
        "header": [],
        "body": {
          "mode": "raw",
          "raw": "{\r\n    \"title\": \"New task\",\r\n    \"description\": \"Task description\",\r\n    \"status\": \"pending\"\r\n  }",
          "options": {
            "raw": {
              "language": "json"
            }
          }
        },
        "url": {
          "raw": "https://cactro-test-rest-api.onrender.com/add-task",
          "protocol": "https",
          "host": ["cactro-test-rest-api", "onrender", "com"],
          "path": ["add-task"]
        }
      },
      "response": []
    },
    {
      "name": "Update Taske",
      "request": {
        "method": "PUT",
        "header": [],
        "body": {
          "mode": "raw",
          "raw": "{\r\n    \"title\": \"updateNew task\"\r\n}",
          "options": {
            "raw": {
              "language": "json"
            }
          }
        },
        "url": {
          "raw": "https://cactro-test-rest-api.onrender.com/task/67f675bd5cacdd6f3c235204",
          "protocol": "https",
          "host": ["cactro-test-rest-api", "onrender", "com"],
          "path": ["task", "67f675bd5cacdd6f3c235204"]
        }
      },
      "response": []
    },
    {
      "name": "Delete Task",
      "request": {
        "method": "DELETE",
        "header": [],
        "url": {
          "raw": "https://cactro-test-rest-api.onrender.com/task/67f675bd5cacdd6f3c235204",
          "protocol": "https",
          "host": ["cactro-test-rest-api", "onrender", "com"],
          "path": ["task", "67f675bd5cacdd6f3c235204"]
        }
      },
      "response": []
    }
  ]
}
```
