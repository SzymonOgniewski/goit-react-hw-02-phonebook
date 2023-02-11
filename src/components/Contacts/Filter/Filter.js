import React, { Component } from 'react';
import PropTypes from 'prop-types';

export class Filter extends Component {
  render() {
    const { filter, handleChange, handleFilter } = this.props;
    return (
      <>
        <label>Find contacts by name</label>

        <input
          onChange={(handleChange, handleFilter)}
          autoComplete="off"
          type="text"
          name="filter"
          value={filter}
          placeholder="search"
        />
      </>
    );
  }
}

Filter.propTypes = {
  filter: PropTypes.string,
  handleChange: PropTypes.func,
};
