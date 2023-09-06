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
    {
        type: 'input',
        name: 'first_name',
        message: 'What is the first name of the employee?',
        when: ({ task }) => task == 'Add Employee'
   },
   {
    type: 'input',
    name: 'last_name',
    message: 'What is the last name of the employee?',
    when: ({ task }) => task == 'Add Employee'
   },
   {
    type: 'list',
    name: 'id',
    message: 'Which employee would you like to update?',
    choices: DB.listEmps,
    when: ({ task }) => task == 'Update Employee Role'
   },
   {
    type: 'list',
    name: 'role_id',
    message: 'What is the role of the employee?',
    choices: DB.listRoles,
    when: ({ task }) => task == 'Add Employee' || task == 'Update Employee Role'
   },
   {
    type: 'list',
    name: 'manager_id',
    message: 'Who is the manager of the employee?',
    choices: DB.listEmps,
    when: ({ task }) => task == 'Add Employee' || task == 'Update Employee Role'
   }
]
