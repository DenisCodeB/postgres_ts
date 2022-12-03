import express, { Request, Response, Router } from 'express'
import MethodsDB from '../reqToDB'

export interface IUserController {
    path: string
    router: Router
}

class UserController extends MethodsDB implements IUserController {
    public path = '/users'
    public router = express.Router()

    constructor() {
        super()
        this.initializeRoutes()
    }

    public initializeRoutes() {
        this.router.get(this.path, this.getUsers)
        // this.router.post(this.path, this.createUser)
    }

    // async createUser(req: Request, res: Response) {
    //     const { first_name, last_name } = req.body
    //     console.log(first_name, last_name)
    //     res.json('ok')
    // }
}

export default UserController