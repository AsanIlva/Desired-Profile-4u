const inquirer = require('inquirer');
const fs = require('fs');
const path = require('path');
const util = require('util');

const Engineer = require('./Engineer');
const Intern = require('./Intern');
const Manager = require('./Manager');

const writeFileAsync = util.promisify(fs.writeFileSync);

class Main {
    constructor() {
        this._teamArray = [];
    }

    async _easy() {
        let teamHTMLString = '';
        for (const teamMember of this._teamArray) {
          teamHTMLString += teamMember.easy();
        }
        const result = Main._templateStart + teamHTMLString + Main._templateEnd;

        await writeFileAsync(path.resolve(__dirname,'..', 'dist', 'easy.html'),result);
    }

        async run() {
            const { teamSize } = await inquirer.prompt([{
                type: 'input',
                name: 'teamSize',
                message: 'Please input your team size',
                default: 2,
            }]);
            
            for (let i = 0; i < teamSize; i++) {
                console.log('=============================');
                const response = await inquirer.prompt([{
                        type: 'input',
                        name: 'name',
                        message: 'Please input your name',
                    },
                    {
                        type: 'input',
                        name: 'email',
                        message: 'Please input your email',
                    },
                    {
                        type: 'list',
                        name: 'role',
                        message: 'Please input your role',
                        choices: [
                            Main._ENGINEER,
                            Main._INTERN,
                            Main._MANAGER
                        ]
                    },
                    {
                        type: 'input',
                        name: 'github',
                        message: 'Please input your github',
                        when: ({ role }) => role === Main._ENGINEER
                    },
                    {
                        type: 'input',
                        name: 'school',
                        message: 'Please input your school',
                        when: ({ role }) => role === Main._INTERN
                    },
                    {
                        type: 'input',
                        name: 'roomNumber',
                        message: 'Please input your room number',
                        when: ( {role} ) => role === Main._MANAGER
                    }
                ]);
                const {
                    name,
                    email,
                    role,
                    github,
                    school,
                    roomNumber,
                } = response;

            if (role === Main._ENGINEER) {
                this._teamArray.push(new Engineer(name, email, github));
            }
            if (role === Main._INTERN) {
                this._teamArray.push(new Intern(name, email, school));
            }
            if (role === Main._MANAGER) {
                this._teamArray.push(new Manager(name, email, roomNumber));
            }
        }

        await this._easy();

    }
}
// Can change Engineer really fast here by changing 'engineer' here
Main._ENGINEER = 'engineer';
Main._INTERN = 'intern';
Main._MANAGER = 'manager';

Main._templateStart = `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link
      href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css"
      rel="stylesheet"
      integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3"
      crossorigin="anonymous"
    />
    <style>
      .page-header {
        background: lightblue;
        padding: 30px;
        font-size: xx-large;
        text-align: center;
        font-weight: bold;
      }
      .team-roster-container {
        display: flex;
        padding: 50px;
      }
      .card:not(:last-child) {
        margin-right: 20px;
      }
    </style>
    <title>Team Roster</title>
  </head>
  <body>
    <div class="page-header">My Team</div>
    <div class="team-roster-container">
    `;
    Main._templateEnd = `
    </div>
    <script
      src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js"
      integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p"
      crossorigin="anonymous"
    ></script>
  </body>
</html>
`
 module.exports = Main;