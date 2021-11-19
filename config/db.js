const db = require('./index')

const knex = require('knex')({
    client: 'mysql',
    connection: {
        ...db
    },
    pool: {min:0, max:10}
});

module.exports = knex;


