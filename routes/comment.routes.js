import commentsController from "../controllers/comment.controller.js"
import Auth from "../middlewares/checkUser.middleware.js"
import { Router } from "express";
let route = Router()

route.post("/reviews/:courseId", Auth.checkUser, commentsController.POST)
route.get("/reviews/course/:courseId", commentsController.GET_BY_ID)
route.put("/reviews/:id", Auth.checkUser, commentsController.UPDATE)
route.delete("/reviews/:id", Auth.checkUser, commentsController.DELETE)

export default route