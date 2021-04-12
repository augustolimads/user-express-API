import express from "express";
import HomeController from "./controllers/HomeController";
import UserController from "./controllers/UserController";
import { userValidate } from "./middlewares/user-validate";
import { userSchema } from "./schema/user-schema";

const routes = express.Router();

routes.get('/', HomeController.index);
routes.post('/user', userSchema, userValidate, UserController.create)

export default routes;