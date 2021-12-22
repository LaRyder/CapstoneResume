import React from "react";
import "./LeapExperience.css";
import {FaGithub} from 'react-icons/fa';
import ball from "../../Images/8Ball.png";
import magic from "./magic"

const LeapExperience = () => {
    return (
     <div className="LeapExperience">
            <h1 className="header">LEAP EXPERIENCE</h1>
            <p>Leap: A career changing opportunity to learn and develop software engineering skills and capabilities,</p>
            <p>an opporunity that has unlocked the path for my future,</p>
            <p>and an incredible experience that I am honored to be a part of. </p>
            <p>Through the 16 week course of Leap, many programs and tools have been practiced, from front-end development to back-end development.</p>
            <p>I learned to create a calculator layout using CSS and HTML, and later implementing Javascript to make the calculator functional.</p>
            <p>I learned how to create fun games, such as tic-tac-toe and hangman, create and consume APIs, create SQL applications, as well as build a quilt using C#, </p>
            <p>all of which can be found in my Githud <a href="https://github.com/LaRyder"> <FaGithub></FaGithub ></a>. </p>
            <p>The program is a fast-paced, challenging, and very well planned curriculum that has provided and solid foundation to start my dream career. </p>

        <ul className="links">
           <li><a href="https://www.linkedin.com/learning/git-essential-training-the-basics?u=3322">Git Essential Training: The Basics</a></li>
           <li><a href="https://www.linkedin.com/learning/html-essential-training-4?u=3322">HTML Essential Training</a></li>
           <li><a href="https://www.linkedin.com/learning/git-branches-merges-and-remotes?u=3322">Git: Branches, Merges, and Remotes</a></li>
           <li><a href="https://www.linkedin.com/learning/introduction-to-css?u=3322">Introduction to CSS</a></li>
           <li><a href="https://www.linkedin.com/learning/overcoming-imposter-syndrome?u=3322">Overcoming Imposter Syndrome</a></li>
           <li><a href="https://www.linkedin.com/learning/c-sharp-essential-training-1-syntax-and-object-oriented-programming?u=3322">C# Essential Training: 1 Syntax and Object Oriented Programming</a></li>
           <li><a href="https://www.linkedin.com/learning/c-sharp-essential-training-2-flow-control-arrays-and-exception-handling?u=3322">C# Essential Training: 2 Flow Control, Arrays, and Exception Handling</a></li>
           <li><a href="https://www.linkedin.com/learning/programming-foundations-object-oriented-design-3?u=3322">C# Test Driven Development (2016)</a></li>
           <li><a href="https://www.linkedin.com/learning/c-sharp-test-driven-development-2016?u=3322">C# Test Driven Development (2016)</a></li>
           <li><a href="https://www.linkedin.com/learning/learning-c-sharp-algorithms?u=3322">Learning C# Algorithms</a></li>
           <li><a href="https://www.linkedin.com/learning/learning-sql-programming-8382385?u=3322">Learning SQL Programming</a></li>
           <li><a href="https://www.linkedin.com/learning/sql-code-challenges?u=3322">SQL Code Challenges</a></li>
           <li><a href="https://www.linkedin.com/learning/c-sharp-advanced-practices?u=3322">C#: Advanced Practices</a></li>
           <li><a href="https://www.linkedin.com/learning/building-web-apis-with-asp-dot-net-core-3?u=3322">Building Web APIs with ASP.NET Core</a></li>
           <li><a href="https://www.linkedin.com/learning/learning-the-javascript-language-2?u=3322">Learning the JavaScript Language</a></li>
           <li><a href="https://www.linkedin.com/learning/react-js-essential-training?u=3322">React.js Essential Training</a></li>
           <li><a href="https://www.linkedin.com/learning/javascript-essential-training?u=3322">JavaScript Essential Training</a></li>
           <li><a href="https://www.linkedin.com/learning/react-building-styles-with-css-modules-9222678?u=3322">React: Building Styles with CSS Modules</a></li>
           <li><a href="https://www.linkedin.com/learning/learning-the-javascript-language-2?u=3322">Learning the JavaScript Language</a></li>
           <li><a href="https://www.linkedin.com/learning/react-working-with-apis?u=3322">React: Working with APIs</a></li>
        </ul>

        <img src={ball} alt="Magic 8 ball" className="ball"/>
        </div>
    );
} 
 
export default LeapExperience;