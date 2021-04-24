const Manager = require("../lib/Manager.js");
const Employee = require("../lib/Employee.js");

test("Office number set", () => {
    const valTest = 10;
    const mgr = new Manager("Foo", 1, "email@email.com", valTest);
    expect(mgr.officeNumber).toBe(valTest);
});

test("getRole() works", () => {
    const valTest = "Manager";
    const mgr = new Manager("Foo", 1, "email@email.com", 10);
    expect(mgr.getRole()).toBe(valTest);
});

test("getOffice() works", () => {
    const valTest = 10;
    const mgr = new Manager("Foo", 1, "email@email.com", valTest);
    expect(mgr.getOfficeNumber()).toBe(valTest);
});