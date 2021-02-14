const Roster = require('./lib/Roster');
const generatePage = require('./src/page-template.js')
const { writeFile, copyFile } = require('./util/generate-site.js')

new Roster().generateTeamRoster()
    .then(generateTeamRosterResponse => {
        console.table(generateTeamRosterResponse);
        return generatePage(generateTeamRosterResponse);
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