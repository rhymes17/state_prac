import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { PRODUCTS_URL } from "../../constants";
import { ThunkProducts } from "../../types";

export const getProducts = createAsyncThunk<ThunkProducts, void, {rejectValue : string}>("getProducts", async(_,thunkAPI) => {
    try {
        const res = await axios.get<ThunkProducts>(`${PRODUCTS_URL}/`);
        if (!res?.data) {
            throw new Error("Somethiong went wrong");
        }
        return res.data        
    } catch (error : any) {
        let message: string = "Somethiong went wrong";
        if (error) {
            message  = (error.response && error.response.data && error.response.data.message || error.message || error.toString());
        }
        return thunkAPI.rejectWithValue(message || "Somethiong went wrong");
    }
})

