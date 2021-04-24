// list npm and other require
const inquirer = require("inquirer");
const fs = require('fs');
const html = require("./html_create.js");

const genCards = require("./genCards.js");
// list require of team members
const Manager = require("./Manager.js");
const Engineer = require("./Engineer.js");
const Intern = require("./Intern.js");
// card list
const managerCard = "";
const engCard = "";
const internCard = "";
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
const chooseTeam = () => {
    inquirer.prompt([{
            type: "list",
            name: "member",
            message: "Choose Member Role to add?",
            choices: ["engineer", "Intern", "No more members to add"]
        }])
        .then((data) => {
            if (data.member === "engineer") {
                buildEngineer();
            } else if (data.member === "Intern") {
                buildIntern();
            } else {
                console.log("Your team has been generated!");
                const teamPage = html.generateHTML(cards);
                fs.writeFile("./dist/new_team.html", teamPage, (err) => {
                    if (err) throw err;
                    //  
                });
            }
        })
};
// Engineer question
// Intern questions

module.exports = managerPrompt;
    



