import {List, Item, DeleteBtn} from './ContactList.styled'

import { useDispatch, useSelector} from 'react-redux';
import { deleteContactsAction } from 'redux/Contacts/contacts.slice';
import { useEffect } from 'react';
import { getContactsThunk } from 'redux/Contacts/contacts.thunk';
import { selectFilteredContacts } from 'redux/Contacts/selectors';

export const ContactList = () => {
    const filteredContacts = useSelector(selectFilteredContacts)
    const dispatch = useDispatch();
    
    useEffect(() => {
    dispatch(getContactsThunk());
    }, [dispatch]);

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
