import express from 'express';

// const express = require('express');
const router = express.Router();

const todos = [
    {
        item: 'Push the code',
    }
]

router.get('/', (req, res) => {
    res.send(todos)
})

router.post('/', (req, res) => {
    const todoItem = req.body;
    console.log(req.body);
    res.send(`Item added into the DB`)
})

export default router;

// module.exports = router;