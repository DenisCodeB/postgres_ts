import bodyParser from 'body-parser'
import express, { Application, Request, Response } from 'express'
import IUserController from './controller/user.controller'

interface IApp {
    app: Application
    port: number
    listen: () => void
}

class App implements IApp {
    public app: express.Application
    public port: number

    constructor(controllers: IUserController[], port: number) {
        this.app = express()
        this.port = port

        this.initializeMiddlewares()
        this.initializeControllers(controllers)
    }

    private initializeMiddlewares() {
        this.app.use(bodyParser.json())
    }

    private initializeControllers(controllers: IUserController[]) {
        controllers.forEach((controller) => {
            this.app.use('/api', controller.router)
            this.app.get('/', (req: Request, res: Response) => {
                res.send('NodeJS + Express + PostgreSQL')
            })
        })
    }

    public listen() {
        this.app.listen(this.port, () => {
            console.log(`[⚡ server] server is running n the port ${this.port}`)
        })
    }
}

export default App