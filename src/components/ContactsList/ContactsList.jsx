import { useSelector, useDispatch } from 'react-redux';
import { deletContactsValue } from '../../redux/contactSlice';
import { getContactsValue, getFilterValue } from '../../redux/selectors';
import css from '../GlobalStyles.module.css';

const ContactsList = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(getContactsValue);
  const filter = useSelector(getFilterValue);

  const filterContacts = () => {
    const query = filter.toLocaleLowerCase();

    const filteredContacts = contacts.filter(contact =>
      contact.name.toLocaleLowerCase().includes(query)
    );

    if (query && !filteredContacts.length) {
      alert('No contacts matching your request');
    }
    return filteredContacts;
  };
  const onDeleteContact = contactId => {
    dispatch(deletContactsValue(contactId));
  };

  return (
    <ul className={css.contactList}>
      {filterContacts().map(({ id, name, number }) => (
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
