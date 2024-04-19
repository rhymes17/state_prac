import React, { createContext, useState } from "react";
import {ITodo} from "../types";
// TODO :  TodoContextProps research //

interface ITodoContext  {
  allTodos : ITodo[],
  visibleTodos : ITodo[],
  addAllTodos : (todos: ITodo[]) => void,
  filterVisibleTodos : () => void,
}

export const TodoContext = createContext<ITodoContext>(
  {
    allTodos : [],
    visibleTodos : [],
    addAllTodos : () => {},
    filterVisibleTodos : () => {}
  }
);

const TodoContextProvider = ({ children } : {children : React.ReactNode}) => {
  const [allTodos, setAllTodos] = useState<ITodo[]>([]);
  const [visibleTodos, setVisibleTodos] = useState<ITodo[]>([]);

  const addAllTodos = (todos : ITodo[]) => {
    setAllTodos(todos);
  };

  const filterVisibleTodos = () => {
    const todos : ITodo[] = allTodos?.filter((todo : ITodo) => todo.completed === false);
    // console.log(todos);
    setVisibleTodos(todos);
  };

  return (
    <TodoContext.Provider
      value={{ allTodos, visibleTodos, addAllTodos, filterVisibleTodos }}
    >
      {children}
    </TodoContext.Provider>
  );
};

export default TodoContextProvider;
