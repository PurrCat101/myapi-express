# Product API

This is a simple RESTful API for managing products using Express.js.

## Features

- Create new products
- Retrieve all products
- Retrieve a single product by ID
- Update existing products
- Delete products

## Prerequisites

- Node.js
- npm (Node Package Manager)

## Installation

1. Clone the repository:
   ```
   git clone https://github.com/PurrCat101/myapi-express.git
   ```

2. Navigate to the project directory:
   ```
   cd product-api
   ```

3. Install dependencies:
   ```
   npm install
   ```

## Usage

1. Start the server:
   ```
   npm start
   ```

2. The server will start running on `http://localhost:3000`

## API Endpoints

- **POST /products**: Create a new product
- **GET /products**: Retrieve all products
- **GET /products/:id**: Retrieve a single product by ID
- **PUT /products/:id**: Update a product
- **DELETE /products/:id**: Delete a product

## Example Product Object

```json
{
  "id": 1,
  "name": "Product A",
  "price": 20.0
}
```
