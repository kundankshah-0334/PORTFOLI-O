import React ,  { useEffect } from 'react'
import "bootstrap/js/dist/tab"
import "./Experience.css"
import Aos from "aos"
import "aos/dist/aos.css"

function Experience() {
    useEffect( () => {
        Aos.init({duration : 1500})
    } ,[])
  return (
    <div className='d-flex exp flex-column justify-content-center align-items-center w-100 bg-dark'>
    <div data-aos = "zoom-in">
    <h2 className='Exp-heading'>Where I've Worked</h2>
        <div class="d-flex text-white mt-5" >
    <div class="nav flex-column nav-pills me-3 border-start" id="v-pills-tab" role="tablist" aria-orientation="vertical">
        <button class="nav-link active" id="v-pills-home-tab" data-bs-toggle="pill" data-bs-target="#v-pills-home" type="button" role="tab" aria-controls="v-pills-home" aria-selected="true">Comsis</button>
        <button class="nav-link" id="v-pills-profile-tab" data-bs-toggle="pill" data-bs-target="#v-pills-profile" type="button" role="tab" aria-controls="v-pills-profile" aria-selected="false">HBT</button>
        <button class="nav-link" id="v-pills-messages-tab" data-bs-toggle="pill" data-bs-target="#v-pills-messages" type="button" role="tab" aria-controls="v-pills-messages" aria-selected="false">Wipro</button>
        <button class="nav-link" id="v-pills-settings-tab" data-bs-toggle="pill" data-bs-target="#v-pills-settings" type="button" role="tab" aria-controls="v-pills-settings" aria-selected="false">TCS</button>
    </div>
    <div className="tab-content tab-detail" id="v-pills-tabContent">

        <div class="tab-pane   fade show active" id="v-pills-home" role="tabpanel" aria-labelledby="v-pills-home-tab">
            <h5>Engineer @ <a href="" >Comsis</a></h5>
             <h6 className='date'><span>December 2019 - April 2020</span></h6>
                <p>
                <span> → </span>
                I thrive in collaborative  user-centric design and sers love to interact with. sers love to interact with.
                </p>
                <p>
                <span> → </span>
                I thrive in collaborative  user-centric design and sers love to interact with. sers love to interact with.
                </p>
                <p>
                <span> → </span>
                I thrive in collaborative  user-centric design and sers love to interact with. sers love to interact with.
                </p>
        </div>

        <div class="tab-pane fade" id="v-pills-profile" role="tabpanel" aria-labelledby="v-pills-profile-tab">
        <h5>Engineer @ <a href="" >HBT</a></h5>
                <h6 className='date'><span>December 2019 - April 2020</span></h6>
                <p>
                <span> → </span>
                I thrive in collaborative  user-centric design and sers love to interact with. sers love to interact with.
                </p>
                <p>
                <span> → </span>
                I thrive in collaborative  user-centric design and sers love to interact with. sers love to interact with.
                </p>
                <p>
                <span> → </span>
                I thrive in collaborative  user-centric design and sers love to interact with. sers love to interact with.
                </p>
        </div>

        <div class="tab-pane fade" id="v-pills-messages" role="tabpanel" aria-labelledby="v-pills-messages-tab">
        <h5>Engineer @ <a href="" >Wipro</a></h5>
        <h6 className='date'><span>December 2019 - April 2020</span></h6>
                <p>
                <span> → </span>
                I thrive in collaborative  user-centric design and sers love to interact with. sers love to interact with.
                </p>
                <p>
                <span> → </span>
                I thrive in collaborative  user-centric design and sers love to interact with. sers love to interact with.
                </p>
                <p>
                <span> → </span>
                I thrive in collaborative  user-centric design and sers love to interact with. sers love to interact with.
                </p>
        </div>
        <div class="tab-pane fade" id="v-pills-settings" role="tabpanel" aria-labelledby="v-pills-settings-tab">
        <h5>Engineer @ <a href="" >TCS</a></h5>
        <h6 className='date'><span>December 2019 - April 2020</span></h6>
                <p>
                <span> → </span>
                I thrive in collaborative  user-centric design and sers love to interact with. sers love to interact with.
                </p>
                <p>
                <span> → </span>
                I thrive in collaborative  user-centric design and sers love to interact with. sers love to interact with.
                </p>
                <p>
                <span> → </span>
                I thrive in collaborative  user-centric design and sers love to interact with. sers love to interact with.
                </p>
        </div>
    </div>
 </div>
 </div>
 </div>
  )
}

export default Experience
