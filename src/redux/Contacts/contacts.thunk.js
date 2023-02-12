// import { createAsyncThunk } from "@reduxjs/toolkit";
// import axios from "axios";

// axios.defaults.baseURL = "https://63e61136c8839ccc2850a3f7.mockapi.io/contacts";

// export const getContactsThunk = createAsyncThunk('contacts', async () => {
//     const {data} = await axios.get('/contacts');
//     console.log(data);
//     return data;
// })

// export const addContactsThunk = createAsyncThunk('contacts/addContact', async ({ name, phone }) => {
//     const {data} = await axios.post('/contacts', { name, phone });
//     console.log(data);
//     return data;
// })

// export const deleteContactsThunk = createAsyncThunk('contacts/deleteContact', async ( id ) => {
//     const {data} = await axios.delete(`/contacts/${ id }`);
//     console.log(data);
//     return data;
// })


import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'https://63c46a07a90856357536d3e7.mockapi.io/contacts';

export const getContactsThunk = createAsyncThunk(
  'contacts/fetchAll',
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await axios('/contacts');
      return data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const deleteContactsThunk = createAsyncThunk(
  'contacts/deleteContact',
  async (id, { rejectWithValue }) => {
    try {
      await axios.delete(`/contacts/${id}`);
      return id;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const addContactsThunk = createAsyncThunk(
  'contacts/addContact',
  async (contact, { rejectWithValue }) => {
    try {
      const { data } = await axios.post(`/contacts`, contact);
      return data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);