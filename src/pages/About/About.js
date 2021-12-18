import React from "react";
import "./About.css"
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";

function About() {
    return (
        <div className="carousel">
            <AliceCarousel autoPlay autoPlayInterval="3000">
                <img src="src/Images/20201123_165438.jpg" alt="My family"/>
                
            </AliceCarousel>
        </div>
    )
}

export default About;