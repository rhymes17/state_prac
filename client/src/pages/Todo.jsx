import React from "react";
import TodoItem from "../components/TodoItem";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const Todo = () => {
  const BASE_URL = "http://localhost:8000/api/todo";

  const getTodos = async () => {
    try {
      const res = await axios.get(`${BASE_URL}`);
      return res.data.data;
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
  });

  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  if (error) {
    return <h1>Error....</h1>;
  }

  return (
    <div className="my-5 h-[55vh] overflow-y-scroll no-scrollbar flex flex-col gap-8 w-[90%] mx-auto">
      {todoItems?.map((todoItem) => (
        <TodoItem key={todoItem._id} todoItem={todoItem} />
      ))}
    </div>
  );
};

export default Todo;
