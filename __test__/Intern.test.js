const Intern = require('../lib/Intern.js');

test("Can set school via constructor", () => {
    const valTest = "UTSA";
    const UTA = new Intern("Foo", 1, "email@email.com", valTest);
    expect(UTA.school).toBe(valTest);
  });

  test("getRole() should return \"Intern\"", () => {
    const valTest = "Intern";
    const e = new Intern("Foo", 1, "email@email.com", "UCLA");
    expect(e.getRole()).toBe(valTest);
  });
  
  test("Can get school via getSchool()", () => {
    const valTest = "UTSA";
    const e = new Intern("Foo", 1, "email@email.com", valTest);
    expect(e.getSchool()).toBe(valTest);
  });