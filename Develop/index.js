// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const yearNpm = require('year');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        message: `What is your name?`,
        name: 'author',
    },
    {
        type: 'input',
        message: `What is the title of your project?`,
        name: 'title',
    },
    {
        type: 'input',
        message: `What is the website of your deployed project?`,
        name: 'website',
    },
    {
        type: 'input',
        message: `Please provide the filepath to the screenshot of your project.`,
        name: 'screenshot',
    },
    {
        type: 'input',
        message: `Please enter a description of the project (try to include What, Why, and How).`,
        name: 'description'
    },
    {
        type: 'input',
        message: `How do you install your project?`,
        name: 'install'
    },
    {
        type: 'input',
        message: `How do you use your project?`,
        name: 'usage'
    },
    {
        type: 'input',
        message: `List your collaborators with their GitHub profiles, tutorials used, or third party assets, if any.`,
        name: 'credits'
    },
    {
        type: 'input',
        message: `How do you want contributors to report issues?`,
        name: 'reporting'
    },
    {
        type: 'input',
        message: `Please list how to contribute to your project or leave blank and the Contributor Covenant will be used.`,
        name: 'contributing'
    },
    {
        type: 'list',
        message: `Which of these sounds like your project's situation? Select none and MIT license will be used.`,
        name: 'license',
        choices: ['I need to work in a community.','I want it simple and permissive.','I care about sharing improvements.','None']
    }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    const { title, website, screenshot, description, install, usage, credits, reporting, contributing, license } = data;
    const date = yearNpm();

    const content = 
        `# ${title}

        ## Description

        ${description}

        [Deployed Website](${website})

        ![Picture of project website](${screenshot})

        ## How to Install

        ${install}

        ## How to Use

        ${usage}

        ## How to Contribute to the Repository

        ${contributing}

        ## How to Report Bugs

        ${reporting}

        ## Credits

        ${credits}

        ## License

        Copyright ${author} ${date}

        ${license}
        `

    fs.writeFile(fileName, content, (err) =>
        err ? console.log(error) : console.log('README created!'))
}

// TODO: Create a function to initialize app
function init() {
    inquire
    .prompt([questions])
    .then(function(response) {
        var data = response;
        var fileName = 'README.md';
        writeToFile(fileName,data);
    })
}

// Function call to initialize app
init();
