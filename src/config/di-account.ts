import { error } from "console";
import { DataBase } from "../context/data-base";
import AccountController from "../controller/AccountController";
import UserRepository from "../repository/impletations/UserRepository";

const dbase = DataBase.getInstance()
const connection = dbase.getConnection()
const userRepository = new UserRepository(connection, "usuarios")
const accountController = new AccountController(userRepository)

export default accountController
