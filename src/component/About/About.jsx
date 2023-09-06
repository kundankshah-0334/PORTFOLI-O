import React, { useEffect } from 'react'
import "./About.css"
import Aos from "aos"
import "aos/dist/aos.css"


function About() {
    useEffect( () => {
        Aos.init({duration : 1500})
    } ,[])
  return (
    <div>
        <div id='about' className='about bg-dark w-100 '>
            <div className='row wrapper'>
                <div className='about-text col-12 col-md-6 col-lg-6 px-5' data-aos = "fade-left">

                    <h3>About Me</h3>
                    <p>On the back-end, I'm proficient in Node.js and have a knack for building robust solutions. My database expertise extends performance and ensuring the seamless the client and server.</p>
                    <p>What sets me apart is my ability to bridge the gap seamlessly. I thrive in collaborative, where I can work closely with designers, UX user-centric design and am committed to interfaces that users love to interact with.</p>

                    <div className='row lang'>
                       <div className='col-6'>
                            <p><span> → </span>JavaScript </p>
                            <p><span> → </span>React JS</p>
                            <p><span> → </span>Node JS</p>
                       </div>

                       <div className='col-6'>
                            <p><span> → </span>Mongoose </p>
                            <p><span> → </span>Larawal</p>
                            <p><span> → </span>PHP</p>
                       </div>
                    </div>

                </div>
                <div className='about-image col-12 col-md-6 col-lg-6' data-aos = "fade-right">
                    <img className='a-image' src='/image/about.svg' alt='can not not find image'></img>
                </div>
            </div>
        </div>
    </div>
  )
}

export default About



 
