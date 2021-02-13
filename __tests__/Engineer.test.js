const Engineer = require('../lib/Engineer.js');

test ('creates an employee object', () => {
    const employee  = new Engineer('Dave', 65, 'dave@gmail.com', 'mambru82');

    expect(employee.name).toBe('Dave');
    expect(employee.id).toEqual(65);
    expect(employee.email).toBe('dave@gmail.com');

    expect(employee.role).toBe('Engineer');
    expect(employee.github).toBe('mambru82');
})

test ('returns role of engineer', () => {
    const employee = new Engineer('Dave', 65, 'dave@gmail.com', 'mambru82');
    var role = employee.getRole();

    expect(role).toBe('Engineer');
})

test ('returns github username', () => {
    const employee = new Engineer('Dave', 65, 'dave@gmail.com', 'mambru82');
    var role = employee.getGitHub();

    expect(role).toBe('mambru82');
})


