import React from 'react'
import callCenter from '../Images/call6.jpg'
import clock from '../Images/clock.png'
import flag from '../Images/flag.png'
import globe from '../Images/global.png'
import service from '../Images/rep.png'
import warrenty from '../Images/warranty1.png'

export default function Contact_us_form() {
  return (
    <div className="container row">
      <div className="col-md-6 col-sm-6 col-12 contact">
        <h1 className='form-txt1'>Enquire Now</h1>
        <div className="input-group mb-3">
          <input type="text" className="form-control" placeholder="Username" aria-label="Username" aria-describedby="basic-addon1" />
        </div>
        <div className="mb-3">
          <label for="exampleFormControlInput1" className="form-label form-txt">Email address</label>
          <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com" />
        </div>
        <br />
        <label for="inputZip" className='form-txt'>Zip</label>
          <input type="text" className="form-control col-md-3" id="inputZip" />
        <br />
        <div className="input-group mb-3">
          <input type="text" className="form-control" placeholder="Phone Number" aria-label="Username" />
        </div>
        <br />
        <label type="text"><b>Enquiry Type*</b></label>
        <br />
        <div className="form-check form-check-inline">
          <input className="form-check-input" type="checkbox" id="inlineCheckbox1" value="option1" />
          <label className="form-check-label form-txt" for="inlineCheckbox1">Repair</label>
        </div>
        <div className="form-check form-check-inline">
          <input className="form-check-input" type="checkbox" id="inlineCheckbox2" value="option2" />
          <label className="form-check-label form-txt" for="inlineCheckbox2">Service Exchange</label>
        </div>
        <div className="form-check form-check-inline">
          <input className="form-check-input" type="checkbox" id="inlineCheckbox3" value="option3" />
          <label className="form-check-label form-txt" for="inlineCheckbox3">Conversion</label>
        </div>
        <div className="form-check form-check-inline">
          <input className="form-check-input" type="checkbox" id="inlineCheckbox3" value="option3" />
          <label className="form-check-label form-txt" for="inlineCheckbox3">Refurbished</label>
        </div>
        <br />
        <br />
        <div className="mb-3">
          <textarea className="form-control" id="exampleFormControlTextarea1" placeholder='Your Enquiry' rows="3"></textarea>
        </div>
        <button className='submitBtn'>SUBMIT</button>
      </div>
      <div className="col-md-5 col-sm-6 col-12">
        <div className="row newCrdRow"><i><img className='ServiceLogo' src={warrenty} alt="" /></i>6 Months Warrenty</div>
        <div className="row newCrdRow"><i><img className='ServiceLogo' src={service} alt="" /></i>Experienced Engineers</div>
        <div className="row newCrdRow"><i><img className='ServiceLogo' src={clock} alt="" /></i>Emergency Repairs</div>
        <div className="row newCrdRow"><i><img className='ServiceLogo' src={globe} alt="" /></i>International Sales Team</div>
        <div className="row newCrdRow"><i><img className='ServiceLogo' src={flag} alt="" /></i>State of the Art Workshops</div>
        <div class="card bg-dark text-white callCenterImgMain">
          <img src={callCenter} class="card-img callCenterImg" alt="..." />
          <div class="card-img-overlay">
            <h5 class="card-title  cl" >Call us:</h5>
            <p class="cl" >+91 – 9218333600</p>
            <p className='cl'>or</p>
            <p className='cl'>Request a callback today and we will call you back shortly</p>
            <a href="#"><button type='button' className='Service1Btn'>REQUEST A CALLBACK</button></a>
          </div>
        </div>
      </div>
    </div>
  )
}
