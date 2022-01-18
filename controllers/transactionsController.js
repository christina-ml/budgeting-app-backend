const express = require("express");
const transactionsRoutes = express.Router();
const transactionsArr = require("../models/transactions");

// `/transactions`
transactionsRoutes.get("/", (req, res)=>{
    res.json(transactionsArr);
})

module.exports = transactionsRoutes;