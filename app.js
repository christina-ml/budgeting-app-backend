// Dependencies
const express = require("express");

// Configuration
const app = express();

// Middleware
const cors = require("cors");
app.use(cors());
app.use(express.json());

// Controllers

// Routes
app.get("/", (request, response)=>{
    response.send("Hello Budgeting App Backend");
});

// Export
module.exports = app;