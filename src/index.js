const inquirer = require('inquirer');
const { choices } = require('yargs');
inquirer
  .prompt([
    {
      type: 'list',
      name: 'employee_name',
      message: 'What is the name of the employee?',
      choices: ['Loki', 'Isis', 'Icabod Spooky Crane', 'Persephone', 'Cleo', 'Cirila'],
    },
    {
      type: 'list',
      name: 'employee_id',
      message: 'What is the employee ID?',
    },
    {
      type: 'list',
      name: 'employee_email',
      message: 'What is the email address of the employee?',
    },
    {
      type: 'list',
      name: 'employee_phone',
      message: 'What is the phone number of the employee?',
    },
  ]);

inquirer
  .then(response => {
    console.log('Hello',response.employee_name,response.employee_id,response.employee_email,response.employee_phone,response.employee_phone);
  }
  );


