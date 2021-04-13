import express from "express";
import HomeController from "./controllers/HomeController";
import UserController from "./controllers/UserController";
import { validate } from "./middlewares/validate";
import { createUserSchema } from "./schema/createUserSchema";
import { editUserSchema } from "./schema/editUserSchema";

const routes = express.Router();

routes.get("/", HomeController.index);
routes.get("/user", UserController.index);
routes.get("/user/:id", UserController.findUser);
routes.post("/user", createUserSchema, validate, UserController.create);
routes.put("/user", editUserSchema, validate, UserController.update);

export default routes;
