import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {addNewContactsAction} from './../../redux/Contacts/contacts.slice';

import {Form, Input, Label, Button} from './ContactForm.styled';
import { nanoid } from 'nanoid';

export const ContactForm = () => {
    const [name, setName] = useState('');
    const [number, setNumber] = useState('');
    const dispatch = useDispatch();
    const contacts = useSelector((state) => state.contacts.contacts);

    const handleChangeName = event => {
        setName(event.target.value);
    }
    const handleChangeNumber = event => {
        setNumber(event.target.value);
    }

    const handelSubmit = event => {
        event.preventDefault();
        
        const nameInArray =  contacts.find(
            contacts  => contacts.name.toLowerCase() === name.toLowerCase()
        );
        if (nameInArray) {
            alert(`${name} is already in contacts `)
            return
        } 
        const contact = {name, number, id: nanoid()};
            dispatch(addNewContactsAction(contact));
        
        setName('');
        setNumber('');
    }


    return(
        <Form onSubmit={handelSubmit}>
            <Label>Name
                <Input
                type="text"
                name="name"
                pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                required
                onChange={handleChangeName}
                value={name}
                />
            </Label>
            <Label>Number
            <Input
                type="tel"
                name="number"
                pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                required
                onChange={handleChangeNumber}
                value={number}
                />
            </Label>
            <Button type="submit">Add contact</Button>
        </Form>
    )
}