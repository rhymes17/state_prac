import React from "react";
import TodoItem from "../components/TodoItem";

const Todo = () => {
  const todoItem = {
    id: 1,
    todo: "Do something nice for someone I care about",
    completed: true,
    userId: 26,
    priority: "High",
  };

  return (
    <div className="my-5 h-[55vh] overflow-y-scroll no-scrollbar flex flex-col gap-8 w-[90%] mx-auto">
      <TodoItem todoItem={todoItem} />
      <TodoItem todoItem={todoItem} />
      <TodoItem todoItem={todoItem} />
    </div>
  );
};

export default Todo;
