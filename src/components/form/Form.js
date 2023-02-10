import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { SaveName } from './SaveName/Name';

export class Form extends Component {
  render() {
    const { handleChange, handleSubmit, name } = this.props;
    return (
      <>
        <h2>Phonebook</h2>
        <form onSubmit={handleSubmit}>
          <SaveName handleChange={handleChange} name={name} />
          <button type="submit">ADD CONTACT</button>
        </form>
      </>
    );
  }
}

Form.propTypes = {
  handleChange: PropTypes.func,
  handleSubmit: PropTypes.func,
  name: PropTypes.string,
};
