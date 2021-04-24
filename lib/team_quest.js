// list npm and other require
const inquirer = require("inquirer");
const fs = require('fs');
const html = require("./html_create.js");
const cards = require("./cards.js");
// list require of team members
const Manager = require("./Manager.js");
const Engineer = require("./Engineer.js");
const Intern = require("./Intern.js");
// card list
const managerCard = "";
const engCard = "";
const interCard = "";
const cards = "";

// Manager questions
// Team questions
// Engineer question
// Intern questions






const managerPrompt = () => {
    console.log("Let's build your team!")
    return inquirer.prompt([{
        type: "input",
        name: "name",
        message: "What is the manager's name?"
    },
    {
        type: "input",
        name: "id",
        message: "What is your id number?"
    },
    {
        type: "input",
        name: "email",
        message: "What is your email?"
    },
    {
        type: "input",
        name: "officeNumber",
        message: "What is the office number?"    
    }
])
.then((data) => {
    const newManager = new Manager(data.name, data.id, data.email, data.officeNumber);

    mgrCard = genCard.managerCard(newManager.name, newManager.id, newManager.email, newManager.officeNumber);
    teamCard += mgrCard;
})
}