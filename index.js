// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');

var liBadge;
var liLink;

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
        choices: ['Apache','GNU','MIT','ISC','Mozilla','Boost Software']
    }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    const { title, website, screenshot, description, install, usage, credits, reporting, contributing, license } = data;
    
    fs.writeFile(fileName, content, (err) =>
        err ? console.log(error) : console.log('README created!'))
}

// TODO: Create a function to initialize app
function init() {
    console.log('startInit');
    inquirer
    .prompt(questions)
    .then(ans => {
        var data = ans;

        console.log(data)

        return data;
    })
    .then((data) => generateMarkdown(data))
    .catch((err) => console.log(err));
}

// Function call to initialize app
init();

// liBadge = genMark.renderLicenseBadge(data.license);
// liLink = genMark.renderLicenseLink(data.license);