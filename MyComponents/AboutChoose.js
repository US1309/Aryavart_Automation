import React from 'react'
import verify from '../Images/verify.png'

export default function AboutChoose() {
  return (
    <div className='grid-container2'>
        <div className="grid-item2">
        <h1 className="aboutChoose">Why Choose Us</h1>
        </div>
        <div className="grid-item2">
        <p><img className='verify' src={verify} alt="" />   Quality services & very affordable cost</p>
        <p><img className='verify' src={verify} alt="" />   Check current stutus of your repairable item on our website any time</p>
        <p><img className='verify' src={verify} alt="" />   When we recieve your material we generate a job code which can be used to track</p>
        <p><img className='verify' src={verify} alt="" />   Our refurbished parts are properly tested before delivery</p>
        </div>
        <div className="grid-item2">
        <p><img className='verify' src={verify} alt="" />   We can repair at component level</p>
        <p><img className='verify' src={verify} alt="" />   You can search our control system's parts and products and purchase online</p>
        <p><img className='verify' src={verify} alt="" />   Optimizing production by ensuring minimum outages and downtime & Full control over the performance, production, operational issues and project risks</p>
        <p><img className='verify' src={verify} alt="" />   We are commited for timely delievery</p>
        </div>
    </div>
  )
}
