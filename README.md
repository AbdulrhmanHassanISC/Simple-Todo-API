# Simple Todo API

A simple RESTful Todo API built with Node.js and Express. This project provides basic CRUD operations for managing todo items.

## Features

- Create, Read, Update, and Delete todos
- Pagination support for listing todos
- Error handling middleware
- Request logging middleware
- In-memory data storage (for development)

## Prerequisites

- Node.js (v18 or higher)
- npm or yarn

## Installation

1. Clone the repository:
   ```bash
   git clone git@github-second:AbdulrhmanHassanISC/Simple-Todo-API.git
   cd Simple-Todo-API
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Create a `.env` file in the root directory and add your environment variables:
   ```env
   DATABASE_URL=your_database_connection_string
   PORT=3000
   ```

## Running the Application

### Development Mode

```bash
npm run dev
```

This will start the server with nodemon, which automatically restarts the server when files change.

### Production Mode

```bash
node index.js
```

The server will start on the port specified in your `.env` file (default: 3000).

## API Endpoints

| Method | Endpoint          | Description                     | Request Body (JSON) | Response |
|--------|-------------------|---------------------------------|---------------------|----------|
| GET    | /todos            | Get all todos (paginated)       | -                   | Returns paginated list of todos |
| GET    | /todos/:id        | Get a todo by ID                | -                   | Returns the requested todo |
| POST   | /todos            | Create a new todo               | `{ "title": "string" }` | Returns the created todo |
| PUT    | /todos/:id        | Update a todo                   | `{ "title": "string", "completed": boolean }` | Returns the updated todo |
| DELETE | /todos/:id        | Delete a todo                   | -                   | Returns success message |
| GET    | /todos/error      | Trigger an error (for testing)  | -                   | Returns error |

### Query Parameters

- `page`: For paginated results (e.g., `/todos?page=1`)

## Project Structure

```
Simple Todo API/
├── controllers/
│   └── todosConntroller.js    # Todo controller functions
├── routes/
│   └── TodosRouter.js         # Todo routes
├── dbConfig.js               # In-memory database configuration
├── index.js                  # Main application entry point
├── .env                      # Environment variables
├── package.json
└── README.md
```

## Technologies Used

- **Express.js**: Web framework for Node.js
- **dotenv**: Environment variable management
- **nodemon**: Development tool for automatic server restarts

## Testing

You can test the API using tools like Postman, cURL, or any HTTP client. A Postman collection is included in the repository (`Simple_Todo_API_Postman_Collection.json`) for easy testing.

### Example Requests

**Create a Todo:**
```bash
curl -X POST http://localhost:3000/todos \
  -H "Content-Type: application/json" \
  -d '{"title": "Buy groceries"}'
```

**Get All Todos (Page 1):**
```bash
curl http://localhost:3000/todos?page=1
```

**Get a Todo by ID:**
```bash
curl http://localhost:3000/todos/1
```

**Update a Todo:**
```bash
curl -X PUT http://localhost:3000/todos/1 \
  -H "Content-Type: application/json" \
  -d '{"title": "Buy groceries", "completed": true}'
```

**Delete a Todo:**
```bash
curl -X DELETE http://localhost:3000/todos/1
```

## License

This project is licensed under the ISC License.

## Author

Abdelrhman Hassan
