import React from "react";
import "./Home.css";
import {FaFacebook} from 'react-icons/fa'
import {FaLinkedin} from 'react-icons/fa'
import {FaGithub} from 'react-icons/fa'
import {FaGoogle} from 'react-icons/fa'
import cert from "../../Images/CJIS.png";
import coin from "../../Images/57730.png";
import dply from "../../Images/dply.png";


export default class Home extends React.Component {
    render () {
        return (
            //Div class for resume picture - background
            <div className="resumePic">
                <div className="bodyContent">
                <h1 className="title">Hi, I am Lauren Ryder</h1>
                    <div className="jobDescription">
                        <p>Deployment Technician / Leap Apprentice</p>
                            <div className="icons">
                                <a className="iconButton" href="https://www.facebook.com/lauren.ryder.12/"> <FaFacebook color="black" fontSize="1.5em" ></FaFacebook></a> {" "}
                                <a className="iconButton" href="https://www.linkedin.com/in/lauren-ryder-00675617b/"> <FaLinkedin color="black" fontSize="1.5em" ></FaLinkedin></a> {" "}
                                <a className="iconButton"  href="https://github.com/LaRyder"> <FaGithub color="black" fontSize="1.5em" ></FaGithub ></a> {" "}
                                <a className="iconButton" href="mailto:ryderl88@gmail.com"><FaGoogle color="black" fontSize="1.5em" ></FaGoogle></a>
                            </div>
                            <img src={cert} alt="CJIS Certificate" className="cert"/>
                            <img src={dply} alt="Deployment Badge" className="dply"/>
                            <img src={coin} alt="Microsoft Coin Award" className="coin"/>
                        </div>
                    <div className="quote">
                        <p><em><b>Ability</b></em>{" "} is what you are capable of doing</p>
                        <p><em><b>Motivation</b></em>{" "}determines what you do</p>
                        <p><em><b>Attitude</b></em>{" "}determines how well you do it.</p>
                    </div>
                </div>
            </div>
        );
    }  
}