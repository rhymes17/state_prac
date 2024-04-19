"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.markCompleted = exports.createTodo = exports.getAllTodos = void 0;
const express_async_handler_1 = __importDefault(require("express-async-handler"));
const todoModel_1 = require("../models/todoModel");
// @desc    Get all todos
// @route   GET "/api/todo/"
const getAllTodos = (0, express_async_handler_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const getTodos = yield todoModel_1.Todo.find().sort({ createdAt: -1 });
    if (getTodos) {
        res.status(201).json({ message: "All todos fetched", data: getTodos });
    }
    else {
        res.status(500).json({ error: "Server error" });
    }
}));
exports.getAllTodos = getAllTodos;
// @desc    Create a new todo
// @route   POST "/api/todo/"
const createTodo = (0, express_async_handler_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { todo, priority } = req.body;
    if (!todo) {
        res.status(400).json({ error: "All fields are required!" });
        return;
    }
    const newTodo = yield todoModel_1.Todo.create({
        todo,
        priority
    });
    if (newTodo) {
        res.status(201).json({ message: "New todo created", data: newTodo });
    }
    else {
        res.status(500).json({ error: "Server error" });
    }
}));
exports.createTodo = createTodo;
// @desc    Mark as complete
// @route   PATCH "/api/todo/:id"
const markCompleted = (0, express_async_handler_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const exisitingTodo = yield todoModel_1.Todo.findById(id);
    if (!exisitingTodo) {
        res.status(400).json({ error: "Todo does not exists!" });
        return;
    }
    if (exisitingTodo.completed) {
        res.status(300).json({ error: "Already completed!" });
        return;
    }
    const newTodo = yield todoModel_1.Todo.findByIdAndUpdate(id, {
        $set: {
            completed: true
        }
    });
    if (newTodo) {
        res.status(200).json({ message: "Todo completed Successfully!", data: newTodo });
    }
    else {
        res.status(500).json({ error: "Server error" });
    }
}));
exports.markCompleted = markCompleted;
