import React, { Component } from 'react';
import PropTypes from 'prop-types';
import css from './tel.module.css';
export class SaveTel extends Component {
  render() {
    const { handleChange, number } = this.props;
    return (
      <>
        <label htmlFor="phone number" className={css.label}>
          Phone number
        </label>
        <input
          className={css.input}
          onChange={handleChange}
          value={number}
          autoComplete="off"
          placeholder="Enter phone number"
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
      </>
    );
  }
}
SaveTel.propTypes = {
  handleChange: PropTypes.func,
  number: PropTypes.string,
};
