import React from "react";
import "./LeapExperience.css";
import {FaGithub} from 'react-icons/fa';
import LeapBackground from './LeapBackground'
import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";
import TicTacToe from "../../Images/TicTacToe.png"
import JSCalc from "../../Images/JSCalc.png"


export default class LeapExperience extends React.Component {
    render () {
        return (
        <div className="content"> {/*Div class created to separate page page and matrix background styling */}
            <LeapBackground />
                <div className="LeapExperience">
                    {/* Top portion on Leap Experience */}
                    <h1 className="header">Leap Experience</h1>
                    <h2 className="quote">“Any fool can write code that a computer can understand. Good programmers write code that humans can understand.” – Martin Fowler</h2>
                    <div className="row">
                        <div className="sideBySide">
                            <p>Leap: A career changing opportunity to learn and develop software engineering skills and capabilities,</p>
                            <p>an opporunity that has unlocked the path for my future,</p>
                            <p>and an incredible experience that I am honored to be a part of. </p>
                            <p>Through the 16 week course of Leap, many programs and tools have been practiced, from front-end development to back-end development.</p>
                            <p>I learned to create a calculator layout using CSS and HTML, and later implementing Javascript to make the calculator functional.</p>
                            <p>I learned how to create fun games, such as tic-tac-toe and hangman, create and consume APIs, create SQL applications, as well as build a quilt using C#, </p>
                            <p>all of which can be found in my Githud <a href="https://github.com/LaRyder"> <FaGithub></FaGithub ></a>. </p>
                            <p>The program is a fast-paced, challenging, and very well planned curriculum that has provided and solid foundation to start my dream career. </p>
                        </div>
        
                        <div className="aside">
                            <img src={TicTacToe} alt="C# Tictactoe" className="proj1"/>
                            <img src={JSCalc} alt="Javascript Calculator" className="proj2"/>
                        </div>
                    </div>
                    <Popup trigger={<button className="tTrainings">Trainings & Resources</button>}>
                        <div class="text"><a href="https://www.linkedin.com/learning/introduction-to-css?u=3322">~ Introduction to CSS</a></div>
                        <div class="text"><a href="https://www.linkedin.com/learning/html-essential-training-4?u=3322">~ HTML Essential Training</a></div>
                        <div class="text"><a href="https://www.linkedin.com/learning/learning-c-sharp-algorithms?u=3322">~ Learning C# Algorithms</a></div>
                        <div class="text"><a href="https://www.linkedin.com/learning/learning-sql-programming-8382385?u=3322">~ Learning SQL Programming</a></div>
                        <div class="text"><a href="https://www.linkedin.com/learning/building-web-apis-with-asp-dot-net-core-3?u=3322">~ Building Web APIs with ASP.NET Core</a></div>
                        <div class="text"><a href="https://www.linkedin.com/learning/learning-the-javascript-language-2?u=3322">~ Learning the JavaScript Language</a></div>
                        <div class="text"><a href="https://www.linkedin.com/learning/react-building-styles-with-css-modules-9222678?u=3322">~ React: Building Styles with CSS Modules</a></div>
                        <div class="text"><a href="https://www.linkedin.com/learning/overcoming-imposter-syndrome?u=3322">~ Overcoming Imposter Syndrome</a></div>
                        <div class="text"><a href="https://www.linkedin.com/learning/c-sharp-essential-training-1-syntax-and-object-oriented-programming?u=3322">~ C# Essential Training: 1 Syntax and Object Oriented Programming</a></div>
                        <div class="text"><a href="C:\Users\laryder\capstone-resume\src\pages\leapExperience\index.html">~ JSCalc</a></div>
                    </Popup>
                </div>
            </div>
        );
    }
}
