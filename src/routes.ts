import express from "express";
import HomeController from "./controllers/HomeController";

const routes = express.Router();

routes.get('/', HomeController.index);

export default routes;