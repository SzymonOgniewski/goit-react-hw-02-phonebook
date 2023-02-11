import React, { Component } from 'react';
import PropTypes from 'prop-types';

export class ContactList extends Component {
  render() {
    const { contactsArr } = this.props;

    const list = contactsArr.map(contact => (
      <li key={contact.id}>
        <span>
          {contact.name}: {contact.number}
        </span>
      </li>
    ));

    return <ul>{list}</ul>;
  }
}

ContactList.propTypes = {
  contactsArr: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      name: PropTypes.string,
      number: PropTypes.string,
    })
  ),
  filter: PropTypes.string,
};
