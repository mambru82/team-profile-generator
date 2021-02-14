const inquirer = require('inquirer');
const Employee = require('./Employee');
const Engineer = require('./Engineer');
const Manager = require('./Manager');
const Intern = require('./Intern');

function Roster() {
    this.roster = [];
}
Roster.prototype.addEngineer = function () {
    inquirer.prompt([{
        type: 'input',
        name: 'name',
        message: "What is your engineer's first (or preferred) name?"
    },
    {
        type: 'input',
        name: 'id',
        message: "What is your engineer's employee id number?"

    },
    {
        type: 'input',
        name: 'email',
        message: "What is your engineer's email"
    },
    {
        type: 'input',
        name: 'github',
        message: 'What is the engineers github username?'
    },
    {
        type: 'list',
        name: 'addEmployee',
        message: 'Who would you like to add to your team roster?',
        choices: ['Engineer', 'Intern', "I'm done"]
    }])
    .then(({name, id, email, github, addEmployee}) => {
        this.roster.push(new Engineer(name, id, email, github));
        if (addEmployee === 'Engineer') {
            this.addEngineer();
        } else if (addEmployee === 'Intern') {
            this.addIntern();
        } else {console.table(this.roster)};
    })
}

Roster.prototype.addIntern = function () {
    inquirer.prompt([{
        type: 'input',
        name: 'name',
        message: "What is your intern's first (or preferred) name?"
    },
    {
        type: 'input',
        name: 'id',
        message: "What is your intern's employee id number?"

    },
    {
        type: 'input',
        name: 'email',
        message: "What is your intern's email"
    },
    {
        type: 'input',
        name: 'school',
        message: 'What is the interns school?'
    },
    {
        type: 'list',
        name: 'addEmployee',
        message: 'Who would you like to add to your team roster?',
        choices: ['Engineer', 'Intern', "I'm done"]
    }])
    .then(({name, id, email, school, addEmployee}) => {
        this.roster.push(new Intern(name, id, email, school));
        if (addEmployee === 'Engineer') {
            this.addEngineer();
        } else if (addEmployee === 'Intern') {
            this.addIntern();
        } else {console.table(this.roster)};
    })
}

Roster.prototype.generateTeamRoster = function() {
    inquirer.prompt([{
            type: 'input',
            name: 'name',
            message: "What is your team manager's first (or preferred) name?"
        },
        {
            type: 'input',
            name: 'id',
            message: "What is your team manager's employee id number?"

        },
        {
            type: 'input',
            name: 'email',
            message: "What is your team manager's email"
        },
        {
            type: 'input',
            name: 'officeNumber',
            message: 'What is the office number?'
        },
        {
            type: 'list',
            name: 'addEmployee',
            message: 'Who would you like to add to your team roster?',
            choices: ['Engineer', 'Intern', "I'm done"]
        }])
        .then(({name, id, email, officeNumber, addEmployee}) => {
            this.roster.push(new Manager(name, id, email, officeNumber));
            if (addEmployee === 'Engineer') {
                this.addEngineer();
            } else if (addEmployee === 'Intern') {
                this.addIntern();
            } else {console.table(this.roster)};
        })
}


module.exports = Roster;
