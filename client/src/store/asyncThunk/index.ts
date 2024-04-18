import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { PRODUCTS_URL } from "../../constants";

export const getProducts = createAsyncThunk("getProducts", async() => {
    try {
        const res = await axios.get(`${PRODUCTS_URL}/`);
        return res.data        
    } catch (error) {
        return (error as Error).message
    }
})

