import React from 'react'
import { Link } from 'react-router-dom'
import comp_logo from '../Images/comp_logo_main.png'

export default function Head() {
    return (
        <div className="container3">
                <div className="itemHead"><a href="/"><img className='logoHeight' src={comp_logo} alt="" /></a></div>

                <div className="itemHead2">
                    <Link className='headW' to={'/'}>Home</Link>
                </div>
                <div className="itemHead2">
                    <Link className='headW' to={'/about'}>About</Link>
                </div>
                <div className="itemHead2"><Link className='headW' to={'/services'}>Service</Link>
                    <ul className="dropdown-menu">
                        <li><a className="dropdown-item" href="/electronic_repair">Electronic Repair</a></li>
                        <li><a className="dropdown-item" href="/servo-motor-repairing">Servo Motor Repairing</a></li>
                        <li><a className="dropdown-item" href="#">Remanufacturing</a></li>
                        <li><a className="dropdown-item" href="#">Refurbished</a></li>
                        <li><a className="dropdown-item" href="#">Service Exchange</a></li>
                    </ul>
                </div>
                <div className="itemHead2"><Link className='headW' to={'/'}>Categories</Link></div>
                <div className="itemHead2"><Link className='headW' to={'/contact'}>Contact us</Link></div>
            </div>
    )
}
