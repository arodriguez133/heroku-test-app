const express = require('express');
const req = require('express/lib/request');
const server = express()
server.use(express.json());

server.use('*', (req, res, next) => {
    next({ status: 404, message: 'not found' });
});

server.use((err, req, res, next) => {
    res.status(err.status || 500).json({
        message: err.message
    })
})

module.exports = server;