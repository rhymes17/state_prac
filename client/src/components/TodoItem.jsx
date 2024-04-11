import React from "react";
import { FaRegCircle } from "react-icons/fa";

const TodoItem = ({ todoItem }) => {
  const { id, userId, todo, completed, priority } = todoItem;

  return (
    <div className="flex justify-between w-[90%] mx-auto items-center">
      <div className="">
        <FaRegCircle className="" />
      </div>

      <div className="border-2 text-white bg-red-500 rounded-md flex-1 mx-2 flex h-full  p-2">
        <h1 className="text-[0.7rem] font-semibold">{todo}</h1>
      </div>
    </div>
  );
};

export default TodoItem;
