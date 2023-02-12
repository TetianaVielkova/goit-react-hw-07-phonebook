import { createSlice } from "@reduxjs/toolkit";
import { addContactsThunk, deleteContactsThunk, getContactsThunk } from "./contacts.thunk";

    const handlePending = state => {
        state.isLoading = true;
    };

    const handleRejected = (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
    };

const contactsSlice = createSlice({
    name: 'contacts',
    initialState: {
        items: [],
        isLoading: false,
        error: null,
    },
    extraReducers: {
    [getContactsThunk.pending]: handlePending,
    [getContactsThunk.fulfilled](state, action) {
        state.isLoading = false;
        state.error = null;
        state.items = action.payload;
    },
    [getContactsThunk.rejected]: handleRejected,
    [addContactsThunk.pending]: handlePending,
    [addContactsThunk.fulfilled](state, action) {
        state.isLoading = false;
        state.error = null;
        state.items.push(action.payload);
    },
    [addContactsThunk.rejected]: handleRejected,
    [deleteContactsThunk.pending]: handlePending,
    [deleteContactsThunk.fulfilled](state,  {payload}) {
        state.isLoading = false;
        state.error = null;
        state.items = state.items.filter((item => item.id !== payload));
    },
    [deleteContactsThunk.rejected]: handleRejected,
}})

export default contactsSlice.reducer;