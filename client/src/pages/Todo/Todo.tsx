import React, { useContext, useEffect } from "react";
import TodoItem from "./TodoItem";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

import { MdOutlineAddBox } from "react-icons/md";
import { Link } from "react-router-dom";
import { TodoContext } from "../../context/TodoContext";
import HeroWrapper from "../../layout/HeroWrapper";
import { BASE_URL } from "../../constants";
import { TodoProps } from "../../propTypes";

const Todo = () => {
  const {
    allTodos,
    visibleTodos: todos,
    filterVisibleTodos,
    addAllTodos,
  } = useContext(TodoContext);

  const getTodos = async () => {
    try {
      const res = await axios.get(`${BASE_URL}`);
      const todos : TodoProps[] = res.data.data;
      addAllTodos(todos);
      return todos;
    } catch (error) {
      return error;
    }
  };

  useEffect(() => {
    filterVisibleTodos();
  }, [allTodos]);

  const {
    data: todoItems,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["todos"],
    queryFn: getTodos,
    // staleTime: 60 * 1000,
  });

  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  if (error) {
    return <h1>Error....</h1>;
  }

  return (
    <div className="my-5 flex flex-col gap-3 w-[90%] mx-auto">
      <Link
        to="/addTodo"
        className="w-[60%] bg-[#192028] text-white rounded-lg gap-2 mx-auto border-[1px] border-black flex justify-center items-center py-2"
      >
        <MdOutlineAddBox className="text-2xl" />
        <h1 className="font-[450]">Create a new Todo</h1>
      </Link>

      {todos.length === 0 ? (
        <h1>No todos yet, Kindly create new.</h1>
      ) : (
        <HeroWrapper height={58} gap={3}>
          {todos?.map((todoItem) => (
            <TodoItem key={todoItem._id} todoItem={todoItem} />
          ))}
        </HeroWrapper>
      )}
    </div>
  );
};

export default Todo;
