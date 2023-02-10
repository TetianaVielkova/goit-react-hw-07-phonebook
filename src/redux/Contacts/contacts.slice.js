import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    contacts: {
        items: [],
        isLoading: false,
        error: null
    },
};

const contactsSlice = createSlice({
    name: 'contacts',
    initialState,
    reducers: {
        deleteContactsAction: (state, {payload}) => {
            state.contacts = state.contacts.filter((contact => contact.id !== payload));
        },
        addNewContactsAction: (state, {payload}) => {
            state.contacts.push(payload);
        }
    }
});

export const {deleteContactsAction, addNewContactsAction} = contactsSlice.actions;
export default contactsSlice.reducer;