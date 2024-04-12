import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    allTodos: [],
    singleTodo : {},
    visibleTodos: []
}

const todoSlice = createSlice({
    name : "todo",
    initialState,
    reducers: {
        addAllTodos: (state, action) => {
            state.allTodos = action.payload
        },
        filterVisibleTodos: (state) => {
            const todos = state.allTodos.filter((todo) => todo.completed === false)
            state.visibleTodos = todos
        }
    }
})

export const getAllVisibleTodos = (state) => state.todo.visibleTodos
export const getAllTodos = (state) => state.todo.allTodos
export const getSingleTodo = (state) => state.todo.singleTodo

export const {addAllTodos, filterVisibleTodos} = todoSlice.actions

export default todoSlice.reducer