import React, { Component } from 'react';
import { nanoid } from 'nanoid';
import { Form } from './form/Form';
import { Contacts } from './Contacts/Contacts';
export class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'John Doe', number: '741-22-33' },
      { id: 'id-3', name: 'Jane Doe', number: '232-44-11' },
      { id: 'id-4', name: 'Jim Brown', number: '111-12-33' },
      { id: 'id-5', name: 'Jerry Smith', number: '121-33-22' },
      { id: 'id-6', name: 'Jack Bauer', number: '333-11-12' },
      { id: 'id-7', name: 'Jessica Parker', number: '222-22-22' },
      { id: 'id-8', name: 'Jacob Black', number: '555-12-33' },
      { id: 'id-9', name: 'Jennifer Aniston', number: '444-22-33' },
      { id: 'id-10', name: 'Josh Hartnett', number: '123-12-33' },
      { id: 'id-11', name: 'Julia Roberts', number: '333-44-22' },
      { id: 'id-12', name: 'John Travolta', number: '112-22-11' },
      { id: 'id-13', name: 'Jared Leto', number: '121-12-33' },
      { id: 'id-14', name: 'Joan Baez', number: '666-22-11' },
      { id: 'id-15', name: 'Jimi Hendrix', number: '999-12-33' },
      { id: 'id-17', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-18', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-19', name: 'Annie Copeland', number: '227-91-26' },
    ],
    name: '',
    number: '',
    filter: '',
  };
  handleChange = e => {
    const { name, number, value, filter } = e.target;
    this.setState({ [name]: value });
    this.setState({ [number]: value });
    this.setState({ [filter]: value });
    console.log(this.filter);
  };
  handleSubmit = e => {
    e.preventDefault();
    const contact = {
      id: nanoid(),
      name: this.state.name,
      number: this.state.number,
    };
    const addContact = [contact, ...this.state.contacts];
    this.setState({ contacts: addContact });
    this.setState({ name: '' });
    this.setState({ number: '' });
  };
  render() {
    return (
      <div>
        <Form
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
          name={this.state.name}
          number={this.state.number}
        />
        <Contacts
          contactsArr={this.state.contacts}
          filter={this.state.filter}
          handleChange={this.handleChange}
        />
      </div>
    );
  }
}
