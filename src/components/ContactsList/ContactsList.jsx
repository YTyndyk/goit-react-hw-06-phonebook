import { useSelector, useDispatch } from 'react-redux';
import { deletContactsValue } from '../../redux/contactSlice';
import { getFilteredContacts } from '../../redux/selectors';
import css from '../GlobalStyles.module.css';

const ContactsList = () => {
  const filteredContacts = useSelector(getFilteredContacts);

  const dispatch = useDispatch();

  // const onDeleteContact = contactId => {
  //   dispatch(deletContactsValue(contactId));
  // };
  const onDeleteContact = contactId => {
    const newArray = filteredContacts.filter(
      contact => contact.id !== contactId
    );
    dispatch(deletContactsValue(newArray));
  };
  return (
    <ul className={css.contactList}>
      {filteredContacts.map(({ id, name, number }) => (
        <li className={css.item} key={id}>
          <p>{name}: </p>
          <p>{number}</p>
          <button
            onClick={() => onDeleteContact(id)}
            className={css.contactsBtn}
            type="button"
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
};

export default ContactsList;
