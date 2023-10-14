import React from "react";
import './contact.css'
import insta from "../../assets/insta-logo.jpeg";
import twitter from "../../assets/twitter.png";
import fb from "../../assets/fb.jpg";
import li from "../../assets/linked.png";

const Contact=()=>{
    return(
        <section id="contactPage">
            <div id="contact">
                <h1 className="contactPageTitle">Contact Me</h1>
                <span className="contactDesc">Please fill out the form below to discuss any work opportunities.</span>
                <form className="contactForm">
                    <input type="text" className="name" placeholder="Your Name"/>
                    <input type="email" className="email" placeholder="Your Email"/>
                    <textarea className="msg" name="message" rows="5" placeholder="Your Message"></textarea>
                    <button type="submit" value='Send' className="submitBtn">Submit</button>
                    <div className="links">
                        <img src={insta} alt="" className="link" />
                        <img src={twitter} alt="" className="link" />
                        <img src={fb} alt="" className="link" />
                        <img src={li} alt="" className="link" />


                    </div>
                </form>
            </div>
        </section>
    )
}
export default Contact;