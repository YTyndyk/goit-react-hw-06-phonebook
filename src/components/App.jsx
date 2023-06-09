import { useSelector, useDispatch } from 'react-redux';
import { setFilterValue, getFilterValue } from '../redux/filterSlice';
import {
  setContactValue,
  deletContactsValue,
  getContactsValue,
} from '../redux/contactSlice';
import ContactsList from './ContactsList';
import Form from './ContactsForm';
import Filter from './Filter';
import css from './GlobalStyles.module.css';

const App = () => {
  const dispatchFilter = useDispatch();
  const contactsValue = useSelector(getContactsValue);
  const filterValue = useSelector(getFilterValue);

  const deleteContact = dataId => {
    const newArray = contactsValue.filter(contact => contact.id !== dataId);
    dispatchFilter(deletContactsValue(newArray));
  };
  // const addContact = newContact => {
  //   const existedContact = contacts.some(
  //     contact =>
  //       contact.name === newContact.name || contact.number === newContact.number
  //   );
  //   if (existedContact) {
  //     return alert(`${newContact.name}: is already in contacts`);
  //   }
  //   setContacts([newContact, ...contacts]);
  // };

  return (
    <div
      style={{
        height: '100vh',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 16,
        color: '#010101',
      }}
    >
      <h1 className={css.title}>Phonebook</h1>
      <Form onSubmit={data => dispatchFilter(setContactValue(data))} />
      <h2 className={css.title}>Contacts</h2>
      <Filter
        value={filterValue}
        onChange={evt =>
          dispatchFilter(setFilterValue(evt.currentTarget.value))
        }
      />
      <ContactsList contacts={contactsValue} onDeleteContact={deleteContact} />
    </div>
  );
};
export default App;
