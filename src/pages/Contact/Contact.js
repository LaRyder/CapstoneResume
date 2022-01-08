import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Contact.css';
import ContactForm from "./ContactForm"

export default class Contact extends React.Component {
  render() {
    return (
      <div className="container">
        <div className="col-md-6 offset-md-3">
          <ContactForm />
        </div>
      </div>
    );
  }
}
