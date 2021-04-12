import { body } from "express-validator";

const schema = [
  body("email")
    .isEmail()
    .withMessage("digite um email válido."),
  body("password")
    .isLength({ min: 3 })
    .withMessage("senha deve ter pelo menos 3 caracteres"),
];

export { schema as userSchema };
