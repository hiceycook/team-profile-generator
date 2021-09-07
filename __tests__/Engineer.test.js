const Engineer = require('../lib/engineer');

// TEST FOR A NEW ENGINEER //
const engineerTest = new Engineer('Austin', '01', 'hiceycook@gmail.com', 'hiceycook');

test('to get values from constructor object', () => {
    expect(engineerTest.name).toBe('Austin');
    expect(engineerTest.id).toBe('01');
    expect(engineerTest.email).toBe('hiceycook@gmail.com');
    expect(engineerTest.github).toBe('hiceycook');
});

//TEST ENGINEER METHODS //

test('test if getGithub() returns github username', () => {
    expect(engineerTest.getGithub()).toBe('hiceycook');
});

test('test if getRole() returns the role', () => {
    expect(engineerTest.getRole()).toBe('Engineer');
});

