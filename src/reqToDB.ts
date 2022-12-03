import { Request, Response } from 'express'
import { pool } from './poolDB'

class MethodsDB {
    async getUsers(req: Request, res: Response) {
        await pool.query('SELECT * FROM person', (err, data) => {
            if (err) {
                throw err
            }
            res.status(200).json(data.rows)
        })
    }

    // async createUser(req: Request, res: Response) {
    //     await pool.query('')
    // }
}
export default MethodsDB 