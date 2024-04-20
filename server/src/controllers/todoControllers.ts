import asyncHandler from "express-async-handler"
import { Todo } from "../models/todoModel"
import {Request, Response} from "express"

// @desc    Get all todos
// @route   GET "/api/todo/"
const getAllTodos = asyncHandler(async (req : Request, res : Response) : Promise<void> => {
    const getTodos = await Todo.find().sort({ createdAt : -1 })

    if(getTodos){
        res.status(201).json({message: "All todos fetched", data: getTodos})
    }else{
        res.status(500).json({error : "Server error"})
    }
})

// @desc    Create a new todo
// @route   POST "/api/todo/"
const createTodo = asyncHandler(async (req : Request, res : Response) => {
    
    const {todo, priority} : {todo: string, priority : string} = req.body

    if(!todo){
        res.status(400).json({error: "All fields are required!"})
        return;
    }

    const newTodo = await Todo.create({
        todo,
        priority
    })

    if(newTodo){
        res.status(201).json({message: "New todo created", data: newTodo})
    }else{
        res.status(500).json({error : "Server error"})
    }
})

// @desc    Mark as complete
// @route   PATCH "/api/todo/:id"
const markCompleted = asyncHandler(async (req : Request, res : Response) => {
    const {id} = req.params

    const exisitingTodo = await Todo.findById(id)
 
    if(!exisitingTodo){
        res.status(400).json({error: "Todo does not exists!"})
        return;
    }

    if(exisitingTodo.completed){
        res.status(300).json({error: "Already completed!"})
        return;
    }

    const newTodo = await Todo.findByIdAndUpdate(id, {
        $set : {
            completed: true
        }
    })

    if(newTodo){
        res.status(200).json({message: "Todo completed Successfully!", data: newTodo})
    }else{
        res.status(500).json({error : "Server error"})
    }
})

export  {getAllTodos, createTodo, markCompleted}