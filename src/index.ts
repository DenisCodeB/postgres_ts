import UserController from './controller/user.controller'
import App from './app'
import dotenv from 'dotenv'

dotenv.config()

const { PORT } = process.env

const app = new App(
    [
        new UserController()
    ],
    Number(PORT),
)

app.listen()