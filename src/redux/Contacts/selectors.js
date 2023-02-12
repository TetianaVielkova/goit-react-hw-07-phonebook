import { createSelector } from "@reduxjs/toolkit";

export const selectContacts = state => state.contacts.contacts;
export const filteredContacts = state => state.filter.filter;

export const selectFilteredContacts = createSelector(
    [selectContacts, filteredContacts],

    (contacts, filters) =>
    contacts.filter(({ name }) =>
    name.toLowerCase().includes(filters))
);