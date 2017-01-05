/**
 * Created by JoeShepherd on 1/5/17.
 */
'use strict'
class UserModel{

    Constructor(firstName, lastName, email, mobilePhone){
        this.firstname = firstName;
        this.lastname = lastName;
        this.email = email;
        this.mobilephone = mobilePhone;
    }

    FullName(){
        return `(${this.firstName}, ${this.lastName})`
    }
}

module.exports = UserModel;