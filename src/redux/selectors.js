export const getContactsValue = store => store.valueContacts.contacts;
export const getFilteredContacts = store => {
  // console.log(store.valueContacts.contacts);
  const contacts = store.valueContacts.contacts;
  const filter = store.valueFilter;
  if (!filter) {
    return contacts;
  }
  const normalizedFilter = filter.toLowerCase();
  const filteredContacts = contacts.filter(
    ({ name, number }) =>
      name.toLowerCase().trim().includes(normalizedFilter) ||
      number.trim().includes(normalizedFilter)
  );

  if (normalizedFilter && !filteredContacts.length) {
    alert(`No contacts matching your request`);
  }
  return filteredContacts;
};
export const getFilterValue = state => state.valueFilter;
