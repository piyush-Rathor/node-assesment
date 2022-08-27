import { Router } from "express";

import * as blogControllers from "../controllers/blog.controller.js";
const routes = Router();

routes.get("/", blogControllers.getPosts);

routes.get("/:id", blogControllers.getPost);

routes.post("/", blogControllers.createPost);

export default routes;
