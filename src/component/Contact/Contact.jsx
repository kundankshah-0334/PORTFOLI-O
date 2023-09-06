import React from 'react'
import "./contact.css"


function Contact() {
  return (
    <div id='contact' className='contact bg-dark justify-content-center align-items-center d-flex flex-column w-100 '>
        <div className='w-50 justify-content-center align-items-center d-flex flex-column'>
            <p className='what '>What is Next ?</p>
            <h1 className='text-white'>Get In Touch</h1>
            <p className='detail'>What sets me apart is my ability to bridge the gap seamlessly. I thrive in collaborative, where I can work closely with designers, UX user-centric design and am committed to interfaces that users love to interact with</p>
            <button className='bg-transparent'>Say Hello</button>
        </div>
    </div>
  )
}

export default Contact
