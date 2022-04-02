const db = require('./db-config');

const getAll = () => {
    return db('users');
}

module.exports = {
    getAll,
}