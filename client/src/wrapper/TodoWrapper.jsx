import React from "react";
import TodoContextProvider from "../context/TodoContext";
import Todo from "../pages/Todo";

const TodoWrapper = () => {
  return (
    <TodoContextProvider>
      <Todo />
    </TodoContextProvider>
  );
};

export default TodoWrapper;
