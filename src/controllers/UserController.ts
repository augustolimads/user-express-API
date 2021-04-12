import {Request, Response} from 'express';
import {body, validationResult} from 'express-validator';

class UserController{

    async index(req: Request, res: Response){}

    async create(req: Request, res: Response){
        const {name, email, password} = req.body;

        res.status(201).send("oioioi create User")
    }

}

export default new UserController();