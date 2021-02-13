const Intern = require('../lib/Intern.js');

test ('creates an employee object', () => {
    const employee  = new Intern('Dave', 65, 'dave@gmail.com', 'UTAustin');

    expect(employee.name).toBe('Dave');
    expect(employee.id).toEqual(65);
    expect(employee.email).toBe('dave@gmail.com');

    expect(employee.role).toBe('Intern');
    expect(employee.school).toBe('UTAustin');
})

test ('returns role of intern', () => {
    const employee = new Intern('Dave', 65, 'dave@gmail.com', 'UTAustin');
    var role = employee.getRole();

    expect(role).toBe('Intern');
})

test ('returns school of the intern', () => {
    const employee = new Intern('Dave', 65, 'dave@gmail.com', 'UTAustin');
    var school = employee.getSchool();

    expect(school).toBe('UTAustin');
})
