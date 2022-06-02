import propTypes from 'prop-types';
import { toast } from 'react-toastify';
import { Name, Number, DeleteBtn, ContactItem } from './Contact.styled';
import { deleteContactThunk } from 'redux/contacts/contactsOperations';
import { useDispatch } from 'react-redux';
import { getLoading } from 'redux/contacts/contactsSlice.js';
import { useSelector } from 'react-redux';
import { ImUserMinus } from "react-icons/im";

export const Contact = ({contactId, name, number }) => {
  const dispatch = useDispatch();
  const isLoading = useSelector(getLoading)
  console.log(isLoading)

  const handleRemoveContact = async (contactId) => {
    try {
      await dispatch(deleteContactThunk(contactId));
      toast.success(`${name} was removed from contacts!`)
    } catch (error) {
      console.log('ERROR')
    }
  }

  return (
    <ContactItem>
      <Name>{name}</Name>:<Number>{number}</Number>
      <DeleteBtn type="button"
        // disabled={isLoading}
        onClick={()=> handleRemoveContact(contactId)}
        >
        {/* {isLoading ? 'Deleting...' : 'Delete'} */}
        <ImUserMinus/>
      </DeleteBtn>
    </ContactItem>
  );
};

Contact.propTypes = {
  contactId: propTypes.string.isRequired,
  name: propTypes.string.isRequired,
  number: propTypes.string.isRequired,
};
