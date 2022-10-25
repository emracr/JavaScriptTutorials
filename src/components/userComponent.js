import { ElasticLogger, MongoLogger } from "../crossCuttingConcerns/logging/logger.js"
import User from "../models/user.js"
import UserService from "../services/userService.js"

console.log("User component yüklendi")

let user = new User(1, "Emrullah", "ACAR")
let loggerService = new ElasticLogger();

let userService = new UserService(loggerService)

userService.add(user)
console.log(userService.list())
console.log(userService.getById(1))

userService.load();
console.log(userService.customers)
console.log(userService.employees)
console.log(userService.errors)