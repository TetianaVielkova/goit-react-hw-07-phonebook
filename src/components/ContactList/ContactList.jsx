import {List, Item, DeleteBtn} from './ContactList.styled'

import { useDispatch, useSelector} from 'react-redux';
import { useEffect } from 'react';
import { deleteContactsThunk, getContactsThunk } from 'redux/Contacts/contacts.thunk';
import { selectContacts, selectFilter } from 'redux/Contacts/contacts.selectors';

export const ContactList = () => {

    const contacts = useSelector(selectContacts);
    const filter = useSelector(selectFilter);
    const dispatch = useDispatch();
    
    useEffect(() => {
    dispatch(getContactsThunk());
    }, [dispatch]);

    const filteredContacts = contacts.filter(({ name }) =>
    name.toLowerCase().includes(filter));

    return(
        <List>
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
