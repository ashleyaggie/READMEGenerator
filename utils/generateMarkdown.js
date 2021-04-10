const yearNpm = require('year');

var liBadge;
var liLink;
var licenseFull;
var deployWeb;

// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  switch(license) {
    case 'Apache':
      liBadge = '[License: Apache](https://img.shields.io/badge/License-Apache%202.0-blue.svg)';
      break;
    case 'GNU':
      liBadge = '[License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)';
      break;
    case 'MIT':
      liBadge = '[License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)';
      break;
    case 'ISC':
      liBadge = '[License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)';
      break;
    case 'Mozilla':
      liBadge = '[License: MPL 2.0](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)';
      break;
    case 'Boost Software':
      liBadge = '[License: Boost Software](https://img.shields.io/badge/License-Boost%201.0-lightblue.svg)';
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
  licenseFull = `[!${liBadge}](${liLink})`
  if (!liBadge || !liLink) {
    licenseFull = '';
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  const date = yearNpm();

  if (!data.website || data.website === 'none') {
    deployWeb = ``;
  } else {
    deployWeb = `[Deployed Website](${data.website})`;
  }

  renderLicenseBadge(data.license);
  renderLicenseLink(data.license);

  renderLicenseSection(liBadge,liLink);

  return `# ${data.title}

  ${licenseFull}

  ## Table of Contents

  1. [Description](#Description)
  2. [Installation](#Installation)
  3. [Usage](#Usage)
  4. [Contributing](#Contributing)
  5. [Issues](#Issues)
  6. [Credits](#Credits)
  7. [License](#License)
  8. [Tests](#Tests)
  9. [Questions](#Questions)

  ## Description

  ${data.description}

  ${deployWeb}

  Example picture:

  ![Picture of project website](${data.screenshot})

  ## Installation

  ${data.install}

  ## Usage

  ${data.usage}

  ## Contributing

  ${data.contributing}

  ## Issues

  ${data.reporting}

  ## Credits

  ${data.credits}

  ## License

  Copyright ${data.author} ${date}

  This is covered under the <a href='${liLink}'>${data.license}</a> license.

  ## Tests

  ${data.test}

  ## Questions

  Feel free to contact through the following with any questions:

  Email: ${data.email}\n
  Github: <a href='https://github.com/${data.githubUser}'>${data.githubUser}</a>`;
}

module.exports = generateMarkdown;
