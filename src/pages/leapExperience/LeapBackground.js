import React from 'react';
import "./LeapExperience.css";
import "./LeapExperience";

export default class LeapBackground extends React.Component {
    render () {
        return (
            //Separate class created for matric background - uses LeapBackground.css for styling
            <div>
                <div className="matrix"></div>
                <div className="matrix1"></div> 
            </div>
        );
    }
}
