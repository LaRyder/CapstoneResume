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
                <Link class="navButton" to="/">Contact Me</Link>
              </div>
              <div class="rightSide">
                <Link class="navButton" to="About">About</Link>
                <Link class="navButton" to="Resume">Resume</Link>
                <Link class="navButton" to="leapExperience">Leap Experience</Link>
              </div>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}
