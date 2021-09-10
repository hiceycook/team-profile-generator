//GLOBAL VARIABLES //
const inquirer = require('inquirer');
const Manager = require('./lib/manager');
const Intern = require('./lib/intern');
const Engineer = require('./lib/engineer');
const fs = require('fs');
const path = require('path');
const genHTML = require('./src/generate-html');
const { prompt } = require('inquirer');
const { FS } = require('jest-haste-map');
const teamArr = [];
const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team-profile.html")


//command line prompt using inquirer //

const promptUser = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: "Enter the manager's name:",
            validate: userName => {
                if (userName) {
                    return true
                } else {
                    console.log('Please enter your name');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'id',
            message: 'Enter their id number:',
            validate: id => {
                if (id) {
                    return true
                } else {
                    console.log('Please enter an id number');
                    return false;
                }
            }
        },
        {
            type: "input",
            name: "email",
            message: 'Enter their email:',
            validate: email => {
                if (email) {
                    return true
                } else {
                    console.log('Please enter an email');
                    return false;
                }
            }
        },
        {
            type: "input",
            name: "officeNo",
            message: 'Enter their office number:',
            validate: officeNo => {
                if (officeNo) {
                    return true
                } else {
                    console.log('Please enter the office number');
                    return false;
                }
            }
        }

        //TAKE INPUT ANSWERS AN CREATE A NEW MANAGER OBJECT//
    ])
        .then(answers => {
            // console.log(answers);
            const manager = new Manager(answers.name, answers.id, answers.email, answers.officeNo);
            //PUSH NEW MANAGER OBJECT TO TEAM ARRAY //
            teamArr.push(manager);
            //CALL NEXT PROMPT //
            promptTeamBuilder();
        })
};
//TEAM BUILDER INQUIRER PROMPT //
const promptTeamBuilder = () => {
    return inquirer.prompt([
        {
            type: 'list',
            name: 'team',
            message: 'Select an option:',
            choices: [
                'Add manager',
                'Add engineer',
                'Add intern',
                'Complete team profile'
            ]
        }
    ])
        //FUNCTION TO HANDLE USER CHOICE SELECTION //
        .then(choice => {
            switch (choice.team) {
                case 'Add manager':
                    addManager();
                    break;
                case 'Add engineer':
                    addEngineer();
                    break;
                case 'Add intern':
                    addIntern();
                    break;
                default:
                    completeTeam();
            }
        });
};

//ADD MANAGER, ENGINEER, AND INTERN FUNCTIONS CALLED BY CHOICE SELECTION //
const addManager = () => {
    console.log(`
    =================
    adding manager...
    =================
    `);
    return inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: "Enter the manager's name",
            validate: engineerName => {
                if (engineerName) {
                    return true
                } else {
                    console.log('Please enter a name');
                    return false;
                }
            }
        },
        {
            type: "input",
            name: "id",
            message: 'Enter their id number',
            // Check if user entered something
            validate: id => {
                if (id) {
                    return true
                } else {
                    console.log('Please enter an id number');
                    return false;
                }
            }
        },
        {
            type: "input",
            name: "email",
            message: 'Enter their email',
            // Check if user entered something
            validate: email => {
                if (email) {
                    return true
                } else {
                    console.log('Please enter an email');
                    return false;
                }
            }
        },
        {
            type: "input",
            name: "officeNo",
            message: 'Enter their office number',
            // Check if user entered something
            validate: officeNo => {
                if (officeNo) {
                    return true
                } else {
                    console.log('Please enter an office number');
                    return false;
                }
            }
        }
    ]).then(answers => {
        //CREATE NEW MANAGER OBJECT //
        const manager = new Manager(answers.name, answers.id, answers.email, answers.officeNo);
        //ADD NEW MANAGER TO TEAM ARRAY //
        teamArr.push(manager);
        // RETURN TO THE TEAM CREATION //
        promptTeamBuilder();
    });
};

const addEngineer = () => {
    console.log(`
    ==================
    adding engineer...
    ==================
    `)
    return inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: "Enter the engineer's name",
            // Check if user entered something
            validate: engineerName => {
                if (engineerName) {
                    return true
                } else {
                    console.log('Please enter a name');
                    return false;
                }
            }

        },

        {
            type: "input",
            name: "id",
            message: 'Enter their id number:',
            // Check if user entered something
            validate: id => {
                if (id) {
                    return true
                } else {
                    console.log('Please enter an id number');
                    return false;
                }
            }
        },
        {
            type: "input",
            name: "email",
            message: 'Enter their email:',
            // Check if user entered something
            validate: email => {
                if (email) {
                    return true
                } else {
                    console.log('Please enter an email');
                    return false;
                }
            }
        },

        {
            type: "input",
            name: "github",
            message: 'Enter their github username:',
            // Check if user entered something
            validate: github => {
                if (github) {
                    return true
                } else {
                    console.log('Please enter the username as it appears on github');
                    return false;
                }
            }
        }
    ]).then(answers => {
        // console.log(answers);
        const engineer = new Engineer(answers.name, answers.id, answers.email, answers.github);
        // Pushes the new manager object to the team array
        teamArr.push(engineer);
        // Call menu
        promptTeamBuilder();
    });
};

const addIntern = () => {
    console.log(`
    ================
    adding intern...
    ================
    `)
    return inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: "Enter the intern's name",
            // Check if user entered something
            validate: internName => {
                if (internName) {
                    return true
                } else {
                    console.log('Please enter a name');
                    return false;
                }
            }

        },

        {
            type: "input",
            name: "id",
            message: 'Enter their id number:',
            // Check if user entered something
            validate: id => {
                if (id) {
                    return true
                } else {
                    console.log('Please enter an id number');
                    return false;
                }
            }
        },
        {
            type: "input",
            name: "email",
            message: 'Enter their email:',
            // Check if user entered something
            validate: email => {
                if (email) {
                    return true
                } else {
                    console.log('Please enter an email');
                    return false;
                }
            }
        },

        {
            type: "input",
            name: "school",
            message: "Enter the intern's school:",
            // Check if user entered something
            validate: school => {
                if (school) {
                    return true
                } else {
                    console.log('Please enter the school name');
                    return false;
                }
            }
        }
    ]).then(answers => {
        // console.log(answers);
        const intern = new Intern(answers.name, answers.id, answers.email, answers.school);
        // Pushes the new manager object to the team array
        teamArr.push(intern);
        // Call menu
        promptTeamBuilder();
    });
};

const completeTeam = () => {
    console.log(
        `
    ====================
    Team Profile Created
    ====================
    `
    );

    //OUTPUT FUNCTION//
    if (!fs.existsSync(OUTPUT_DIR)) {
        fs.mkdir(OUTPUT_DIR);
    };
    fs.writeFileSync(outputPath, genHTML(teamArr), 'utf-8');
};






//RUN APP//
promptUser();
