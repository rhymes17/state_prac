import { useMutation, useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import React from "react";
import { FaRegCircle } from "react-icons/fa";
import { GoCheckCircleFill } from "react-icons/go";

const TodoItem = ({ todoItem }) => {
  const { _id: id, userId, todo, completed, priority } = todoItem;

  const BASE_URL = "http://localhost:8000/api/todo";

  const queryClient = useQueryClient();

  const markTodoCompletedCall = async (todoId) => {
    try {
      const res = await axios.patch(`${BASE_URL}/markCompleted/${todoId}`);
      return res;
    } catch (error) {
      return error.message;
    }
  };

  const { mutate } = useMutation({
    mutationFn: markTodoCompletedCall,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["todos"] });
    },
  });

  const markAsCompletedFn = (todoId) => {
    mutate(todoId);
  };

  return (
    <div className="flex justify-between w-[90%] mx-auto items-center">
      <div className="cursor-pointer">
        {completed === true ? (
          <GoCheckCircleFill className="" />
        ) : (
          <FaRegCircle onClick={() => markAsCompletedFn(id)} className="" />
        )}
      </div>

      <div className="border-2 text-white bg-red-500 rounded-md flex-1 mx-2 flex h-full  p-2">
        <h1 className="text-[0.7rem] font-semibold">{todo}</h1>
      </div>
    </div>
  );
};

export default TodoItem;
