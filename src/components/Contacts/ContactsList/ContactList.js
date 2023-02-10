import React, { Component } from 'react';
import PropTypes from 'prop-types';

export class ConstactList extends Component {
  render() {
    const { contactsArr } = this.props;

    const list = contactsArr.map(c => <li>{c.name}</li>);
    return <ul>{list}</ul>;
  }
}
