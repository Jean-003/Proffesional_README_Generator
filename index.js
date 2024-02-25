const inquirer = require('inquirer');
const fs = require('fs');

 // Function to write README.md file

 const generateMD = (answers) => {
  let contents = answers.contents.map((item) => {
      if (item === 'installation') {
          return '- Installation';
      } else if (item === 'usage') {
          return '- Usage';
      } else if (item === 'licence') {
          return '- Licence';
      } else if (item === 'contributing') {
          return '- Contributing';
      } else if (item === 'tests') {
          return '- Tests';
      } else if (item === 'questions') {
          return '- Questions';
      }

  }).join('\n');

  return `

 # Title
 ${answers.title}
 
 ## Description
 ${answers.description}
 
 ## Table of Contents
 ${answers.contents.map(item => `- ${item}`).join('\n')}

 ## Usage 
 ${answers.usage}

 ## Installation
 ${answers.installation}

     
 ## Contributing
 ${answers.contribution}
 
 ## Tests
 ${answers.tests}
 
 ## Licence
 ${answers.licence}
 
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
        type: 'checkbox',
          message: 'What should be included in the table of contents?',
          name: 'contents',
          choices: [ {
                    name: 'Installation',
                    value: 'installation',
                },
                {
                    name: 'Usage',
                    value: 'usage',
                },
                {
                    name: 'Licence',
                    value: 'licence',
                },
                {
                    name: 'Contributing',
                    value: 'contributing',
                },
                {
                    name: 'Tests',
                    value: 'tests',
                },
                {
                    name: 'Questions',
                    value: 'questions',
                },], 
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
        type: 'checkbox',
          message: 'Which licence is the application covered under?',
          name: 'licence',
          choices: ['Apache Licence 2.0', 'MIT Licence', 'Boost Software Licence', 'Eclipse Public Licence 2.0', 'GNU General Public Licence v2.0', 'Creative Commons Zero v1.0 Universal', 'Mozilla Public License 2.0', 'The Unlicense'], 
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