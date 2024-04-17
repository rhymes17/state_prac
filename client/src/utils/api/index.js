import axios from "axios"
import { BASE_URL, PRODUCTS_URL } from "../../constants"

const addTodo = async(newTodo) => {
    try {
        const res = await axios.post(`${BASE_URL}/`, newTodo)
        return res.data;
    } catch (error) {
        return error.message
    }
}

const getAllProducts = async() => {
    try {
        const res = await axios.get(`${PRODUCTS_URL}/`)
        // console.log(res)
        return res.data;
    } catch (error) {
        return error.message
    }
}

const markTodoCompletedCall = async (todoId) => {
    try {
      const res = await axios.patch(`${BASE_URL}/${todoId}`);
      return res;
    } catch (error) {
      return error.message;
    }
  };

export {addTodo, getAllProducts, markTodoCompletedCall}