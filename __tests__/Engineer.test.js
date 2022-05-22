const Engineer = require('../lib/Engineer');

test('github property is being set', ()=> {
    const name = "Lyann";
    const id = "008"
    const email = "lyann@hotmail.com"
    const github = "none"
    const bexi = new Engineer(name,id,email,github);
    
    expect(bexi.github).toBe(github);
})

test('getRole method returns employee information',()=>{

    const github = "none";
    const bexi = new Engineer(github);
    
    expect(bexi.getGitHub()).toBe(github);
});

test('getRole method returns employee information',()=>{
    const name = "Lyann";
    const id = "008"
    const email = "lyann@hotmail.com"
    const github = "none"
    const bexi = new Engineer(name,id,email,github);
    
    expect(bexi.getRole()).toBe("Engineer");
});