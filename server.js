const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const port = 3000;

app.use(bodyParser.json());

const products = [
  { id: 1, name: "Product A", price: 20.0 },
  { id: 2, name: "Product B", price: 15.0 },
  { id: 3, name: "Product C", price: 30.0 },
  { id: 4, name: "Product D", price: 25.0 },
  { id: 5, name: "Product E", price: 10.0 },
];

app.post("/products", (req, res) => {
  const newProduct = req.body;
  products.push(newProduct);
  res.json(products);
});

app.get("/products", (req, res) => {
  res.json(products);
});

app.get("/products/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const product = products.find((p) => p.id === id);
  res.json(product);
});

app.put("/products/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const updatedProduct = req.body;
  const index = products.findIndex((p) => p.id === id);
  products[index] = updatedProduct;
  res.json(updatedProduct);
});

app.delete("/products/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const index = products.findIndex((p) => p.id === id);
  products.splice(index, 1);
  res.json(products);
});

app.listen(port, () => console.log("Server ready"));
