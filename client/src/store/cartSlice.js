import { createSlice } from "@reduxjs/toolkit";
import { getProducts } from "./asyncThunk";

const initialState = localStorage.getItem("cart") ? JSON.parse(localStorage.getItem("cart")) : {
    isLoading: false,
    products: [],
    isError: false,
    errorMessage : ""
}

const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addToCart : (state, action) => {
            const {id} = action.payload
            const existingIndex = state.products.findIndex((pro) => pro.id === id)

            if(existingIndex !== -1){
                state.products[existingIndex].quantity += 1;
            }else{
                state.products.push(action.payload)
            }

            localStorage.setItem("cart", JSON.stringify(state))
        },
        incrementQuantity: (state, action) => {
            const id = action.payload

            const existingIndex = state.products.findIndex((pro) => pro.id === id)

            if(existingIndex !== -1){
                state.products[existingIndex].quantity += 1;
                localStorage.setItem("cart", JSON.stringify(state))
            }
        },
        decrementQuantity: (state, action) => {
            const id = action.payload

            const existingIndex = state.products.findIndex((pro) => pro.id === id)

            if(existingIndex !== -1){
                if(state.products[existingIndex].quantity > 1){
                    state.products[existingIndex].quantity -= 1;

                    localStorage.setItem("cart", JSON.stringify(state))
                }
                else{
                    state.products = state.products.filter((pro) => pro.id !== id)
                    localStorage.setItem("cart", JSON.stringify(state))
                    return state;
                }
            }
        },
        resetCart : (state) => {
            state.isLoading = false;
            state.isError = false;
            state.products = [];
            state.errorMessage = ""
            
            localStorage.removeItem("cart")
        
        }
    },
    extraReducers: (builder) => {
        builder.addCase(getProducts.pending, (state, action) => {
            state.isLoading = true;
            state.isError = false;
            state.errorMessage = ""
        })
        .addCase(getProducts.fulfilled, (state, action) => {
            state.isLoading = false;
            state.products = action.payload
            state.isError = false;
            state.errorMessage = ""
        })
        .addCase(getProducts.rejected, (state, action) => {
            state.isLoading = false;
            state.isError = true;
            state.errorMessage = action.payload
        })
    }
})

export const getAllItems = (state) => state.cart

export const {addToCart, decrementQuantity, incrementQuantity, resetCart} = cartSlice.actions
export default cartSlice.reducer