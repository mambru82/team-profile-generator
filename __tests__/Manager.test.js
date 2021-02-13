const Manager = require('../lib/Manager.js');

test ('creates an employee object', () => {
    const employee  = new Manager('Dave', 65, 'dave@gmail.com', '555-55-55');

    expect(employee.name).toBe('Dave');
    expect(employee.id).toEqual(65);
    expect(employee.email).toBe('dave@gmail.com');

    expect(employee.role).toBe('Manager');
    expect(employee.officeNumber).toBe('555-55-55');
})

test ('returns role of manager', () => {
    const employee = new Manager('Dave', 65, 'dave@gmail.com', '555-55-55');
    var role = employee.getRole();

    expect(role).toBe('Manager');
})