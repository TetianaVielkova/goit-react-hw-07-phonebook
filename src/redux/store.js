import { configureStore } from '@reduxjs/toolkit';
import contactsReducer from './Contacts/contacts.slice';
import filterReducer from './Contacts/filter.slice';


export const store = configureStore({
    devTools: true,
    reducer: {
        contacts: contactsReducer,
        filter: filterReducer,
    },
});

