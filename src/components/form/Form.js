import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { SaveName } from './SaveName/Name';
import { SaveTel } from './SaveTel/Tel';
import css from './form.module.css';
export class Form extends Component {
  render() {
    const { handleChange, handleSubmit, name, number } = this.props;
    return (
      <div className={css.container}>
        <h2 className={css.title}>Phonebook</h2>
        <form onSubmit={handleSubmit} className={css.form}>
          <SaveName handleChange={handleChange} name={name} />
          <SaveTel handleChange={handleChange} number={number} />
          <button className={css.formButton} type="submit">ADD CONTACT</button>
        </form>
      </div>
    );
  }
}

Form.propTypes = {
  handleChange: PropTypes.func,
  handleSubmit: PropTypes.func,
  name: PropTypes.string,
};
