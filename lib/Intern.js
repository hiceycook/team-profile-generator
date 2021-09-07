//import Employee //
const Employee = require('./employee');

//Intern CONSTRUCTOR INHERITS EMPLOYEE //
class Intern extends Employee {

    //Intern CONSTRUCTOR //
    constructor(name, id, email, school) {
        //call Employee constructor //
        super(name, id, email);
        //add school to intern constructor //
        this.school = school;
    };

    //Intern METHODS //
    getSchool() {
        return this.school;
    };
    getRole() {
        return 'Intern';
    };
};

module.exports = Intern;