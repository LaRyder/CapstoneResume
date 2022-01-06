import React from "react";
import "./About.css"
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import pic1 from "../../Images/13141.jpeg";
import pic2 from "../../Images/36150.jpg";
import pic3 from "../../Images/67433.jpg";
import pic4 from "../../Images/87125.jpg";
import pic5 from "../../Images/20201123.jpg";
import pic6 from "../../Images/20201224.jpg";
import pic7 from "../../Images/20211009.jpg";
import pic8 from "../../Images/FB_IMG_1.jpg";
import pic9 from "../../Images/Screenshot_2.jpg";
import pic10 from "../../Images/Snapchat-9.jpg";
import pic11 from "../../Images/Snapchat-13.jpg";
import pic12 from "../../Images/Snapchat-16.jpg";
import pic13 from "../../Images/Snapchat-17.jpg";
import pic14 from "../../Images/Snapchat-20.jpg";
import pic15 from"../../Images/20191202_171043.jpg";
import pic16 from"../../Images/36236.jpeg";
import pic17 from"../../Images/20211225.jpg";
import pic18 from"../../Images/Snapchat-18.jpg";
import pic19 from"../../Images/Snapchat-21.jpg";


export default class About extends React.Component {
    render () {
        return (
            <div className="aboutMe">
                <h1 className="header">About Me</h1>
                <h2 className="quote">“The measure of who we are is what we do with what we have.” — Vince Lombardi</h2>
                    <p>I am Lauren, a Data Center Technician of 6 years, and an up and coming Software Engineer. I am mother of two wonderful children, and a wife to my highschool sweetheart.</p>
                    <p>Technology has always been a passion of mine. Learning and growing in the Data Center has been exiting and fulfilling, but I am ready to take the next step in my career.</p>
                    <p>The Leap program, which I will dive into more on the <b>Leap Experience</b> page, presented itself at the perfect time in my career.</p>
                    <p>The anticipation of deciding what I wanted to be when I grow up, defined itself on May 11, 2021. Without and second thought, </p>
                    <p>the application was submitted, I excitedly received my acceptance letter, and the fast-paced, stimulating experience began. </p>

                <div className="carousel">
                    {/* Carousel for pictures  */}
                    <AliceCarousel autoPlay autoPlayInterval="3000">
                        <img src={pic1} alt="My family" class="center"/>
                        <img src={pic2} alt="My family" class="center"/>
                        <img src={pic3} alt="My family" class="center"/>
                        <img src={pic4} alt="My family" class="center"/>
                        <img src={pic5} alt="My family" class="center"/>
                        <img src={pic6} alt="My family" class="center"/>
                        <img src={pic7} alt="My family" class="center"/>
                        <img src={pic8} alt="My family" class="center"/>
                        <img src={pic9} alt="My family" class="center"/>
                        <img src={pic10} alt="My family" class="center"/>
                        <img src={pic11} alt="My family" class="center"/>
                        <img src={pic12} alt="My family" class="center"/>
                        <img src={pic13} alt="My family" class="center"/> 
                        <img src={pic14} alt="My family" class="center"/>
                        <img src={pic15} alt="My Family" class="centr"/>
                        <img src={pic16} alt="My Family" class="center"/>
                        <img src={pic17} alt="My Family" class="center"/>
                        <img src={pic18} alt="My Family" class="center"/>
                        <img src={pic19} alt="My Family" class="center"/>
                    </AliceCarousel>
                </div>
            </div>
        );
    }
}