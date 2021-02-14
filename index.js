const Roster = require('./lib/Roster');

new Roster().generateTeamRoster()
    .then(roster => {
        console.table(roster);
        return generatePage(roster);
    })
    .then(pageHTML => {
        return writeFile(pageHTML)
    })
    .then(writeFileResponse => {
        console.log(writeFileResponse);
        return copyFile();
    })
    .then(copyFileResponse => {
        console.log(copyFileResponse);
    })
    .catch(err => {
        console.log(err);
    });