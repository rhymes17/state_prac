import express from "express"
import { createTodo, getAllTodos, markCompleted } from "../controllers/todoControllers.js"

const router = express.Router()

router.get("/", getAllTodos)
router.post("/createTodo", createTodo)
router.patch("/markCompleted/:id", markCompleted)

export default router