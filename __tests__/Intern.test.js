const Intern = require('../lib/Intern');

test('github property is being set', ()=> {
    const name = "Bexi";
    const id = "007"
    const email = "bexi@gmail.com"
    const school = "txst"
    const bexi = new Intern(name,id,email,school);
    
    expect(bexi.school).toBe(school);
})

test('getRole method returns employee information',()=>{

    const school = "txst"
    const bexi = new Intern(school);
    
    expect(bexi.getSchool()).toBe(school);
});

test('getRole method returns employee information',()=>{
    const name = "Bexi";
    const id = "007"
    const email = "bexi@gmail.com"
    const school = "txst"
    const bexi = new Intern(name,id,email,school);
    
    expect(bexi.getRole()).toBe("Intern");
});