import React from 'react'
import logo from "../Images/pick&drop.png"
import logo1 from "../Images/send_parts.jpg"
import logo2 from "../Images/question.jpg"

export default function Info() {
  return (
    <div className="tab">
        <table className="table table-hover">
        <a href="#">
        <div className="card cardEdit1 CardEditRes mb-3" >
    <div className="row g-0" src="#">
      <div className="col-md-4">
        <img src={logo} className="img-fluid rounded-start infoCrd" alt="..."/>
      </div>
      <div className="col-md-8">
        <div className="card-body cdbd">
          <h5 className="card-title card-titleRes">Pick And Drop Of Your Item To Be Repaired</h5>
          <p className="card-text ServiceInfo">We can pick your repair items up from anywhere</p>
        </div>
      </div>
    </div>
  </div>
    </a>
  <a href="#">
  <div className="card cardEdit1 CardEditRes mb-3">
    <div className="row g-0">
      <div className="col-md-4">
        <img src={logo1} className="img-fluid rounded-start infoCrd" alt="..."/>
      </div>
      <div className="col-md-8">
        <div className="card-body cdbd">
          <h5 className="card-title card-titleRep">Send Us Your Part</h5>
          <p className="card-text ServiceInfo">Send your part to us for a free evaluation and quotation</p>
        </div>
      </div>
    </div>
  </div>
  </a>
  <a href="#">
  <div className="card cardEdit1 CardEditRes mb-3">
    <div className="row g-0">
      <div className="col-md-4">
        <img src={logo2} className="img-fluid rounded-start infoCrd" alt="..."/>
      </div>
      <div className="col-md-8">
        <div className="card-body cdbd">
          <h5 className="card-title card-titleRes">Free Repair Quoation</h5>
          <p className="card-text ServiceInfo">Enquire today for a free no obligation quote</p>
        </div>
      </div>
    </div>
  </div>
  </a>
</table>
    </div>
  )
}
