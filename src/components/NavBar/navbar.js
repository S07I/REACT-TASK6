import React from "react";
import './navbar.css';
import logo from '../../assets/logo.jpeg';
import { Link } from "react-scroll";
import contactImg from '../../assets/cont.jpeg';
const Navbar=()=>{
    return(
        <nav className="navbar">
            <img src={logo} alt="LoGo" className="logo" />
            <div className="desktopMenu">
            <Link activeClass="active" to='intro' spy={true} smooth={true} offset={-100} duration={500} className="destopMenuListItem">Home</Link>
            <Link activeClass="active" to='skills' spy={true} smooth={true} offset={-100} duration={500} className="destopMenuListItem">About</Link>
            <Link activeClass="active" to='works' spy={true} smooth={true} offset={-100} duration={500} className="destopMenuListItem">Portfolio</Link>
            </div>
            <button className="desktopMenuBtn" onClick={()=>{
                document.getElementById('contact').scrollIntoView({behavior:'smooth'});
            }}>Contact Me 
                {/* <img src={contactImg} alt="" classsName="desktopMenuImg" />Contact Me */}
            </button>
        </nav>
    )
}
export default Navbar;