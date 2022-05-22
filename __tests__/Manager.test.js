const Manager = require('../lib/Manager');

test('github property is being set', ()=> {
    const name = "Bexi";
    const id = "007"
    const email = "bexi@gmail.com"
    const officeNumber = "555"
    const bexi = new Manager(name,id,email,officeNumber);
    
    expect(bexi.officeNumber).toBe(officeNumber);
})


test('getRole method returns employee information',()=>{
    const name = "Bexi";
    const id = "007"
    const email = "bexi@gmail.com"
    const officeNumber = "555"
    const bexi = new Manager(name,id,email,officeNumber);
    
    expect(bexi.getRole()).toBe("Manager");
});