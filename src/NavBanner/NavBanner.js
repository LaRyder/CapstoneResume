import React from "react";
import {Link} from "react-router-dom";
import "./NavBanner.css"

export default class NavBanner extends React.Component {
  render () {
      return (
      <nav>
        <div class="navContainer">
        <div class="headerInner">
      <ul>
        <div class="leftSide">
        <Link class="navButton" to="/">Lauren Ryder</Link>
        </div>
        <div class="rightSide">
        <Link class="navButton" to="About">About</Link>
        <Link class="navButton" to="leapExperience">leap Experience</Link>
        <Link class="navButton" to="Resume">Resume</Link>
        </div>
      </ul>
        </div>
        </div>
      </nav>
    );
  }
}
