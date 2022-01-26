import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Contact.css';
import ContactForm from "./ContactForm"

export default class Contact extends React.Component {
  render() {
    return (
      <div className="container">
          <h1 className='header'>Contact Form</h1>
          <ContactForm />
        </div>
    );
  }
}
