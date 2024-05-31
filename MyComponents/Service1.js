import React from 'react'
import callCenter from '../Images/call6.jpg'
import clock from '../Images/clock.png'
import flag from '../Images/flag.png'
import globe from '../Images/global.png'
import service from '../Images/rep.png'
import warrenty from '../Images/warranty1.png'

export default function Service1() {
  return (
    <div className='row service1'>
      <div className="col-md-7 col-sm-6 col-12">
        <h1 className='ServiceTitle1'>Servo Motor Repairing from Aryavart</h1>
        <p className="servicePara">Shawa servo motor repairing workshops in-house machinist and custom built test rigs have been designed to provide our customers with the very best servo motor repair service possible. We specialise in repairing motors from a broad range of manufacturers, therefore you can be safe in the knowledge we have the expertise to repair your faulty servo motor, no matter who manufactured the part. All our servo motor repairs come with the added security of 6 months whole of unit warranty.</p>
        <br />
        <p className="servicePara">Our team of skilled motor engineers can repair a wide range of motors including:</p>
        <div className='sr' href="#">AC Motors</div>
            <hr className="sr1"/>
            <div className='sr' href="#">DC Motors</div>
            <hr className="sr1"/>
            <div className='sr' href="#">Servo Motors</div>
            <hr className="sr1"/>
            <div className='sr' href="#">Stepper Motors</div>
            <hr className="sr1"/>
            <div className='sr' href="#">Slip Ring Motors</div>
            <hr className="sr1"/>
            <div className='sr' href="#">Spindle Motors</div>
            <br />
            
          <br />
          <br />
          
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
            <a href="#contact"><button type='button' className='Service1Btn'>REQUEST A CALLBACK</button></a>
          </div>
        </div>
      </div>
    </div>
  )
}
