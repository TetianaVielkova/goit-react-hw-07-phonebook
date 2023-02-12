import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

axios.defaults.baseURL = "https://63e61136c8839ccc2850a3f7.mockapi.io";

export const getContactsThunk = createAsyncThunk('contacts', async () => {
    const {data} = await axios.get('/contacts');
    console.log(data);
    return data;
})

export const addContactsThunk = createAsyncThunk('contacts/addContact', async ({ name, phone }) => {
    const {data} = await axios.post('/contacts', { name, phone });
    console.log(data);
    return data;
})

export const deleteContactsThunk = createAsyncThunk('contacts/deleteContact', async ( id ) => {
    const {data} = await axios.delete(`/contacts/${ id }`);
    console.log(data);
    return data;
})