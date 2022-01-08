import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Contact.css';
import ContactForm from "./ContactForm"

export default class Contact extends React.Component {
  render() {
    return (
      <div className="container">
        <div className="col-md-6 offset-md-3">
          <h1 className='header'>Contact Form</h1>
          <ContactForm />
        </div>
      </div>
    );
  }
}
