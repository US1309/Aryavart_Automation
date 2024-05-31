import React from 'react'
import logo3 from '../Images/electronic.jpg'
import elec_repair from '../Images/elec_repair.jpg'
import motor from '../Images/motor.jpg'
import conversion from '../Images/conversion2.jpg'
import enquiry from '../Images/enquiry.jpg'

export default function Cards() {
    return (
        <div className="cont5">
            <div className="img-crd" >
            <div className="card text-bg-dark" >
                <div className="ut">
                <img src={elec_repair} className="card-img" alt="..." />
                <div className="card-img-overlay fm ug">
                    <div className="ut1">
                    <h5 className="card-title card-titleRes ty elec">Electronic Repairs</h5>
                    <p className="card-text ty hid">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                    </div>
                    </div>
                </div>
            </div>
        </div>

        <div className="img-crd">
            <div className="card text-bg-dark">
                <div className="ut">
                <img src={motor} className="card-img" alt="..."/>
                <div className="card-img-overlay fm ug" >
                    <div className="ut1">
                    <h5 className="card-title card-titleRes ty elec">Electronic Repairs</h5>
                    <p className="card-text ty hid">Our dedicated motor repair workshops and custom build test rigs ensures we can repair a wide range of motors.</p>
                    </div>
                    </div>
                    </div>
            </div>
        </div>

        <div className="img-crd">
            <div className="card text-bg-dark">
                <div className="ut">
                <img src={conversion} className="card-img" alt="..."/>
                <div className="card-img-overlay fm ug" >
                    <div className="ut1">
                    <h5 className="card-title card-titleRes ty elec">Conversion</h5>
                    <p className="card-text ty hid">Migrate to newer faster technology to improve productivity and achieve business goals</p>
                    </div>
                    </div>
                    </div>
            </div>
        </div>


        <div className="img-crd">
            <div className="card text-bg-dark">
            <div className="ut">
                <img src={enquiry} className="card-img" alt="..." />
                <div className="card-img-overlay fm ug" >
                    <div className="ut1" >
                    <h5 className="card-title card-titleRes ty elec">Enquire Now</h5>
                    <p className="card-text ty hid">Any Make and any model - enquire now for a free quotation.</p>
                    </div>
                </div>
                </div>
            </div>
        </div>
        </div>
    )
}
