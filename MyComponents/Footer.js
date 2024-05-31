import React from 'react'
import insta from '../Images/insta.png'
import facebook from '../Images/facebook.png'
import twitter from '../Images/twitter.png'
import hm from '../Images/home.png'
import loc from '../Images/location.gif'
import phn from '../Images/phone.png'
import mail from '../Images/mail.png'
import google from '../Images/google.png'
import el from '../Images/el.jpg'
import company_logo from '../Images/comp_logo.png'

export default function Footer() {
  return (
    <div className="footer">
      <hr className='divider' />
      <li className="ft1">
        <h3>Quick Links</h3>
        <ul className="ft2">Home</ul>
        <ul className="ft2">Service</ul>
        <ul className="ft2">About</ul>
        <ul className="ft2">Terms</ul>
        <ul className="ft2">Privacy & Policy</ul>
      </li>
      <li className="ft3">
        <h3>Repair Services</h3>
        <ul className="ft2">Electronics Repairs</ul>
        <ul className="ft2">Servo Motor Repair</ul>
        <ul className="ft2">Remanufacturing</ul>
        <ul className="ft2">Refurbished</ul>
        <ul className="ft2">Service Exchange</ul>
        <ul className="ft2">Conversion</ul>
        <ul className="ft2">safety Equipment</ul>
      </li>
      <div className="compLogo">
        <img src={company_logo} alt="" style={{height:"9rem",width:"23rem"}}/>
        <p>We are focused on supporting your installed control systems and drives through spare parts and repair services. We have a large inventory of high quality, surplus control system parts, drives and servo motors.</p>
      </div>
      <div className="con">
        <h3 className='tit'>Contact Us</h3>
        <li className="con1">
          <a href="#"><ul className="ft2"><img src={hm} alt="" style={{ width: "3rem" }} />&nbsp;Aryavart Automation</ul></a>
          <a href="#"><ul className="ft2"><img src={loc} alt="" style={{ width: "3rem" }} />&nbsp;Location</ul></a>
          <a href="#"><ul className="ft2"><img src={phn} alt="" style={{ width: "3rem" }} />&nbsp;Phone Number</ul></a>
          <a href="#"><ul className="ft2"><img src={mail} alt="" style={{ width: "3rem" }} />&nbsp;Mail</ul></a>
        </li>
        </div>
        <div className="icons">
          <span>
            <a href="https://www.instagram.com/"><img src={insta} alt="" className='gp' /></a>
          </span>
          <span>
            <a href="https://www.facebook.com/"><img src={facebook} alt="" className='gp' href="facebook.com" /></a>
          </span>
          <span>
            <a href="https://twitter.com/i/flow/login"><img src={twitter} alt="" className='gp' href="twitter.com" /></a>
          </span>
          <span>
            <a href='https://www.google.com/'><img src={google} alt="" className='gp' href="google.com"/></a>
          </span>
        </div>
      <div className='last'>
        <p className='fp'>Privacy Policy | © 2024  All rights reserved</p>
      </div>
    </div>
  )
}
