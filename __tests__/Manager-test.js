test('get officeNumber', done => {
    function callback(data) {
      try {
        expect(data).toBe('officeNumber');
        done();
      } catch (error) {
        done(error);
      }
    }
  
    fetchData(callback);
  });

  const Manager = require('../lib/Manager');

test('get Office number', () => {
    const name = 'newname';
    const id = '0';
    const email = 'test@example.com';
    const office= 'office';
    const employee = new Manager(name, id, email, office);

    expect(employee.office).toBeDefined();
});

test(' test getRole() to render Manager', () => {
    const name = 'newname';
    const id ='0';
    const email = 'test@example.com';
    const office = 'office';
    const role = 'Manager';
    const employee = new Manager(name, id, email, office, role);

    expect(employee.getRole()).toBe(role);
});

test('test getOffice()', () => {
    const name = 'newname';
    const id = '0';
    const email = 'test@example.com';
    const office = 'office';
    const employee = new Manager(name, id, email, office);
     
    expect(employee.getOffice).toBeDefined();