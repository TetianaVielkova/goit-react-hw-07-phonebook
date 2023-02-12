import {List, Item, DeleteBtn} from './ContactList.styled'

import { useDispatch, useSelector} from 'react-redux';
import { useEffect } from 'react';
import { deleteContactsThunk, getContactsThunk } from 'redux/Contacts/contacts.thunk';
import {  selectContacts, selectError, selectFilter, selectIsLoading } from 'redux/Contacts/contacts.selectors';

export const ContactList = () => {

    const contacts = useSelector(selectContacts);
    const filter = useSelector(selectFilter);
    const dispatch = useDispatch();
    const isLoading = useSelector(selectIsLoading);
    const error = useSelector(selectError);

    
    useEffect(() => {
    dispatch(getContactsThunk());
    }, [dispatch]);

    const filteredContacts = contacts.filter(contact=>
    contact.name.toLowerCase().includes(filter.toLowerCase()));

    return(
        <List>
            {isLoading && !error && <b>Loading...</b>}
            {error && <b>{error.message}</b>}
            {filteredContacts.map(({id, name, number}) => (
                <Item key={id}>{name}: {number}
                <DeleteBtn
                    type='button' onClick={() => dispatch(deleteContactsThunk(id))}>Delete
                </DeleteBtn>
                </Item>
            ))}
        </List>
    )
}
