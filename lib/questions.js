const DB = require('./db/DB');

module.exports = [
    {
        type: 'list',
        name: 'task',
        message: 'What would you like to do?',
        choices: [
            'View All Department',
            'View All Roles',
            'View All Employees',
            'Add Department',
            'Add Role',
            'Add Employee',
            'Update Employee Role'
        ]
    },
    {
        type: 'input',
        name: 'name',
        message: 'What is the name of the department?',
        when: ({ task }) => task == 'Add Department'
    },
    {
        type: 'input',
        name: 'title',
        message: 'What is the title of the role?',
        when: ({ task }) => task == 'Add Role'
    },
    {
        type: 'input',
        name: 'salary',
        message: 'What is the salary of the role?',
        when: ({ task }) => task == 'Add Role'
    },
    {
        type: 'list',
        name: 'department_id',
        message: 'What department does the role belong to?',
        choices: DB.listDepts, 
        when: ({ task }) => task == 'Add Role'
    },
]
