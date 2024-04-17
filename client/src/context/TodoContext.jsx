import { createContext, useState } from "react";

export const TodoContext = createContext(null);

const TodoContextProvider = ({ children }) => {
  const [allTodos, setAllTodos] = useState([]);
  const [visibleTodos, setVisibleTodos] = useState([]);

  const addAllTodos = (todos) => {
    setAllTodos(todos);
    // console.log(allTodos);
  };

  const filterVisibleTodos = () => {
    const todos = allTodos?.filter((todo) => todo.completed === false);
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
