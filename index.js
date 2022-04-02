require('dotenv').config();

const server = require('./server');

const port = process.env.PORT || 1234;

server.listen(port, () => {
    console.log(`\n** Running on port ${port} **\n`)
})