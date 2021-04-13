import { Request, Response } from "express";
import User from "../models/User";

class UserController {
  async index(req: Request, res: Response) {
    const listUsers = await User.findAllUsers();

    res.json(listUsers);
  }

  async findUser(req: Request, res: Response) {
    let id = parseInt(req.params.id);

    const user = await User.findUserById(id);
    if (user === undefined) {
      res.status(404).json({ msg: "nada encontrado" });
    } else {
      res.json(user);
    }
  }

  async create(req: Request, res: Response) {
    const { email, password, name } = req.body;

    await User.new(email, password, name);

    res.status(201).json({msg:"usuário cadastrado com sucesso!"});
  }

  async update(req: Request, res: Response) {
    const { id, email, name, role } = req.body;

    const result = await User.updateUser(id, email, name, role);

    if (result) {
      return res.json({msg: "usuário atualizado com sucesso!"});
    } else {
      return res.status(404).json({msg: "falha na atualização"});
    }
  }
}

export default new UserController();
