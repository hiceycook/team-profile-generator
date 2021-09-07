const { TestWatcher } = require("jest");
const Employee = require("../lib/Employee");

//TEST FOR A NEW EMPLOYEE //
const employeeTest = new Employee('Austin', '01', 'hiceycook@gmail.com');

test('gets values from employee constructor', () => {
    expect(employeeTest.name).toBe('Austin');
    expect(employeeTest.id).toBe('01');
    expect(employeeTest.email).toBe('hiceycook@gmail.com');
});

test('getName() returns employee name', () => {
    expect(employeeTest.getName()).toBe('Austin');
});

test('getId() returns employee ID', () => {
    expect(employeeTest.getId()).toBe('01');
});

test('getEmail() returns employee email', () => {
    expect(employeeTest.getEmail()).toBe('hiceycook@gmail.com');
});

test('getRole() returns employee role', () => {
    expect(employeeTest.getRole()).toBe('Employee');
});

