import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

axios.defaults.baseURL = "https://63e61136c8839ccc2850a3f7.mockapi.io";

export const getContactsThunk = createAsyncThunk('contacts/fetchAll', async () => {
    const {data} = await axios.get('/contacts');
    console.log(data);
    return data;
})