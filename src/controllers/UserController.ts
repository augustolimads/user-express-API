import {Request, Response} from 'express';
import User from '../models/User';

class UserController{

    async index(req: Request, res: Response){}

    async create(req: Request, res: Response){
        const {email, password, name} = req.body;

        await User.new(email, password, name);

        res.status(201).send("usuário cadastrado com sucesso!")
    }

}

export default new UserController();