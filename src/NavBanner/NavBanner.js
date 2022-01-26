import React from "react";
import {Link} from "react-router-dom";
import "./NavBanner.css"

export default class NavBanner extends React.Component {
  state={
    curTime : new Date().toLocaleString(),
  }
  render () {
    return (
      <nav>
        <div className="navContainer">
          <div className="headerInner">
            <ul>
              <div className="leftSide">
                <Link className="navButton" to="/">Lauren Ryder</Link>
                <Link className="navButton" to="ContactMe">Contact Me</Link>
              </div>
              <div className="rightSide">
                <Link className="navButton" to="About">About</Link>
                <Link className="navButton" to="Resume">Resume</Link>
                <Link className="navButton" to="leapExperience">Leap Experience</Link>
              </div>
              <div className= "time">{this.state.curTime }</div>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}
