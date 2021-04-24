const Employee = require('../lib/Employee');

test('Employee instance object', () => {
  const runObject = new Employee();
  expect(typeof(runObject)).toBe("object");
});

test('Name object works', () => {
  const  name = "Ralph";
  const runObject = new Employee(name);
  expect(runObject.name).toBe(name);
});

test('ID object works', () => {
  const  id = 100;
  const runObject = new Employee("Foo", id);
  expect(runObject.id).toBe(parseInt(id));
});

test('Email object works', () => {
  const  email = "email@email.com";
  const runObject = new Employee("Foo", 1, email);
  expect(runObject.email).toBe(email);
});

test("See if getName() works", () => {
const valTest = "RipRock";
const name = new Employee(valTest);
expect(name.getName()).toBe(valTest);
});

test("See if getId() works", () => {
  const valTest = 50;
  const name = new Employee("Foo", valTest);
  expect(name.getId()).toBe(valTest);
  });

  test("See if getEmail() works", () => {
    const valTest = "email@email.com";
    const name = new Employee("Foo", 1, valTest);
    expect(name.getEmail()).toBe(valTest);
    });

    test("See if getRole() works", () => {
      const valTest = "Employee";
      const role = new Employee("Alvin", 1, "email@email.com");
      expect(role.getRole()).toBe(valTest);
      });