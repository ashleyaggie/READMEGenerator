// TODO: Include packages needed for this application
const inquirer = require('inquirer');
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
        message: `Please list how to contribute to your project.`,
        name: 'contributing'
    },
    {
        type: 'list',
        message: `Please choose a license.`,
        name: 'license',
        choices: ['Apache','GNU','MIT','ISC','Mozilla','Boost Software']
    },
    {
        type: 'input',
        message: `Any tests?`,
        name: 'test'
    },
    {
        type: 'input',
        message: `Please provide your github username.`,
        name: 'githubUser'
    },
    {
        type: 'input',
        message: `Please provide your email.`,
        name: 'email'
    }
];

// TODO: Create a function to write README file
function writeToFile(fileName, content) {
    
    fs.writeFile(fileName, content, (err) =>
        err ? console.log(error) : console.log('README created!'))
}

// TODO: Create a function to initialize app
function init() {
    inquirer
    .prompt(questions)
    .then(ans => {
        var data = ans;

        return data;
    })
    .then((data) => generateMarkdown(data))
    .then((content) => writeToFile('README.md',content))
    .catch((err) => console.log(err));
}

// Function call to initialize app
init();
