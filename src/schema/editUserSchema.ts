import { body } from "express-validator";
import User from "../models/User";

const schema = [
  body("id").isEmpty().withMessage("id não encontrado"),
  body("id").custom((value) => {
    return User.findUserById(value).then((user) => {
      if (!user) {
        return Promise.reject("Usuário não encontrado.");
      }
    });
  }),
  body("email").isEmail().withMessage("digite um email válido."),
  body("email").custom((value) => {
    return User.findUserByEmail(value).then((user) => {
      if (user) {
        return Promise.reject("Email já cadastrado no sistema.");
      }
    });
  })
];

export { schema as editUserSchema };
