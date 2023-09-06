const { prompt } = require('inquirer');
const { questions, DB } = require('./lib');

const init = () => {
    prompt(questions).then(ans => {
        let { task } = ans;
        if (task == 'View All Department') DB.getDepts().then(init);
        if (task == 'View All Roles') DB.getRoles().then(init);
        if (task == 'View All Employees') DB.getEmps().then(init);
        if (task == 'Add Department') DB.addDept(ans).then(init);


    })
};

init();