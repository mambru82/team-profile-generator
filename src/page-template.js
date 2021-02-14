const generateRosterCards = rosterArr => {
    //get array of managers
    console.log(rosterArr);
    const managerArray = rosterArr.filter(roster => {
        if(roster.officeNumber) {
            return true
        } else {
            return false
        }
    })

    //get array of engineers
    const engineerArray = rosterArr.filter(roster => {
        if(roster.github) {
            return true
        } else {
            return false
        }
    })
    //get array of interns
    const internArray = rosterArr.filter(roster => {
        if(roster.school) {
            return true
        } else {
            return false
        }
    })

    const managerArrayHtml = managerArray.map(({name, id, email, role, officeNumber}) => {
        return `
        <div class="card col-4 text-white bg-secondary mb-3" style="max-width: 18rem;">
            <div class="card-header bg-primary text-center">
                <h5>${name}</h5>
                <h5>&#9749; ${role}</h5>
            </div>
            <div class="card-body bg-light text-dark">
                <p class="card-text">ID: ${id}</p>
                <p class="card-text">EMAIL: <a href="mailto:${email}">${email}</a></p>
                <p class="card-text">Office Number: ${officeNumber}</p>
            </div>
        </div>
        `
    })

    const engineerArrayHtml = engineerArray.map(({name, id, email, role, github}) => {
        return `
        <div class="card col-4 text-white bg-primary mb-3" style="max-width: 18rem;">
        <div class="card-header bg-primary text-center">
                <h5>${name}</h5>
                <h5>&#128083; ${role}</h5>
        </div>
        <div class="card-body bg-light text-dark">
                <p class="card-text">ID: ${id}</p>
                <p class="card-text">EMAIL: <a href="mailto:${email}">${email}</a></p>
                <p class="card-text">GITHUB: <a href="https://github.com/${github}">${github}</a></p>
            </div>
        </div>
        `
    })

    const internArrayHtml = internArray.map(({name, id, email, role, school}) => {
        return `
        <div class="card col-4 text-white bg-primary mb-3" style="max-width: 18rem;">
            <div class="card-header bg-primary text-center">
                    <h5>${name}</h5>
                    <h5>👨‍🎓 ${role}</h5>
            </div>
            <div class="card-body bg-light text-dark">
                <p class="card-text">ID: ${id}</p>
                <p class="card-text">EMAIL: <a href="mailto:${email}">${email}</a></p>
                <p class="card-text">School:${school}</p>
            </div>
        </div>
        `
    })

    return `
    <section class="row justify-content-evenly">
    ${managerArrayHtml.join('')}
    ${engineerArrayHtml.join('')}
    ${internArrayHtml.join('')}
    </section>`;


}

module.exports = roster => {
    // console.log(roster);
    // const {name, , ...header} = templateData;
    return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta http-equiv="X-UA-Compatible" content="ie=edge">
        <title>Team Profile Demo</title>
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-BmbxuPwQa2lc/FVzBcNJ7UAyJxM6wuqIj61tLrc4wSX0szH/Ev+nYRRuWlolflfl" crossorigin="anonymous">
        <link rel="stylesheet" href="style.css">

    </head>

    <body>
        <header class="container">
            <div class="row justify-content-center">            
                <h1 class="col-12 bg-danger text-center">My Team</h1>
            </div>
        </header>
        <main class="container">
            <div class="container">
                ${generateRosterCards(roster)}
            </div>
        </main>
        <footer class="container text-center py-3">
            <h3 class="text-dark">&copy; ${new Date().getFullYear()} by mambru82 </h3>
        </footer>
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta2/dist/js/bootstrap.bundle.min.js" integrity="sha384-b5kHyXgcpbZJO/tY9Ul7kGkf1S0CWuKcCD38l8YkeH8z8QjE0GmW1gYU5S9FOnJ0" crossorigin="anonymous"></script>
    </body>
    </html>
    `
};
