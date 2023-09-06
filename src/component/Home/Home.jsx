import React from 'react';
import Navbar from '../Nav/Navbar';
import "./Home.css";
import "bootstrap-icons/font/bootstrap-icons.css"
import Typewriter from "typewriter-effect"



function Home() {
  return (
    <div className='home bg-dark vh-100 w-100'>

      <Navbar />

      <div className='icons-container'>
        <ul className='icons'>
            <li><a href=''><i className="text-secondary bi bi-envelope"></i></a></li>
            <li><a href=''><i className="text-secondary bi bi-github"></i></a></li>
            <li><a href=''><i className="text-secondary bi bi-twitter"></i></a></li>

        </ul>
      </div>

      <div className='email-container'>
        <p>Kundanlal96580@gmail.com</p>
      </div>

      <main className='main'>
        <p className='hi-name'>Hi , I am </p>
        <h1 className='text-white'>Kundan K Sahu.</h1>
        <h2>
        <Typewriter
        options={{
            autoStart : true ,
            loop : true,
            delay : 50,
            strings : ["I Build Things For Web" , "I am A Full Stack Developer"]

        }} 
        />
        </h2>
        <p className='detail-about-me'>
          Hello, I'm a passionate and versatile Full Stack Developer<br></br> with a deep 
          love for building web applications that not only look <br></br>great but also deliver
           exceptional user experiences. My web development <br></br>journey has
            been an exciting one, marked by continuous learning and to excellence.
        </p>

        <button className='bg-transparent'>Check it out</button>
      </main>

    </div>
  )
}

export default Home;


 
