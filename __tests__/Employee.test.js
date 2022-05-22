
const { expect } = require('expect');
const { test } = require('jest-circus');
const Employee = require('../lib/Employee');


test('Employee sets name,id,email properties', () => {
    const name = "Bexi";
    const id = "007"
    const email = "bexi@gmail.com"
    const bexi = new Employee(name,id,email);

    expect(bexi.email).toBe(email) 
    expect(bexi.name).toBe(name) 
    expect(bexi.id).toBe(id) 

});

test('Employee get name method returns name', () => {
    const name = "Bexi";
    const bexi = new Employee(name);

    expect(bexi.getName()).toBe(name);
});

test('Employee get name method returns id', () => {
    const id = "007"
    const bexi = new Employee(id);

    expect(bexi.getId()).toBe(id);
});


test('Employee get name method returns email', () => {
    const email = "bexi@gmail.com"
    const bexi = new Employee(email);

    expect(bexi.getEmail()).toBe(email);
});

test('getRole method returns employee information',()=>{
    const name = "Bexi";
    const id = "007"
    const email = "bexi@gmail.com"
    const bexi = new Employee(name,id,email);
    
    expect(bexi.getRole()).toBe("Employee");
});