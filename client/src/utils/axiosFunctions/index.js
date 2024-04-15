import axios from "axios"
import { BASE_URL, PRODUCTS_URL } from "../../constants"

const addTodo = async(newTodo) => {
    try {
        const res = axios.post(`${BASE_URL}/`, newTodo)
        return res;
    } catch (error) {
        return error.message
    }
}

export {addTodo}