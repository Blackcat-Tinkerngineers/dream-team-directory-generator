const Employee = require('../lib/Employee');

test('create an employee object', () => {
    const employee = new Employee();
    expect(typeof(employee)).toBe('object');
});

test('get employees name from the employee object', () => {
    const name ='newName';
    const employee = new Employee(name);
    expect(employee.name).toBe(name);
});

test('get employees ID', () => {
    const name ='newName';
    const id = 0;
    const employee = new Employee(name, id);
    expect(employee.id).toBe(expect.any(number));

});

test ('get employees email', () => {
    const name ='newName';
    const id = '0';
    const email = 'test@example.com';
    const employee = new Employee(name, id, email);
    expect(employee.email).toBe(email);

});

test ('get employees role', () => {
    const name ='newName';
    const id = '0';
    const email = 'test@example.com';
    const role = 'employee';
    const employee = new Employee(name, id, email,role);
    expect(employee.role).toBe(role);

});


/*New test*/

test ('test getName()', () => {
    const employee = new Employee(Name);
    expect(employee.name).toBe(Name);

});

test ('test getID()', () => {
    const employee = new Employee(Name);
    const id = 0;
    const Engineer = new Employee(Name, id);
    expect(employee.getId()).toEqual(expect.any(Number));
});

test ('test getEmail()', () => {
    const employee = new Employee(Name);
    const id = 0;
    const email = 'test@example.com';
    const Engineer = new Employee(Name, id,email);
    expect(employee.getEmail()).toBe(email);
});

test ('test getRole()', () => {
    const employee = new Employee(Name);
    const id = 0;
    const email = 'test@example.com';
    const role = 'Employee';
    const Engineer = new Employee(Name, id,email,role);
    expect(employee.getRole()).toBe(role);

});    

