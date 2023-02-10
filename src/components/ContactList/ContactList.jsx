import {List, Item, DeleteBtn} from './ContactList.styled'

import { useDispatch, useSelector} from 'react-redux';
import { deleteContactsAction } from 'redux/Contacts/contacts.slice';
import { useEffect } from 'react';
import { getContactsThunk } from 'redux/Contacts/contacts.thunk';

export const ContactList = () => {

    const contacts = useSelector(state => state.contacts.contacts);
    const filters = useSelector(state => state.filter.filter);
    const dispatch = useDispatch();
    
    useEffect(() => {
    dispatch(getContactsThunk());
    }, [dispatch]);

    const filteredContacts = contacts.filter(({ name }) =>
    name.toLowerCase().includes(filters)
);

    return(
        <List>
            {filteredContacts.map(({id, name, number}) => (
                <Item key={id}>{name}: {number}
                <DeleteBtn
                    type='button' onClick={() => dispatch(deleteContactsAction(id))}>Delete
                </DeleteBtn>
                </Item>
            ))}
        </List>
    )
}
