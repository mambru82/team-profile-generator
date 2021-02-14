const generateRosterCards = rosterArr => {
    //get array of managers
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
        <div class="card text-white bg-primary mb-3" style="max-width: 18rem;">
            <div class="card-header">${role}</div>
            <div class="card-body">
                <h5 class="card-title">${name}</h5>
                <p class="card-text">ID: ${id}</p>
                <p class="card-text"><a href="mailto:${email}">${email}</a></p>
                <p class="card-text">Office Number:${officeNumber}</p>
        </div>
        `
    })

    const engineerArrayHtml = engineerArray.map(({name, id, email, role, github}) => {
        return `
        <div class="card text-white bg-primary mb-3" style="max-width: 18rem;">
            <div class="card-header">${role}</div>
            <div class="card-body">
                <h5 class="card-title">${name}</h5>
                <p class="card-text">ID: ${id}</p>
                <p class="card-text"><a href="mailto:${email}">${email}</a></p>
                <p class="card-text"><a href="https://github.com/${github}">GitHub:${github}</a></p>
        </div>
        `
    })

    const internArrayHtml = internArray.map(({name, id, email, role, school}) => {
        return `
        <div class="card text-white bg-primary mb-3" style="max-width: 18rem;">
            <div class="card-header">${role}</div>
            <div class="card-body">
                <h5 class="card-title">${name}</h5>
                <p class="card-text">ID: ${id}</p>
                <p class="card-text"><a href="mailto:${email}">${email}</a></p>
                <p class="card-text">School:${school}</p>
        </div>
        `
    })

    return `
    <section class="flex-row justify-space-between">
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
            <div class="row">            
                <h1 class="col-12">My Team</h1>
            </div>
        </header>
        <main class="container">
            <div class="row">
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
