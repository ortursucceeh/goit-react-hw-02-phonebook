import { Component } from 'react';
import css from './Contact.module.css';
import propTypes from 'prop-types';

class Contact extends Component {
  render() {
    const { id, name, number, deleteContact } = this.props;

    return (
      <li className={`${css['contact']} list-group-item`}>
        <span className={css['contact__info']}>{name}</span>:
        <span className={css['contact__info']}>{number}</span>
        <button
          className="btn btn-dark"
          type="submit"
          onClick={() => deleteContact(id)}
        >
          Delete
        </button>
      </li>
    );
  }
}

Contact.propTypes = {
  id: propTypes.string.isRequired,
  name: propTypes.string.isRequired,
  number: propTypes.string.isRequired,
  deleteContact: propTypes.func.isRequired,
};

export default Contact;
