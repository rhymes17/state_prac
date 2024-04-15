import React, { useState } from "react";
import { addTodoMutate } from "../utils/queryFunctions";

const AddTodo = () => {
  const [todo, setTodo] = useState("");
  const [priority, setPriority] = useState("Low");

  const handleSubmitTodo = () => {
    const newTodo = {
      todo,
      priority,
    };
    addTodoMutate(newTodo);
  };

  return (
    <div className="my-5 h-[60vh] justify-center items-center flex flex-col gap-8 w-[90%] mx-auto">
      <div className="w-[80%] flex flex-col gap-5 py-5 px-3 rounded-xl shadow-2xl mx-auto border-2">
        <div className="flex flex-col gap-2">
          <h1>Todo : </h1>
          <input
            className="border-2 rounded-md px-2 py-2 outline-none"
            placeholder="Enter task"
            value={todo}
            onChange={(e) => setTodo(e.target.value)}
          />
        </div>

        <div className="flex flex-col gap-2">
          <h1>Priority : </h1>
          <select
            value={priority}
            onChange={(e) => setPriority(e.target.value)}
            className="border-2 rounded-md px-2 py-2 outline-none"
          >
            <option>High</option>
            <option>Medium</option>
            <option>Low</option>
          </select>
        </div>

        <div
          onClick={handleSubmitTodo}
          className="cursor-pointer w-[50%] h-[45px] mx-auto rounded-xl text-white bg-[#192028] justify-center items-center flex"
        >
          Submit
        </div>
      </div>
    </div>
  );
};

export default AddTodo;
