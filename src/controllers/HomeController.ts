import {Request, Response} from 'express';

class HomeController{

    async index(req: Request, res: Response){
        return res.json({msg: "Welcome to NodeJS Rest API base"});
    }

}

export default new HomeController();