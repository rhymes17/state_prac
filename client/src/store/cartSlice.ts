import {  PayloadAction, createSlice } from "@reduxjs/toolkit";
import { CartProduct } from "../types";
import { RootState } from "./store";

type ReduxState = {
    isLoading : boolean,
    products : CartProduct[]
    isError : boolean,
    errorMessage : string | null,
}

const initialState : ReduxState = localStorage.getItem("cart") ? JSON.parse(localStorage.getItem("cart")!) : {
    isLoading: false,
    products: [],
    isError: false,
    errorMessage : ""
}

const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addToCart : (state : ReduxState, action : PayloadAction<CartProduct>) => {
            const {id} = action.payload
            const existingIndex = state.products.findIndex((pro : CartProduct) => pro.id === id)
            
            if(existingIndex !== -1){
                console.log("add");
                state.products[existingIndex].quantity += 1;
            }else{
                state.products.push(action.payload)
            }

            localStorage.setItem("cart", JSON.stringify(state))
        },
        incrementQuantity: (state : ReduxState, action : PayloadAction<number>) => {
            const id = action.payload

            const existingIndex = state.products.findIndex((pro : CartProduct) => pro.id === id)

            if(existingIndex !== -1){
                state.products[existingIndex].quantity += 1;
                localStorage.setItem("cart", JSON.stringify(state))
            }
        },
        decrementQuantity: (state : ReduxState, action : PayloadAction<number>) => {
            const id = action.payload

            const existingIndex = state.products.findIndex((pro : CartProduct) => pro.id === id)

            if(existingIndex !== -1){
                if(state.products[existingIndex].quantity > 1){
                    state.products[existingIndex].quantity -= 1;

                    localStorage.setItem("cart", JSON.stringify(state))
                }
                else{
                    state.products = state.products.filter((pro : CartProduct) => pro.id !== id)
                    localStorage.setItem("cart", JSON.stringify(state))
                    return state;
                }
            }
        },
        resetCart : (state) => {
            state = {isLoading : false, isError : false, errorMessage : "", products : []}
            localStorage.removeItem("cart")
            return state
        }
    },
})

export const getAllItems = (state : RootState) => state.cart

export const {addToCart, decrementQuantity, incrementQuantity, resetCart} = cartSlice.actions
export default cartSlice.reducer