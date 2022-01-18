const express = require("express");
const transactionsRoutes = express.Router();
const transactionsArr = require("../models/transactions");

// `/transactions` INDEX (same url also for: CREATE)
transactionsRoutes.get("/", (req, res)=>{
    res.json(transactionsArr);
})

// `/transactions/:id` SHOW (same url also for: DELETE, UPDATE)
transactionsRoutes.get(`/:id`, (req, res)=>{
    const { id } = req.params;
    if (transactionsArr[id]) {
        res.json(transactionsArr[id]);
    } else {
        res.status(404).json({ error: "Transaction Not Found." });
    }
})

module.exports = transactionsRoutes;