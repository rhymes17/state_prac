import axios from "axios"
import { BASE_URL, PRODUCTS_URL } from "../../constants"
import { TodoProps } from "../../propTypes";

const addTodo = async(newTodo : TodoProps) => {
    try {
        const res = await axios.post(`${BASE_URL}/`, newTodo)
        return res.data;
    } catch (error) {
        return (error as Error).message
    }
}

const getAllProducts = async() => {
    try {
        const res = await axios.get(`${PRODUCTS_URL}/`)
        // console.log(res)
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

export {addTodo, getAllProducts, markTodoCompletedCall}