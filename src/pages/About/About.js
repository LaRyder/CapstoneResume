import React from "react";
import "./About.css"
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";

function About() {
    return (
        <div className="carousel">
            <AliceCarousel autoPlay autoPlayInterval="3000">
                <img src="src/Images/13141.jpeg" alt="My family"/>
                <img src="src/Images/36150.jpg" alt="My family"/>
                <img src="src/Images/67433.jpg" alt="My family"/>
                <img src="src/Images/20201123.jpg" alt="My family"/>
                <img src="src/Images/20201224.jpg" alt="My family"/>
                <img src="src/Images/20211009.jpg" alt="My family"/>
                <img src="src/Images/FB_IMG_1.jpg" alt="My family"/>
                <img src="src/Images/Screenshot_2.jpg" alt="My family"/>
                <img src="src/Images/Snapchat-9.jpg" alt="My family"/>
                <img src="src/Images/Snapchat-13.jpg" alt="My family"/>
                <img src="src/Images/Snapchat-16.jpg" alt="My family"/>
                <img src="src/Images/87125.jpg" alt="My family"/>
                <img src="src/Images/Snapchat-17.jpg" alt="My family"/>
                <img src="src/Images/Snapchat-20.jpg" alt="My family"/> 
            </AliceCarousel>
        </div>
    );
}

export default About;