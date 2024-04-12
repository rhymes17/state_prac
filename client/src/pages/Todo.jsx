import React from "react";
import TodoItem from "../components/TodoItem";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import {
  addAllTodos,
  filterVisibleTodos,
  getAllTodos,
  getAllVisibleTodos,
} from "../slices/todoSlice";

const Todo = () => {
  const BASE_URL = "http://localhost:8000/api/todo";

  const dispatch = useDispatch();

  const todos = useSelector(getAllVisibleTodos);

  const getTodos = async () => {
    try {
      const res = await axios.get(`${BASE_URL}`);
      const todos = res.data.data;
      dispatch(addAllTodos(todos));
      dispatch(filterVisibleTodos());
      return todos;
    } catch (error) {
      return error;
    }
  };

  const {
    data: todoItems,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["todos"],
    queryFn: getTodos,
    staleTime: 60 * 1000,
  });

  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  if (error) {
    return <h1>Error....</h1>;
  }

  return (
    <div className="my-5 h-[65vh] overflow-y-scroll no-scrollbar flex flex-col gap-8 w-[90%] mx-auto">
      {todos?.map((todoItem) => (
        <TodoItem key={todoItem._id} todoItem={todoItem} />
      ))}
    </div>
  );
};

export default Todo;
