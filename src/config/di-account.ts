import AccountController from "../controller/AccountController";
import UserRepository from "../repository/impletations/UserRepository";


const userRepository = new UserRepository()
const accountController = new AccountController(userRepository)

export default accountController