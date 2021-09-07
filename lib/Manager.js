//import Employee //
const Employee = require('./employee');

//Intern CONSTRUCTOR INHERITS EMPLOYEE //
class Manager extends Employee {

    //ManagerCONSTRUCTOR //
    constructor(name, id, email, github) {
        //call Employee constructor //
        super(name, id, email);
        //add school to intern constructor //
        this.officeNo = officeNo;
    };

    //Manager METHODS //
    getOfficeNo() {
        return this.officeNo;
    };
    getRole() {
        return 'Manager';
    };
};

module.exports = Manager;