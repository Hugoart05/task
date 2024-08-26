import { DataBase } from "../context/data-base.ts"
import AccountController from "../controller/AccountController.ts"
import UserMapper from "../mappers/UserMapper.ts"
import UserRepository from "../repository/impletations/UserRepository.ts"
import { TokenService } from "../services/token-service.ts"


const dbase = DataBase.getInstance()
const connection = await dbase.getConnection()
const userMapper = new UserMapper()
const userRepository = new UserRepository(connection, "usuarios")
const tokenService = new TokenService()
const accountController = new AccountController(userRepository, userMapper, tokenService)

export default accountController
