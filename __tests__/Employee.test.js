const Employee = require('../lib/Employee.js');

test ('creates an employee object', () => {
    const employee  = new Employee('Dave', 65, 'dave@gmail.com');

    expect(employee.name).toBe('Dave');
    expect(employee.id).toEqual(65);
    expect(employee.email).toBe('dave@gmail.com');

    expect(employee.role).toBe('Employee');

})

test ('returns role of employee', () => {
    const employee = new Employee('Dave', 65, 'dave@gmail.com');
    var role = employee.getRole();

    expect(role).toBe('Employee');
})

test ('returns name, id of the employee, email', () => {
    const employee = new Employee('Dave', 65, 'dave@gmail.com');
    var name = employee.getName();
    var id = employee.getId();
    var email = employee.getEmail();

    expect(name).toBe('Dave');
    expect(id).toEqual(65);
    expect(email).toEqual('dave@gmail.com');
})