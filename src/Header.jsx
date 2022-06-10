import React from "react";
import logo from './img/logo.png'
const Header =()=>{
return(
    <header className="header">
        <div className="left">
            <img src={logo} alt=" " id="logo"/>
            <div id="gymName">Fitness Freak Gym </div>
        </div>
        <div className="mid">
            <ul className="navbar">
                <li><a href="#cont" className="active">Home</a>
                    <div></div>
                </li>
                <li><a href="#about" >About Us</a></li>
                <li><a href="https://www.calculator.net/fitness-and-health-calculator.html" target="blank">Fitness Calculator</a></li>
                <li><a href="#contactUs">Contact Us</a></li>
            </ul>
        </div>
        <div className="right" id="cont">
            <a className="btn" href="#contactUs">Call Us</a><a href="#contactUs" className="btn">Email Us</a>
        </div>

    </header>
)
}
export default Header;