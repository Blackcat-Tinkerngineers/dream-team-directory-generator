const fs = require('fs');
const inquirer = require('inquirer');

inquirer.prompt([
  {
    type: 'input',
    name: 'engineerName',
    message: "What is the the Engineer's name?"
  },
  {
    type: 'input',
    name: 'engineerGithub',
    message: "What is the the Engineer's GitHub username?"
  },
  {
    type: 'input',
    name: 'engineerEmail',
    message: 'What is their email address?'
  },
  {
    type: 'input',
    name: 'enginneerId',
    message: "What is their employee ID"
  },
  {
    type: 'input',
    name: 'mof',
    message: "What is your manager's office number?"
  },
  {
    type: 'input',
    name: 'managerName',
    message: "What is your manager's name?",

  },
  {
    type: 'input',
    name: 'managerId',
    message: "What is your manager's ID?",

  },
  {
    type: 'input',
    name: 'managerEmail',
    message: "What is your manager's email?",
    default: 'npm i'
  },
  {
    type: 'input',
    name: 'internName',
    message: "What is your Intern's name?",
    default: "get's_coffee"
  },
  {
    type: 'input',
    name: 'internEmail',
    message: 'What is their email?'
  },
  {
    type: 'input',
    name: 'internSchool',
    message: 'What is their school?'
  },
  {
    type: 'input',
    name: 'internId',
    message: 'What is their ID?'
  }
]).then(data => {
  fs.writeFileSync('output.html', 
` 
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta http-equiv="X-UA-Compatible" content="ie=edge" />
    <title>My Team</title>
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
        integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
    <link rel="stylesheet" href="./dist/style.css">
    <script src="https://kit.fontawesome.com/c502137733.js"></script>
</head>

<body>
    <div class="container-fluid">
        <div class="row">
            <div class="col-12 jumbotron mb-3 team-heading">
                <h1 class="text-center">My Team</h1>
            </div>
        </div>
    </div>
    <div class="container">
        <div class="row">
            <div class="team-area col-12 d-flex justify-content-center">
                
        <div class="card employee-card">
        <div class="card-header">
            <h2 class="card-title">${data.managerName}</h2>
            <h3 class="card-title"><i class="fas fa-mug-hot mr-2"></i>Engineer</h3>
        </div>
        <div class="card-body">
            <ul class="list-group">
                <li class="list-group-item">ID: ${data.managerId}</li>
                <li class="list-group-item">Email: <a href="${data.managerEmail}">${data.managerEmail}</a></li>
                <li class="list-group-item">Office Number: ${data.mof}</li>
            </ul>
        </div>
    </div>
        
        <div class="card employee-card">
    <div class="card-header">
        <h2 class="card-title">${data.engineerName}</h2>
        <h3 class="card-title"><i class="fas fa-glasses mr-2"></i>Manager</h3>
    </div>
    <div class="card-body">
        <ul class="list-group">
            <li class="list-group-item">ID: ${data.enginneerId}</li>
            <li class="list-group-item">Email: <a href="mailto:${data.engineerEmail}">persephone@meow.com</a></li>
            <li class="list-group-item">GitHub: <a href="https://github.com/Persephone67" target="_blank" rel="noopener noreferrer">${data.engineerGithub}</a></li>
        </ul>
    </div>
</div>
        
        <div class="card employee-card">
    <div class="card-header">
        <h2 class="card-title">${data.internName}</h2>
        <h3 class="card-title"><i class="fas fa-user-graduate mr-2"></i>${data.engineerName}</h3>
    </div>
    <div class="card-body">
        <ul class="list-group">
            <li class="list-group-item">ID: ${data.internId}</li>
            <li class="list-group-item">Email: <a href="mailto:cirila@meowcollege.com">${data.internEmail}</a></li>
            <li class="list-group-item">School: ${data.internSchool}</li>
        </ul>
    </div>

    </div>
    </div>
    </div>
    </body>
    </html>
`
  )})