//GLOBAL VARIABLES //
const inquirer = require('inquirer');
const Manager = require('./lib/manager');
const Intern = require('./lib/intern');
const Engineer = require('./lib/engineer');
const fs = require('fs');
const path = require('path');
const genHTML = require('./src/generate-html');
const { prompt } = require('inquirer');
const teamArr = [];
const OUTPUT_DIR = path.resolve(__dirname, 'output');
const outputPath = path.join(OUTPUT_DIR, 'team-profile.html');


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
            console.log(answers);
        }

        )
};

promptUser();
