import React from 'react'
import logo from "../Images/pick&drop.png"
import logo1 from "../Images/send_parts.jpg"
import logo2 from "../Images/question.jpg"
import logo8 from '../Images/el.jpg'
import logo9 from '../Images/el3.jpg'
import logo10 from '../Images/elec7.jpg'

export default function Scoller() {
  return (
    <div className="scroller">
      <div id="carouselExampleAutoplaying" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src={logo9} className="d-block w-100 omg" alt="..."/>
          </div>
          <div className="carousel-item">
            <img src={logo8} className="d-block w-100 omg" alt="..." />
          </div>
          <div className="carousel-item">
            <img src={logo10} className="d-block w-100 omg" alt="..." />
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
          <span className="carousel-control-prev-icon arrow1" aria-hidden="false"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
          <span className="carousel-control-next-icon arrow1" aria-hidden="false"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  )
}
