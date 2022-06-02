
import { Contact } from 'components/Contact/Contact';
import { ContactListEl, ContactListItem } from './ContactList.styled';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchContactsThunk } from 'redux/contacts/contactsOperations';
import { getFilter, getContacts } from 'redux/contacts/contactsSlice';

export const ContactList = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(getContacts);
  const filterItem = useSelector(getFilter);

  useEffect(() => {
    dispatch(fetchContactsThunk());
  }, [dispatch]);
  

  const filteredContactList = () => {
    const normilizFilterValue = filterItem.toLowerCase().trim();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normilizFilterValue)
    );
  };

  return (
    <ContactListEl>
      {contacts && 
      filteredContactList().map(({ id, name, number }) => (
        <ContactListItem key={id}>
          <Contact
            contactId={id}
            name={name}
            number={number}
          />
        </ContactListItem>
      ))}
    </ContactListEl>
  );
};
