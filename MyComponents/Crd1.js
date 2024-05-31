import React from 'react'
import verify from '../Images/warranty1.png'
import repair from '../Images/rep.png'
import flag from '../Images/flag.png'
import call from '../Images/call6.jpg'
import globe from '../Images/global.png'
import test from '../Images/test.png'

export default function crd1() {
    return (
        <div className="hnav">
            <div className="urr1">
                <div className="crd1">
                    <span><img src={verify} alt="" className='img' /></span>
                    <div className="wr1">6 Months Warranty</div>
                </div>
                <div className="crd1">
                    <span><img src={repair} alt="" className='img' /></span>
                    <div className="wr1">Experienced Repair Engineers</div>
                </div>
                <div className="crd1">
                    <span><img src={flag} alt="" className='img' /></span>
                    <div className="wr1">Innovative Workshops</div>
                </div>
                <div className="crd1">
                    <span><img src={test} alt="" className='img' /></span>
                    <div className="wr1">Custom Built Test Rigs</div>
                </div>
                <div className="crd1">
                    <span><img src={globe} alt="" className='img' /></span>
                    <div className="wr1">Global Sales Team</div>
                </div>
                <div class="card text-bg-dark crd1img">
                    <img src={call} class="card-img card-img7" alt="..." />
                    <div class="card-img-overlay">
                        <h5 class="card-title  cl" >Call us:</h5>
                        <p class="cl" >+91 – 9218333600</p>
                        <p className='cl'>or</p>
                        <p className='cl' id='cl2'>Request a callback today and we will call you back shortly</p>
                        <a href="#"><button type='button' className='crd1Btn'>REQUEST A CALLBACK</button></a>
                    </div>
                </div>
            </div>
        </div>
    )
}
