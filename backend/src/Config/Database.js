const knex = require('knex');
const Database = knex({
    client: 'mysql',
    connection: {
        host: '127.0.0.1',
        user: 'root',
        password: 'tom123',
        database: 'kanban'
    }
});
module.exports = Database;