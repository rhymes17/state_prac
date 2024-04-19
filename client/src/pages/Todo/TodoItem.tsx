import { useMutation, useQueryClient } from "@tanstack/react-query";
import { FaRegCircle } from "react-icons/fa";
import { GoCheckCircleFill } from "react-icons/go";
import { markTodoCompletedCall } from "../../utils/api";
import { ITodo } from "../../types";

const TodoItem = ({ todoItem  }: {todoItem : ITodo}) => {
  const { _id: id, todo, completed } = todoItem;

  const queryClient = useQueryClient();

  const { mutate } = useMutation({
    mutationFn: markTodoCompletedCall,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["todos"] });
    },
  });

  const markAsCompletedFn = (todoId : number) => {
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
