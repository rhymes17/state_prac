import axios from "axios"
import { BASE_URL } from "../../constants"

type newTodo = {
  todo : string,
  priority : string
}

const addTodo = async(newTodo : newTodo) => {
    try {
        const res = await axios.post(`${BASE_URL}/`, newTodo)
        return res.data;
    } catch (error) {
        return (error as Error).message
    }
}

const markTodoCompletedCall = async (todoId : number) => {
    try {
      const res = await axios.patch(`${BASE_URL}/${todoId}`);
      return res;
    } catch (error) {
      return (error as Error).message;
    }
  };

export {addTodo, markTodoCompletedCall}