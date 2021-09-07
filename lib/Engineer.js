//import Employee //
const Employee = require('./employee');

//ENGINEER CONSTRUCTOR INHERITS EMPLOYEE //
class Engineer extends Employee {

    //ENGINEER CONSTRUCTOR //
    constructor(name, id, email, github) {
        //call Employee constructor //
        super(name, id, email);
        //add github to engineer constructor //
        this.github = github;
    };

    //ENGINEER METHODS //
    getGithub() {
        return this.github;
    };
    getRole() {
        return 'Engineer';
    };
};

module.exports = Engineer;