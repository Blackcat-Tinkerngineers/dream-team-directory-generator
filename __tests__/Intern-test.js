const Intern = require('../lib/Intern')

test('create school from object', () => {
    const name = 'newname';
    const id = '0';
    const email = 'test@example.com'; 
    const school = 'newschool';
    const employee = new Intern(name, id, email, school);

    expect(employee.school).toEqual('newschool');
})

// create a test for the function to get the school
test('test getSchool()', () => {
    const name = 'newname';
    const id = '0';
    const email = 'test@example.com';
    const school = 'newschool';
    const employee = new Intern(name, id, email, school);

    expect(employee.getSchool()).toEqual('newschool');
})
// create a test to get the role of the object
test('change getRole to render Intern', () => {
    const name = 'newname';
    const id = '0';
    const email = 'test@example.com';
    const school = 'newschool';
    const role = 'Intern';
    const employee = new Intern(name, id, email, school);
    expect(employee.getRole()).toBe(role);
});