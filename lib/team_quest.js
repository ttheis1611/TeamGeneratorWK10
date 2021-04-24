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
const managerPrompt = () => {
    console.log("Let's build your team!");
    return inquirer.prompt([{
                type: "input",
                name: "name",
                message: "Input Manager Name?"
            },
            {
                type: "input",
                name: "id",
                message: "Input ID?"
            },
            {
                type: "input",
                name: "email",
                message: "Email for manager?"
            },
            {
                type: "input",
                name: "officeNumber",
                message: "Office number for manager?"
            }
        ]) // New Manager object
        .then((data) => {
            const newManager = new Manager(data.name, data.id, data.email, data.officeNumber);
            // console.log(newManager);

            managerCard = genCard.man_card(newManager.name, newManager.id, newManager.email, newManager.officeNumber);
            team_cards += managerCard;

            chooseTeam();
        })

}
// Team questions
// Engineer question
// Intern questions





