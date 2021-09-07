const Intern = require('../lib/intern');

// TEST FOR A NEW INTERN //
const internTest = new Intern('Austin', '01', 'hiceycook@gmail.com', 'FSU');

test('to get values from constructor object', () => {
    expect(internTest.name).toBe('Austin');
    expect(internTest.id).toBe('01');
    expect(internTest.email).toBe('hiceycook@gmail.com');
    expect(internTest.school).toBe('FSU');
});

//TEST INTERN METHODS //

test('test if getSchool() returns school', () => {
    expect(internTest.getSchool()).toBe('FSU');
});

test('test if getRole() returns the role', () => {
    expect(internTest.getRole()).toBe('Intern');
});

