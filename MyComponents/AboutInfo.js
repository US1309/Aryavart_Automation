import React from 'react'
import logo from "../Images/pnd.png"
import logo1 from "../Images/eva2.jpg"
import logo2 from "../Images/question.jpg"

export default function AboutInfo() {
  return (
    <div className="tab">
      <table className="table table-hover">
        <a href="#">
          <div className="card cardEdit1 mb-3" >
            <div className="row g-0" src="#">
              <div className="col-md-4">
                <img src={logo} className="img-fluid rounded-start infoCrd" alt="..." />
              </div>
              <div className="col-md-8">
                <div className="card-body cdbd">
                  <h5 className="card-title card-titleRes">Pick And Drop Of Your Item To Be Repaired</h5>
                  <p className="card-text cardTextInfo">We can pick your repair items up from anywhere</p>
                </div>
              </div>
            </div>
          </div>
        </a>
        <a href="#">
          <div className="card cardEdit1 mb-3">
            <div className="row g-0">
              <div className="col-md-4">
                <img src={logo1} className="img-fluid rounded-start infoCrd" alt="..." />
              </div>
              <div className="col-md-8">
                <div className="card-body cdbd">
                  <h5 className="card-title card-titleRes">Free Evaluation</h5>
                  <p className="card-text cardTextInfo">Send your part to us for a free evaluation and quotation</p>
                </div>
              </div>
            </div>
          </div>
        </a>
        <a href="#">
          <div className="card cardEdit1 mb-3">
            <div className="row g-0">
              <div className="col-md-4">
                <img src={logo2} className="img-fluid rounded-start infoCrd" alt="..." />
              </div>
              <div className="col-md-8">
                <div className="card-body cdbd">
                  <h5 className="card-title card-titleRes">Enquire today for Free Repair Quotation</h5>
                  <p className="card-text cardTextInfo">Enquire today for a free no obligation quote</p>
                </div>
              </div>
            </div>
          </div>
        </a>
      </table>
    </div>
  )
}
