import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { ContactList } from './ContactsList/ContactList';
import { Filter } from './Filter/Filter';
export class Contacts extends Component {
  render() {
    const { contactsArr, filter, handleChange } = this.props;

    return (
      <>
        <h2>Contacts</h2>
        <Filter filter={filter} handleChange={handleChange} />
        <ContactList contactsArr={contactsArr} />
      </>
    );
  }
}

Contacts.propTypes = {
  handleChange: PropTypes.func,
  contactsArr: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      name: PropTypes.string,
      number: PropTypes.string,
    })
  ),
};
