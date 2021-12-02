 const shortid = require('shortid');
 
 module.exports = class Employee {
     constructor(name, email) {
         this._id = shortid.generate();
         this._name = name;
         this._email = email;
     }
     
     getId() {
         return this._id;
     }

     getName() {
         return this._name;
     }

     getEmail() {
         return this._email;
     }

     getRole() {
         return this.constructor.name;
     }
 };