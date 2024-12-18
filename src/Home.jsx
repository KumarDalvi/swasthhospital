import React from "react";
import Slider from "./Slider";
import ServiceBox from "./ServiceBox";
import About from "./About";
import Departments from "./Departments";
import Abmbulance from "./Ambulance";
import Progress from "./Progress.jsx";
import Aim from "./Aim.jsx";
import Reviews from "./Reviews.jsx";
export default function Home(){
    return(
        <>
        <Slider></Slider>
        <ServiceBox></ServiceBox>
        <About></About>
        <Departments></Departments>
        <Abmbulance></Abmbulance>
        <Progress></Progress>
        <Aim></Aim>
        <Reviews></Reviews>
    
        </>
    )
}