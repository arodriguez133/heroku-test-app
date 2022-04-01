require('dotenv').config();

const server = require('./api/server/.js');

const port = process.env.PORT;

server.use(() => {
    console.log(`*\n*** Server running on http://localhost:${port} ***\n`)
})