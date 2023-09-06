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
        this.db.promise().query(`
        SELECT 
            r.id,
            r.title,
            d.name AS department,
            r.salary
        FROM roles As r
        JOIN departments AS d
        ON r.department_id = d.id`).then(([data]) => {
            console.table(data);
        });

    getEmps = () =>
        this.db.promise().query(`
        SELECT
            e.id,
            e.first_name,
            e.last_name,
            r.title,
            d.name AS department,
            r.salary,
            CONCAT(m.first_name, ' ', m.last_name) AS manager
        FROM employees AS e
        JOIN roles AS r
        ON e.role_id = r.id
        JOIN departments AS d
        ON r.department_id = d.id
        LEFT JOIN employees AS m
        ON e.manager_id = m.id   
        `).then(([data]) => {
            console.table(data);
        });

    addDept = ({name}) =>
        this.db.promise().query(`INSERT INTO departments SET ?`, { name });

    listDepts = () =>
        this.db.promise().query(`SELECT name, id value FROM departments`).then(([data]) =>
         data);

    addRole = ({title, salary, department_id}) => this.db.promise().query(`INSERT INTO roles SET ?`,
    { title, salary, department_id });

    listRoles = () =>
        this.db.promise().query(`SELECT title name, id value FROM roles`).then(([data]) =>
         data);

    addEmp = ({first_name, last_name, role_id, manager_id}) => this.db.promise().query(`INSERT INTO employees SET ?`, { first_name, last_name, role_id, manager_id });

    listEmps = () =>
        this.db.promise().query(`SELECT CONCAT(first_name, ' ', last_name) name, id value FROM employees`).then(([data]) => data);

    updateRole = ({id, role_id}) => this.db.promise().query(`UPDATE employees SET ? WHERE ?`, [{ role_id }, { id }]);
    
}

module.exports = new DB(connection);