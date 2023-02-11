import React, { Component } from 'react';
import PropTypes from 'prop-types';
import css from './name.module.css';

export class SaveName extends Component {
  render() {
    const { handleChange, name } = this.props;
    return (
      <>
        <label className={css.label} htmlFor="name">
          Name
        </label>
        <input
          className={css.input}
          onChange={handleChange}
          value={name}
          autoComplete="off"
          placeholder="Enter Name"
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
      </>
    );
  }
}

SaveName.propTypes = {
  handleChange: PropTypes.func,
  name: PropTypes.string,
};
