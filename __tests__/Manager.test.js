const Manager = require('../lib/manager');

// TEST FOR A NEW MANAGER //
const managerTest = new Manager('Austin', '01', 'hiceycook@gmail.com', '9');

test('to get values from constructor object', () => {
    expect(managerTest.name).toBe('Austin');
    expect(managerTest.id).toBe('01');
    expect(managerTest.email).toBe('hiceycook@gmail.com');
    expect(managerTest.officeNo).toBe('9');
});

//TEST MANAGER METHODS //

test('test if getOfficeNo() returns office number', () => {
    expect(managerTest.getOfficeNo()).toBe('9');
});

test('test if getRole() returns the role', () => {
    expect(managerTest.getRole()).toBe('Manager');
});

