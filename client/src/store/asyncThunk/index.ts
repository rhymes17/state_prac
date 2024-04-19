import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { PRODUCTS_URL } from "../../constants";
import { IProduct } from "../../types";

export const getProducts = createAsyncThunk("getProducts", async() => {
    try {
        const res= await axios.get<IProduct[]>(`${PRODUCTS_URL}/`);
        
        return res.data        
    } catch (error) {
        return ((error as Error).message)
    }
})

