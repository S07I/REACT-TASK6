import React from 'react';
import './intro.css';
import bg from '../../assets/bgg.jpeg';
import {Link} from 'react-scroll';
import btnImg from '../../assets/hire.jpg';
const Intro=()=>{
    return(
        <section id="intro">
            <div className='introContent'>
                <span className='hello'>Hello,</span>
                <span className='introText'>I'm <span className='introName'>Shaurya</span> <br />FullStack Developer</span>
                <p className='introPara'>I am a skilled FullStack Developer with experience in creating visually appealing and freindly websites. </p>
                <Link><button className='btn'><img src={btnImg} alt='Hire Me'/><b>Hire Me</b></button></Link>
            </div>
            <img src={bg} alt='Profile' className='bg'/>
            </section>
    )
}
export default Intro;