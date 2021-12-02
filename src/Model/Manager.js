const Employee = require('./Employee')

module.exports = class Manager extends Employee {
    constructor(name , email, roomNumber) {
        super(name, email);
        this._roomNumber = roomNumber;
    }
     
    getRoomNumber() {
        return this._roomNumber;
    }

    easy() {
        return `
        <div class="card">
        <h5 class="card-header"> ${this._name} Manager</h5>
        <div class="card-body">
          <ul class="list-group list-group-flush">
            <li class="list-group-item">ID: ${this._id} </li>
            <li class="list-group-item">Email: ${this._email} </li>
            <li class="list-group-item">Room Number: ${this._roomNumber} </li>
          </ul>
        </div>
        </div>
        `;
    }

};