import React , {useEffect} from 'react'
import "./Project.css"
import Aos from "aos"
import "aos/dist/aos.css"

function Project() {
    useEffect( () => {
        Aos.init({duration : 1500})
    } ,[])
  return (
    <div id='project' className='bg-dark w-100 project-section'>
    <div className='container'>
    <h3 className='px-5 pt-5 text-white'>My Projects</h3>
    <div class="row row-cols-1 row-cols-md-3 g-4 p-5 text-center">
  <div class="col" data-aos = "fade-right">
    <div class="card">
      <img src="/image/v1.jpg" class="card-img-top" alt="..." />
      <div class="card-body">
        <h5 class="card-title">Voting System</h5>
        <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
        <button className='bg-transparent'>Load More !</button>
      </div>
    </div>
  </div>
  <div class="col" data-aos = "zoom-in">
    <div class="card">
      <img src="/image/g1.jpeg" class="card-img-top" alt="..." />
      <div class="card-body">
        <h5 class="card-title">Growth Analytics</h5>
        <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
        <button className='bg-transparent'>Load More !</button>
      </div>
    </div>
  </div>
  <div class="col" data-aos = "fade-left">
    <div class="card">
      <img src="/image/r1.png" class="card-img-top" alt="..." />
      <div class="card-body">
        <h5 class="card-title">Real Time Collaboration</h5>
        <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content.</p>
        <button className='bg-transparent'>Load More !</button>
      </div>
    </div>
  </div>
  
</div>
    </div>
      
    </div>
  )
}

export default Project
