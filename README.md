# Proffessional README Generator

## Project Description

This project utilised JavaScript and the [Inquirer package](https://www.npmjs.com/package/inquirer) to create a command-line application that dynamically generates a comprehensive and high-quality professional README.md file from a user's input for a new project. The user is then able to invoke the application by using the folowing command:

```bash
node index.js
```

### The URL of the walkthrough video that demonstrates the application's functionality:

https://drive.google.com/file/d/1Ny_tPG37AIn8fnobOGrtFpVznShCiEC2/view?usp=sharing

### The URL of the GitHub repository that contains the code:

https://github.com/Jean-003/Proffesional_README_Generator

## Usage

To generate a high-quality proffessional README.md file with the following criteria:

Title of the project

Sections entitled:

- Description
- Table of Contents
- Installation
- Usage
- License
- Contributing
- Tests
- Questions


User should run the following command in their terminal or their GitBash:

```
node index.js

```

Next, the user will be prompted to enter an answer to the first question shown below:

_What is the title of the project?_

Upon entering an answer, a series of 9 more questions requesting the user to enter their responses follows.

At the end of this, the user is alerted that a proffessional README.md file with the user's responses has been successfully generated.

## Licences 

None

## References 

The following starter code was supplied by edX:

### Javascript file:

const fs = require("fs");
const path = require('path');
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");

// array of questions for user
const questions = [

];

// function to write README file
function writeToFile(fileName, data) {
}

// function to initialize program
function init() {

}

// function call to initialize program
init();





