const Manager = require("./Manager");
const inquirer = require("inquirer");
const Intern = require("./Intern");
const Engineer = require('./Engineer');
const html = require("./html_create.js");
const fs = require('fs');
const genCard = require('./generateCards');
//const chalk = require('chalk');


let managerCard = "";
let engCard = "";
let internCard = "";
let team_cards = "";

//building a team using manager prompt//
let managerPrompt = () => {
    console.log("Let's build your Team!");
    return inquirer.prompt([{
                type: "input",
                name: "name",
                message: "Input Managers Name?"
            },
            {
                type: "input",
                name: "id",
                message: "Input Manager id number?"
            },
            {
                type: "input",
                name: "email",
                message: "Input managers email?"
            },
            {
                type: "input",
                name: "officeNumber",
                message: "Enter managers office number?"
            }
        ]) //Instantiating a new Manager object
        .then((data) => {
            let newManager = new Manager(data.name, data.id, data.email, data.officeNumber);
            // console.log(newManager);

            managerCard = genCard.man_card(newManager.name, newManager.id, newManager.email, newManager.officeNumber);
            team_cards += managerCard;

            chooseTeam();
        })

}

//prompt to choose a team member
const chooseTeam = () => {
    inquirer.prompt([{
            type: "list",
            name: "member",
            message: "Which team member role would you like to add? (arrow to change selection)",
            choices: ["Engineer", "Intern", "Skip, not more members to add."]
        }])
        .then((data) => {
            if (data.member === "Engineer") {
                buildEngineer();
            } else if (data.member === "Intern") {
                buildIntern();
            } else {
                console.log("The Team page has been generated in 'dist' folder!");
                const outputPage = html.generateHTML(team_cards);
                fs.writeFile("./dist/new_team.html", outputPage, (err) => {
                    if (err) throw err;
                    //  
                });
            }
        })
}

//prompt to build an intern
const buildIntern = () => {
    inquirer.prompt([{
                type: "input",
                name: "internName",
                message: "Input Intern's name?"
            },
            {
                type: "input",
                name: "internId",
                message: "Input Intern's id number?"
            },
            {
                type: "input",
                name: "internEmail",
                message: "Input Intern's email?"
            },
            {
                type: "input",
                name: "internSchool",
                message: "Enter school for Intern?"
            }
        ])
        .then((data) => {
            let newIntern = new Intern(data.internName, data.internId, data.internEmail, data.internSchool);
            // console.log(newIntern);

            internCard = genCard.genInternCard(newIntern.name, newIntern.id, newIntern.email, newIntern.school);
            team_cards += internCard;
            chooseTeam();
        })
}

// Prompt to Build Engineer
const buildEngineer = () => {
    inquirer.prompt([{
                type: "input",
                name: "engineerName",
                message: "Input Engineer's name?"
            },
            {
                type: "input",
                name: "engineerId",
                message: "Input Engineer's id number?"
            },
            {
                type: "input",
                name: "engineerEmail",
                message: "Enter Engineer's email?"
            },
            {
                type: "input",
                name: "engineerGitHub",
                message: "Enter Engineer's Github userName?"
            }
        ])
        .then((data) => {
            let newEngineer = new Engineer(data.engineerName, data.engineerId, data.engineerEmail, data.engineerGitHub);

            engCard = genCard.genEngineerCard(newEngineer.name, newEngineer.id, newEngineer.email, newEngineer.github);
            team_cards += engCard;

            chooseTeam();
        })
}

module.exports =
    managerPrompt,
    buildEngineer,
    buildIntern;


