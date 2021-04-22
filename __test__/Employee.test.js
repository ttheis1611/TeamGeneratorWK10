const Employee = require('../lib/Employee');
const randomNumber = require('../lib/Employee');

test('Employee instance', () => {
  const e = new Employee();
  expect(typeof(e)).toBe("object");
});