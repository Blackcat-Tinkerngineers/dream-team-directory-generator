const Inquirer = require('inquirer');
const React = require('react');
const ReactDOM = require('react-dom');

  const inquirer = () => {

  }
    {
      type: 'list',
      name: 'employee_name',
      message: 'What is the name of the employee?',
      choices: ['Loki', 'Isis', 'Icabod Spooky Crane III', 'Persephone', 'Cleo', 'Cirila'],
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


    console.log(employee_name);



