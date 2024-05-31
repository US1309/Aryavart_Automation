import React from 'react'
import insta from '../Images/insta.png'
import facebook from '../Images/facebook.png'
import twitter from '../Images/twitter.png'
import hm from '../Images/home.png'
import loc from '../Images/location2.png'
import phn from '../Images/phone.png'
import mail from '../Images/mail.png'
import google from '../Images/google.png'
import el from '../Images/el.jpg'
import company_logo from '../Images/comp_logo_main.png'

export default function Footer2() {
  return (
    <div className="footer">
        <div className="compLogo">
        <img className='imgComp' src={company_logo} alt=""/>
        <br />
        <p className='ft'>We are focused on supporting your installed control systems and drives through spare parts and repair services. We have a large inventory of high quality, surplus control system parts, drives and servo motors.</p>
      </div>

      <ul className="ft3">
        <h3 className='fh'>Repair Services</h3>
        <li className="ft2">Electronics Repairs</li>
        <li className="ft2">Servo Motor Repair</li>
        <li className="ft2">Remanufacturing</li>
        <li className="ft2">Refurbished</li>
        <li className="ft2">Service Exchange</li>
        <li className="ft2">Conversion</li>
        <li className="ft2">safety Equipment</li>
      </ul>

      <div className="con">
        <h3 className='tit fh'>Contact Us</h3>
        <li className="con1">
          <a href="#"><ul className="ft2"><img src={hm} alt="" className="imgLogo1" />&nbsp;Aryavart Automation</ul></a>
          <a href="#"><ul className="ft2"><img src={loc} alt="" className="imgLogo1" />&nbsp;Location</ul></a>
          <a href="#"><ul className="ft2"><img src={phn} alt="" className="imgLogo1" />&nbsp;Phone Number</ul></a>
          <a href="#"><ul className="ft2"><img src={mail} alt="" className="imgLogo1" />&nbsp;Mail</ul></a>
        </li>
        </div>

      <div className='last'>
        <hr className='divider2'/>
        <p className='fp'>Privacy Policy | © 2024  All rights reserved</p>
      </div>
    </div>
  )
}
