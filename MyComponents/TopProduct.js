import React from 'react'
import AM from '../Images/2094-AM01-S.jpg'
import V from '../Images/8V1090.jpg'
import AP from '../Images/ap.jpg'
import AP1 from '../Images/ap2.jpg'

export default function TopProduct() {
    return (
        <div className="topGrid">
            <div className='topContainer'>
                <a href="#">
                    <img className='tc' src={AM} alt="" />
                    <span class="fa fa-star checked"></span>
                    <span class="fa fa-star checked"></span>
                    <span class="fa fa-star checked"></span>
                    <span class="fa fa-star"></span>
                    <span class="fa fa-star"></span>
                    <div className="Topname">2094-AM-01-S</div>
                   
                </a>
            </div>
            <div className='topContainer'>
                <a href="#">
                    <img className='tc' src={V} alt="" />
                    <div className="Topname">8V1090-00-2</div>
                </a>
            </div>
            <div className='topContainer'>
                <a href="#">
                    <img className='tc' src={AP} alt="" />
                    <div className="Topname">Acopos 1180 Servo Drive</div>
                </a>
            </div>
            <div className='topContainer'>
                <a href="#">
                    <img className='tc' src={AP1} alt="" />
                    <div className="Topname">PacDrive MC-4</div>
                </a>
            </div>
        </div>
    )
}
