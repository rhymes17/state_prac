import { createContext, useState } from "react";
import { TodoProps, ChildrenProps, TodoContextProps } from "../propTypes";

// TODO :  TodoContextProps research //

export const TodoContext = createContext<null | TodoContextProps>(null);

const TodoContextProvider = ({ children } : ChildrenProps) => {
  const [allTodos, setAllTodos] = useState<TodoProps[]>([]);
  const [visibleTodos, setVisibleTodos] = useState<TodoProps[]>([]);

  const addAllTodos = (todos : TodoProps[]) => {
    setAllTodos(todos);
    // console.log(allTodos);
  };

  const filterVisibleTodos = () => {
    const todos : TodoProps[] = allTodos?.filter((todo : TodoProps) => todo.completed === false);
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
