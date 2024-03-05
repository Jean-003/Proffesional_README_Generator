const inquirer = require('inquirer');
const fs = require('fs');

 // Function to write README.md file

function generateLicenceBadge(licence){
    if(licence === 'Apache Licence 2.0'){
        return '[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)'
    
    }else if(licence === 'MIT Licence'){
        return '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)' 
    
    }else if(licence === 'Boost Software Licence'){
        return '[![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)'
    }
    
}

 const generateMD = (answers) => {

  return `

 # Title
 ${answers.title}
 
 ## Description
 ${answers.description}
 
 ## Table of Contents
 1. [Installation](#installation)
 2. [Usage](#usage) 
 3. [Contributing](#contributing)
 4. [Tests](#tests)
 5. [Questions](#questions)


 ## Installation
 ${answers.installation}

 ## Usage 
 ${answers.usage}
 
 ## Contributing
 ${answers.contribution}
 
 ## Tests
 ${answers.tests}
 
 ## Licence
 ${generateLicenceBadge(answers.licence)}
 
 ## Questions
GitHub Username: 
${answers.questions}

## Email Address: 
${answers.email}
`;
 };

 // Array of questions for user

inquirer
  .prompt([
    {
      type: 'input',
      name: 'title',
      message: 'What is the title of the project?',
    },
    {
        type: 'input',
        name: 'description',
        message: 'What is the description of the project?',
    },
    
    {
        type: 'input',
        name: 'installation',
        message: 'What are the installation instructions?',
    },
    {
        type: 'input',
        name: 'usage',
        message: 'What is the usage information?',
    },
    {
        type: 'input',
        name: 'contribution',
        message: 'What are the contribution guidelines?',
    },
    {
        type: 'input',
        name: 'tests',
        message: 'What are the tests instructions?',
    },
    {
        type: 'list',
          message: 'Which licence is the application covered under?',
          name: 'licence',
          choices: ['Apache Licence 2.0', 'MIT Licence', 'Boost Software Licence'], 
    },
    {
        type: 'input',
        name: 'questions',
        message: 'What is your GitHub username?',
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is your email address?',
    },

  ])
  .then((data) => {
    const filename = 'output/README.md';
    let READMEstring = generateMD(data);
    fs.writeFile(filename, READMEstring, (err) =>
      err ? console.log(err) : console.log('Success!')
    );
  });