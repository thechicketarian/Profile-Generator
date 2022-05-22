const generateManagerCard = function(manager) {
    return `
    <div class="cardBox">
    <div class="cardHeader"> 
    <h3> ${manager.name} </h3>
    <h4> Manager </h4>
    </div>
    <div class="cardBody">
        <ul class="cardList">
            <li class="cardID"> ${manager.id} </li>
            <li class="cardEmail"> <a href="mailto:${manager.email} "> ${manager.email}  </a></li>
            <li class="cardOfficeNumber"> ${manager.officeNumber} </li>
        </ul>
    </div>
   </div>

    `;
}

const generateEngineerCard = function(engineer) {
    return `
    <div class="cardBox">
    <div class="cardHeader"> 
    <h3> ${engineer.name} </h3>
    <h4> Engineer </h4>
    </div>
    <div class="cardBody">
        <ul class="cardList">
            <li class="cardID"> ${engineer.id} </li>
            <li class="cardEmail"> <a href="mailto:${engineer.email} "> ${engineer.email}  </a></li>
            <li class="cardGithub"> <a href="https://github.com/${engineer.github}"> ${engineer.github} </a> </li>
        </ul>
    </div>
   </div>

    `;
}

const generateInternCard = function(intern) {
    return `
    <div class="cardBox">
    <div class="cardHeader"> 
    <h3> ${intern.name}  </h3>
    <h4> Intern </h4>
    </div>
    <div class="cardBody">
        <ul class="cardList">
            <li class="cardID"> ${intern.id} </li>
            <li class="cardEmail"> <a href="mailto:${intern.email} "> ${intern.email} </a></li>
            <li class="cardSchool"> ${intern.school} </li>
        </ul>
    </div>
   </div>

    `;
}

const generateHTML = function(employeeData) {

    pageArray=[];

    for (let i=0; i < employeeData.length; i++) {

        const employee = employeeData[i];
        const role = employee.getRole();

        if(role === "Manager") {
            const managerCard = generateManagerCard(employee);
            pageArray.push(managerCard);
        }
        if(role === "Engineer") {
            const engineerCard = generateEngineerCard(employee);
            pageArray.push(engineerCard);
        }
        if(role === "Intern") {
            const internCard = generateInternCard(employee);
            pageArray.push(internCard);
        }
    }

    const finalEmployeeCards = pageArray.join('');
    return generateFinalHTML(finalEmployeeCards);
    
}

 const generateFinalHTML = function(finalEmployeeCards) {
     return `
     <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title> Team Profile Generator</title>
    <link rel="stylesheet" href="./styles.css">
</head>
<body>
    <header>
    <h1 class="mainHeader"> My Team </h1>
</header>
   <div class="teamCards">
    ${finalEmployeeCards}
   </div>
</body>
</html>`;
 }
    

module.exports = generateHTML;