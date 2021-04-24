const Intern = require('../lib/Intern.js');

test("Create school", () => {
    const valTest = "UTSA";
    const UTA = new Intern("Foo", 1, "email@email.com", valTest);
    expect(UTA.school).toBe(valTest);
  });

  test("getRole() works, () => {
    const valTest = "Intern";
    const int = new Intern("Foo", 1, "email@email.com", "UCLA");
    expect(int.getRole()).toBe(valTest);
  });
  
  test("getSchool() works", () => {
    const valTest = "UTSA";
    const int = new Intern("Foo", 1, "email@email.com", valTest);
    expect(int.getSchool()).toBe(valTest);
  });