let managerPrompt = () => {
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
    let newManager = new Manager(data.name, data.id, data.email, data.officeNumber);

    mgrCard = genCard.managerCard(newManager.name, newManager.id, newManager.email, newManager.officeNumber);
    teamCard += mgrCard;
})
}