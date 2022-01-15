const Employee = require('./Employee');

class Manager extends Employee{
    constructor(name,id,email,officeNumber){
        super(name, id, email);
        this.Number = officeNumber;
    }
    getRole() {
        return `Manager`;
    }
    getofficeNumber(){
        return this.Number;
    }
}
module.exports = Manager;  