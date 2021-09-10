const index = require('../index');

const createTeamProfile = (team) => {
    const html = [];

    const createManagerHTML = manager => {
        console.log(manager);
        let managerHTML = `
    <div class="member-container">
        <div class="member-header">
        <h1>Manager</h1>
        <h2>Name: ${manager.name}</h2>
        </div>
        <div class="member-information-container">
            <h3>ID: ${manager.id}</h3>
            <h3>E-Mail: <a href="mailto:${manager.email}">${manager.email}</a></h3>
            <h3>Office #: ${manager.officeNo}</h3>
        </div>
    </div>
    `;
        html.push(managerHTML);
    }

    const createEngineerHTML = engineer => {
        console.log(engineer);
        let engineerHTML = `
    <div class="member-container">
        <div class="member-header">
        <h1>Engineer</h1>
        <h2>Name: ${engineer.name}</h2>
        </div>
        <div class="member-information-container">
            <h3>ID: ${engineer.id}</h3>
            <h3>E-Mail: <a href="mailto:${engineer.email}">${engineer.email}</a></h3>
            <h3>Github: <a target="_blank" href="https://github.com/${engineer.github}">${engineer.github}</a></h3>
        </div>
    </div>
    `;
        html.push(engineerHTML);
    };

    const createInternHTML = intern => {
        console.log(intern);
        let internHTML = `
        <div class="member-container">
            <div class="member-header">
            <h1>Intern</h1>
            <h2>Name: ${intern.name}</h2>
            </div>
            <div class="member-information-container">
                <h3>ID: ${intern.id}</h3>
                <h3>E-Mail: <a href="mailto:${intern.email}">${intern.email}</a></h3>
                <h3>School: ${intern.school}</h3>
            </div>
        </div>
        `;
        html.push(internHTML);
    };

    for (let i = 0; i < team.length; i++) {
        if (team[i].getRole() === "Manager") {
            createManagerHTML(team[i]);
        }
        if (team[i].getRole() === "Engineer") {
            createEngineerHTML(team[i]);
        }
        if (team[i].getRole() === "Intern") {
            createInternHTML(team[i]);
        }
    };

    // Combine everything and return to be exported
    return html.join('');
}



module.exports = team => {
    return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <link rel="preconnect" href="https://fonts.googleapis.com">
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
        <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@500&display=swap" rel="stylesheet">
        <link rel="stylesheet" href="../assets/style.css">
        <title>Team Profile</title>
    </head>
    <body>
        <header>
            <h1> My Team </h1>
        </header>
        
        <main>${createTeamProfile(team)}</main>
    </body>
    </html>`
};
