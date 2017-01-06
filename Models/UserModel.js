/**
 * Created by JoeShepherd on 1/5/17.
 */
'use strict'

class UserModel {

  Constructor(firstName, lastName, email, mobilePhone) {
    this.firstname = firstName;
    this.lastname = lastName;
    this.email = email;
    this.mobilephone = mobilePhone;
  }

  // Example of a class property with a getter
  // let result = model.fullNameProperty;
  get fullNameProperty() {
    return `(${this.firstname}, ${this.lastname})`;
  }

  // Example of a class function
  // let result = model.fullName();
  fullName() {
    return `${this.firstname}, ${this.lastname}`
  }

}

module.exports = UserModel;