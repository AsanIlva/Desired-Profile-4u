const Employee = require('./Employee');

module.exports = class Intern extends Employee {
    constructor(name , email, school) {
        super(name, email);
        this._school = school;
    }
     
    getSchool() {
        return this._school;
    }

    easy() {
        return `
        <div class="card">
        <h5 class="card-header"> ${this._name} Intern</h5>
        <div class="card-body">
          <ul class="list-group list-group-flush">
            <li class="list-group-item">ID: ${this._id} </li>
            <li class="list-group-item">Email: ${this._email} </li>
            <li class="list-group-item">School: ${this._school} </li>
          </ul>
        </div>
        </div>
        `;
    }

};