import { createSlice } from "@reduxjs/toolkit";

const initialState = localStorage.getItem("cart") ? JSON.parse(localStorage.getItem("cart")) : []

const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addToCart : (state, action) => {
            const {id} = action.payload
            const existingIndex = state.findIndex((pro) => pro.id === id)

            if(existingIndex !== -1){
                state[existingIndex].quantity += 1;
            }else{
                state.push(action.payload)
            }

            localStorage.setItem("cart", JSON.stringify(state))
        },
        incrementQuantity: (state, action) => {
            const id = action.payload

            const existingIndex = state.findIndex((pro) => pro.id === id)

            if(existingIndex !== -1){
                state[existingIndex].quantity += 1;
                localStorage.setItem("cart", JSON.stringify(state))
            }
        },
        decrementQuantity: (state, action) => {
            const id = action.payload

            const existingIndex = state.findIndex((pro) => pro.id === id)

            if(existingIndex !== -1){
                if(state[existingIndex].quantity > 1){
                    state[existingIndex].quantity -= 1;

                    localStorage.setItem("cart", JSON.stringify(state))
                }
                else{
                    state = state.filter((pro) => pro.id !== id)
                    localStorage.setItem("cart", state)
                    return state;
                }
            }
        },
        resetCart : (state) => {
            state = []
            localStorage.removeItem("cart")
            return state
        }
    }
})

export const getAllItems = (state) => state.cart

export const {addToCart, decrementQuantity, incrementQuantity, resetCart} = cartSlice.actions
export default cartSlice.reducer