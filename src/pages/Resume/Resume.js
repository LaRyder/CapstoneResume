import React, {Component} from 'react';
import "./Resume.css";
import Skills from './Skills';
import Experience from './Experience';
import Header from './Header'
import Footer from './Footer'

class Resume extends Component {
    render(){
      return (
        <div>
          <Header />
          <Skills />
          <Experience />
          <Footer />
        </div>
      );
    }
  }
  
  export default Resume;