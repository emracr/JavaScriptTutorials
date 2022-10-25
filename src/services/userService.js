import { users } from "../data/users.js"
import DataError from "../models/dataError.js"

export default class UserService{

    constructor(loggerService){
        this.employees = []
        this.customers = []
        this.errors = []
        this.loggerService = loggerService
    }

    load(){
        for(let user of users){
            switch (user.type) {
                case "customer":
                    if(!this.checkCustomerValidityForErrors(user)){
                        this.customers.push(user)
                    }
                    break;
            
                case "employee":
                    if(!this.checkEmployeeValidityForErrors(user)){
                        this.employees.push(user)
                    }
                    break;

                default:
                    this.errors.push(new DataError("Wrong user type", user))
                    break;
            }
        }
    }

    checkCustomerValidityForErrors(user){
        let requiredFields = "id,firstName,lastName,age".split(",")
        let hassErrors = false;
        for (let field of requiredFields) {
            if(!user[field]){
                hassErrors = true
                this.errors.push(new DataError(`Validation problem. ${field} is required`, user))
            }
        }

        if(Number.isNaN(Number.parseInt(user.age))){
            hassErrors = true
            this.errors.push(new DataError(`Validation problem. ${user.age} is not a number`, user))
        }

        return hassErrors;
    }

    checkEmployeeValidityForErrors(user){
        let requiredFields = "id,firstName,lastName,age,salary".split(",")
        let hassErrors = false;
        for (let field of requiredFields) {
            if(!user[field]){
                hassErrors = true;
                this.errors.push(new DataError(`Validation problem. ${field} is required`, user))
            }
        }
        return hassErrors;
    }

    add(user){
        this.loggerService.log(user)
        //this.users.push(user)
    }

    list(){
        //return this.users
    }

    getById(id){
        //return this.users.find(u => u.id === id)
    }
}