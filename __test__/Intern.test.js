const Intern = require('../lib/Intern.js');

test("Create school", () => {
    const valTest = "UTSA";
    const UTA = new Intern("Foo", 1, "email@email.com", valTest);
    expect(UTA.school).toBe(valTest);
  });

  test("getRole() works", () => {
    const valTest = "Intern";
    const stu = new Intern("Foo", 1, "email@email.com", "UCLA");
    expect(stu.getRole()).toBe(valTest);
  });
  
  test("getSchool() works", () => {
    const valTest = "UTSA";
    const UTA = new Intern("Foo", 1, "email@email.com", valTest);
    expect(UTA.getSchool()).toBe(valTest);
  });