// Dependencies
const express = require("express");
const cors = require("cors");

// Configuration
const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Controllers
const transactionsController = require("./controllers/transactionsController");
app.use("/transactions", transactionsController);

// Routes
app.get("/", (req, res)=>{
    res.status(200).send("Hello Budgeting App Backend!");
});

app.get("*", (req, res)=>{
  res.status(404).json({ error: "Page not found" }); 
});

// Export
module.exports = app;