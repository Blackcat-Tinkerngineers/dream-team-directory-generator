const { expect } = require('@jest/globals');
const { test } = require('picomatch');
const Engineer = require('../lib/Engineer');

test('github username', () => {
    const name ='newName';
    const ID = '0';
    const email = 'test@example.com';
    const github = 'username';
    const employee = new Engineer(name,ID,email,github);
    expect(employee.github).toBe(github);
});

test('getHub()', () => {
    const name ='newName';
    const ID = '0';
    const email = 'test@example.com';
    const github = 'username';
    const employee = new Engineer(name,ID,email,github);
    expect(employee.github).toBe(github);
});

test('getRole()', () => {
    const name ='newName';
    const ID = '0';
    const email = 'test@example.com';
    const github = 'username';
    const role = 'Engineer';
    const employee = new Engineer(name,ID,email,github);
    expect(employee.getRole.toBe(role)
);
});

