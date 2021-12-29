import React from 'react';
import "./LeapExperience.css";
import "./LeapExperience";

export default class LeapBackground extends React.Component {
    render () {
        return (
            <div>
                <div className="matrix"></div>
                <div className="matrix1"></div> 
                <div className="matrix2"></div> 
                <div className="matrix3"></div> 
                <div className="matrix4"></div> 
            </div>
        );
    }
}