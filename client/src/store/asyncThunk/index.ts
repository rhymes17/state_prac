import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { PRODUCTS_URL } from "../../constants";
import { ThunkProducts } from "../../types";

export const getProducts : any = createAsyncThunk("getProducts", async(thunkAPI) => {
    try {
        const res= await axios.get<ThunkProducts>(`${PRODUCTS_URL}/`);
        return res.data        
    } catch (error : any) {
        const message : string = (error.response && error.response.data && error.response.data.message || error.message || error.toString())
        return thunkAPI.rejectWithValue(message);
    }
})

