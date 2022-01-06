import React from "react";
import "./Resume.css";
import Skills from './Skills';
import Header from './Header'
import Footer from './Footer'

export default class Resume extends React.Component {
    render(){
      return (
        <div>
          <Header />
          <Skills />
          <Footer />
      </div>
    );
  }
}
