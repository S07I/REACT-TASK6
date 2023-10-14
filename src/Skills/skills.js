import React from 'react';
import './skills.css';
import ml from '../../src/assets/ml.jpg';
import webdesign from '../../src/assets/webdesign.png';
import dsa from '../../src/assets/dsa.png';
import language from '../../src/assets/language.png';
const Skills=()=>{
    return(
        <section id='skills'>
            <span className='skillTitle'>What I do</span>
            <span className='skillDesc'>Currently, I am 3rd Year B.tech Student.My domain is CSE with specialization in Artificial Intelligence and Machine Learning.<br />I am a Enthusiast Learner and passionate towards my Career.I have good understanding of development and a keen eye for detail.</span>
            <div className='skilBars'>
                <div className='skillBar'>
                    <img src={webdesign} alt='webdesign' className='skillBarImg' />
                    <div className='skillBarText'>
                        <h2>Website Design</h2>
                        <p>I have strong understanding about Frontend and Backend development.</p>
                    </div>
                    <br/>
                    <img src={ml} alt='ml' className='skillBarImg' />
                    <div className='skillBarText'>
                        <h2>Machine Learning</h2>
                        <p>I am familiar with ML Algorithms and have done project Face Recognition System using AI and ML. </p>
                    </div>
                    <img src={dsa} alt='dsa' className='skillBarImg' />
                    <div className='skillBarText'>
                        <h2>DSA & Problem Solving   </h2>
                        <p>I have good understanding of Data Structure and Algorithm and have strong problem-solving skills.</p>
                    </div>
                    <img src={language} alt='language' className='skillBarImg' />
                    <div className='skillBarText'>
                        <h2>Languages</h2>
                        <p>I am proficient in HTML,CSS,JavaScript,React Js,Java,Python,C++.</p>
                    </div>

                </div>
            </div>
        </section>
    )
}
export default Skills