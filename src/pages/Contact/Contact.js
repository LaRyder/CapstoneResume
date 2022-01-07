import React from 'react';
import Header from "./Head";
import 'bootstrap/dist/css/bootstrap.min.css';
import './Contact.css';
import ContactForm from "./ContactForm"

export default class Contact extends React.Component {
    render () {
        return (
      <div className="container">
        <div className="col-md-6 offset-md-3">
          <Header />
          <ContactForm />
        </div>
      </div>
    );
  }
}
