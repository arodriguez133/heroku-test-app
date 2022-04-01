require('dotenv').config();

const server = require('./server');

const PORT = process.env.PORT || 1234;

server.listen(PORT, () => {
    console.log(`\n** Running on port ${port} **\n`)
})