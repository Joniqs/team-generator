const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./src/page-template.js");

function init() {
    // Array of questions for Manager prompt
    const questions = [
      {
          type: "input",
          name: "managerName",
          message: "Enter Manager Name:",
        },
        {
          type: "input",
          name: "managerId",
          message: "Enter Manager Id:",
        },
        {
          type: "input",
          name: "managerEmail",
          message: "Enter Email Address:",
        },
        {
          type: "input",
          name: "officeNumber",
          message: "Enter Office Number",
        }
    ];
    
        inquirer.prompt(questions).then(answers => {
            const manager = new Manager(answers.managerName, answers.managerId, answers.managerEmail, answers.officeNumber);
    
            // Show a success message and return to the main menu
            console.log(`Success. Added ${manager.getName()} to database.`);
            employeeArray.push(manager);
            showMenu();
        });
    }

//Function that displays menu of employee options that you can add
function showMenu() {
    // Array of options
    const employeeChoice = ["Add an engineer", "Add an intern", "Finish building the team"];
    
        console.log("Choose an option:");
    
        inquirer
            .prompt([
                {
                    type: "list",
                    name: "option",
                    message: "What to do next?",
                    choices: employeeChoice,
                },
            ])
            .then((answer) => {
                switch (answer.option) {
                    case "Add an engineer":
                        addEngineer();
                        break;
                    case "Add an intern":
                        addIntern();
                        break;
                    case "Finish building the team":
                        console.log("Team building complete!");
                        createTeam();
                        break;
                    default:
                        console.log("Invalid option selected.");
                        showMenu();
                        break;
                }
            });
    }

//Function that adds engineer based on user prompts
function addEngineer() {
    const questionEngineer = [
        {
            type: "input",
            name: "engineerName",
            message: "Enter Engineer's Name:",
          },
          {
            type: "input",
            name: "engineerId",
            message: "Enter Engineer's Id:",
          },
          {
            type: "input",
            name: "engineerEmail",
            message: "Enter Engineer's Email Address:",
          },
          {
            type: "input",
            name: "engineerGithub",
            message: "Enter Engineer's Github Username:",
          }
    ];

    inquirer
    .prompt(questionEngineer).then(answers => {
        const engineer = new Engineer(answers.engineerName, answers.engineerId, answers.engineerEmail, answers.engineerGithub);

        // Display a success message and return to the main menu
        console.log(`Success. Added ${engineer.getName()} to database.`);
        employeeArray.push(engineer);
        showMenu();
    });
}

//Function that adds intern based on user prompts
function addIntern() {
    const questionIntern = [
        {
            type: "input",
            name: "internName",
            message: "Enter Intern's Name:",
          },
          {
            type: "input",
            name: "internId",
            message: "Enter Intern's Id:",
          },
          {
            type: "input",
            name: "internEmail",
            message: "Enter Intern's Email Address:",
          },
          {
            type: "input",
            name: "internSchool",
            message: "Enter Intern's School:",
          }
    ];

    inquirer
    .prompt(questionIntern).then(answers => {
        const intern = new Intern(answers.internName, answers.internId, answers.internEmail, answers.internSchool);

        // Display a success message and return to the main menu
        console.log(`Success. Added ${intern.getName()} to database.`);
        employeeArray.push(intern);
        showMenu();
    });
}
