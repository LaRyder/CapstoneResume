import React from "react";
import "./About.css"
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import pic1 from "../../Images/13141.jpeg"
import pic2 from "../../Images/36150.jpg"
import pic3 from "../../Images/67433.jpg"
import pic4 from "../../Images/87125.jpg"
import pic5 from "../../Images/20201123.jpg"
import pic6 from "../../Images/20201224.jpg"
import pic7 from "../../Images/20211009.jpg"
import pic8 from "../../Images/FB_IMG_1.jpg"
import pic9 from "../../Images/Screenshot_2.jpg"
import pic10 from "../../Images/Snapchat-9.jpg"
import pic11 from "../../Images/Snapchat-13.jpg"
import pic12 from "../../Images/Snapchat-16.jpg"
import pic13 from "../../Images/Snapchat-17.jpg"
import pic14 from "../../Images/Snapchat-20.jpg"

function About() {
    return (
        <div className="carousel">
            <AliceCarousel autoPlay autoPlayInterval="3000">
                <img src={pic1} alt="My family" class="center-block"/>
                <img src={pic2} alt="My family"/>
                <img src={pic3} alt="My family"/>
                <img src={pic4} alt="My family"/>
                <img src={pic5} alt="My family"/>
                <img src={pic6} alt="My family"/>
                <img src={pic7} alt="My family"/>
                <img src={pic8} alt="My family"/>
                <img src={pic9} alt="My family"/>
                <img src={pic10} alt="My family"/>
                <img src={pic11} alt="My family"/>
                <img src={pic12} alt="My family"/>
                <img src={pic13} alt="My family"/>
                <img src={pic14} alt="My family"/>
              </AliceCarousel>
        </div>
    );
}

export default About;