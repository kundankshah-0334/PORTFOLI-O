import React from 'react';
import "./Navbar.css";
 

function Navbar() {
  return (
    <div className='container'>
        <nav class="navbar navbar-expand-md navbar-light bg-transparent navbar-dark">
            <div class="container-fluid">
                <a class="navbar-brand" id='PortFolio' href="#">PortFolio</a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
                        <li class="nav-item">
                        <a class="nav-link" href="#home">Home</a>
                        </li>

                        <li class="nav-item">
                        <a class="nav-link" href="#about">About</a>
                        </li>

                        <li class="nav-item">
                        <a class="nav-link" href="#project">Projects</a>
                        </li>

                        <li class="nav-item">
                        <a class="nav-link" href="#contact">Contact</a>
                        </li>

                        <li class="nav-item">
                        <button className='bg-transparent'>Resume</button>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    </div>
  )
}

export default Navbar
