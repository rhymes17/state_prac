import express from "express"
import { createTodo, getAllTodos, markCompleted } from "../controllers/todoControllers.js"

const router = express.Router()

router.get("/", getAllTodos)
router.post("/", createTodo)
router.patch("/:id", markCompleted)

export default router