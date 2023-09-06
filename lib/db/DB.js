const connection = require('./connection');
const cTable = require('console.table');

class DB {
    constructor(db) {
        this.db = db;
    }

    getDepts = () =>
        this.db.promise().query(`SELECT * FROM departments`).then(([data]) => {
            console.table(data);
        });
    
    getRoles = () =>
        this.db.promise().query(`SELECT * FROM roles`).then(([data]) => {
            console.table(data);
        });
}

module.exports = new DB(connection);