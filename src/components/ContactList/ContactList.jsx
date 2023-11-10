import React from 'react';
import { Filter } from 'components/Filter/Filter';
import { Contact } from 'components/Contact/Contact';

export const ContactList = ({ contacts, filter, onUpdateFilter, onDelete }) => {
  const filteredContacts = contacts.filter(item => {
    return item.name.toLowerCase().includes(filter.toLowerCase());
  });

  return (
    <div>
      <h2>Contacts</h2>
      <Filter onUpdateFilter={onUpdateFilter} />
      <ul>
        {filteredContacts.map(contact => (
          <Contact
            key={contact.id}
            id={contact.id}
            name={contact.name}
            number={contact.number}
            onDelete={onDelete}
          />
        ))}
      </ul>
    </div>
  );
};
