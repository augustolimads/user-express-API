import { body } from "express-validator";
import User from "../models/User";

const schema = [
  body("email").isEmail().withMessage("digite um email válido."),
  body("email").custom((value) => {
    return User.findUserByEmail(value).then((user) => {
      if (user) {
        return Promise.reject("Email já cadastrado no sistema.");
      }
    });
  }),
  body("password")
    .isLength({ min: 3 })
    .withMessage("senha deve ter pelo menos 3 caracteres"),
];

export { schema as createUserSchema };
