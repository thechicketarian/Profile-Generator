const inquirer = require('inquirer');
const fs = require('fs');
const generateHTML = require('./src/generateHTML')

const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern'); 

const teamArray= [];

const addManager = () => {
    return inquirer.prompt([
    {   
        type: 'input',
        name: "name",
        message: "What is your team managers name?",
    },
    {   
        type: 'input',
        name: "id",
        message: "What is your team managers ID?",
    }, {
        type: 'input',
        name: "email",
        message: "What is your team managers email?",
    },
    {
        type: 'input',
        name: "officeNumber",
        message: "What is your team managers office number?",
    }
    
])

    .then(managerInfo => {
        const {name, id, email, officeNumber} = managerInfo;
        const manager = new Manager (name, id, email,officeNumber);

        teamArray.push(manager);
        console.log(manager);
    })
};


const addEmployee = () => {

    console.log(`Add New Team Members`);

    return inquirer.prompt ([
        {
            type: 'list',
            name: 'role',
            message: 'Would you like to add another employee?',
            choices: ['Engineer','Intern']
        }, {
            type: 'input',
            name:'name',
            message: 'What is your employees name?',
        },
        {   
            type: 'input',
            name: "id",
            message: "What is your employees ID?",
        },
        {
            type: 'input',
            name: "email",
            message: "What is your employees email?",
        },
        {
            type: 'input',
            name:'github',
            message: 'What is your engineers gitbhub name?',
            when:(input) => input.role === 'Engineer',
        },
        {
            type: 'input',
            name:'school',
            message: 'What is your interns school name?',
            when:(input) => input.role === 'Intern',
        },
        {
            type:'confirm',
            name: 'addEmployee',
            message: 'Would you like to add more employees?',
            default: false
        }
    ])
    
    .then(employeeInfo => {
        let {name,id,email,role,github,school,addEmployee } = employeeInfo;
        let employee;

        if (role === 'Engineer') {
            employee = new Engineer(name, id, email, github);
            console.log(employee);
        } else if (role === 'Intern') {
            employee = new Intern(name, id, email, school)
            console.log (employee)
        } 

        teamArray.push(employee);

        if(addEmployee) {
            return addEmployee(teamArray);
        } else {
            return teamArray;
        }

    })
};

const writeFile = data => {
    fs.writeFile('./dist/index.html', data, (err) => {
    err ? console.log(err) : console.log('Success! You create a new Employees html file!')
})
};

addManager()
.then(addEmployee)
.then(teamArray => {
    return generateHTML(teamArray);
})
.then(pageHTML => {
    return writeFile(pageHTML);
})
.catch(err=>{
    console.log(err)
});




