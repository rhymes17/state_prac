import { ActionReducerMapBuilder, PayloadAction, createSlice } from "@reduxjs/toolkit";
import { ThunkProducts } from "../types";
import { getProducts } from "./asyncThunk";
import { RootState } from "./store";

type ProductState = {
    isLoading: boolean,
    products: ThunkProducts,
    isError : boolean,
    errorMessage : string,
}

const initialState : ProductState = {
    isLoading : false,
    products: {
        products : [],
        total: 0,
        skip: 0,
        limit: 0
    },
    isError : false,
    errorMessage : ""
}

const productSlice = createSlice({
    name : "product",
    initialState,
    reducers: {

    },
    extraReducers: (builder : ActionReducerMapBuilder<ProductState>) => {
        builder.addCase(getProducts.pending, (state : ProductState) => {
            state.isLoading = true;
            state.isError = false;
        })
        .addCase(getProducts.fulfilled, (state : ProductState, action : PayloadAction<ThunkProducts>)=>{
            state.isLoading = false;
            state.products = action.payload;
            state.isError = false;
        })
        .addCase(getProducts.rejected, (state, action?: PayloadAction<string | undefined>) => {
            state.isLoading = false;
            state.isError = true;
            state.errorMessage = action?.payload || "An unknown error occurred"
        })
    }
})

export const getAllProducts = (state : RootState) => state.products

export default productSlice.reducer