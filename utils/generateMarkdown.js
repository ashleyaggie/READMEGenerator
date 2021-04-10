const yearNpm = require('year');

var liBadge;

// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  switch(license) {
    case 'Apache':
      liBadge = '[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)';
      break;
    case 'GNU':
      liBadge = '[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)';      break;
    case 'MIT':
      liBadge = '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)';
      break;
    case 'ISC':
      liBadge = '[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)';
      break;
    case 'Mozilla':
      liBadge = '[![License: MPL 2.0](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)';
      break;
    case 'Boost Software':
      liBadge = '[![License](https://img.shields.io/badge/License-Boost%201.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)';
      break;
    default:
      liBadge = '';
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  switch(license) {
    case 'Apache':
      liLink = 'https://opensource.org/licenses/Apache-2.0';
      break;
    case 'GNU':
      liLink = 'https://www.gnu.org/licenses/gpl-3.0';
      break;
    case 'MIT':
      liLink = 'https://opensource.org/licenses/MIT';
      break;
    case 'ISC':
      liLink = 'https://opensource.org/licenses/ISC';
      break;
    case 'Mozilla':
      liLink = 'https://opensource.org/licenses/MPL-2.0';
      break;
    case 'Boost Software':
      liLink = 'https://www.boost.org/LICENSE_1_0.txt';
      break;
    default:
      liLink = '';
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(liBadge,liLink) {
  var licenseFull = `[![License](${liBadge})](${liLink})`
  if (!liBadge || !liLink) {
    licenseFull = '';
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  const date = yearNpm();

  console.log(data);

  renderLicenseBadge(data.license);
  renderLicenseLink(data.license);

  renderLicenseSection(liBadge,liLink);

  return `# ${data.title}

  ## Table of Contents

  1. Description
  2. Installation
  3. Usage
  4. Contributing
  5. Issues
  6. Credits
  7. License

  ## Description

  ${data.description}

  [Deployed Website](${data.website})

  ![Picture of project website](${data.screenshot})

  ## How to Install

  ${data.install}

  ## How to Use

  ${data.usage}

  ## How to Contribute to the Repository

  ${data.contributing}

  ## How to Report Bugs

  ${data.reporting}

  ## Credits

  ${data.credits}

  ## License

  Copyright ${data.author} ${date}

  ${licenseFull}`;
}

module.exports = generateMarkdown;
