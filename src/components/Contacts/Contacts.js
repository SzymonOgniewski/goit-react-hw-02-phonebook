import React, { Component } from 'react';
import PropTypes from 'prop-types';

export class Contacts extends Component {
  render() {
    const { contactsArr } = this.props;

    return (
      <>
        <h2>Contacts</h2>
        <ConstactList contactsArr={contactsArr} />
      </>
    );
  }
}

