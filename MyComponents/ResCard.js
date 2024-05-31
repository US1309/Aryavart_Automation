import React from 'react'
import elec_repair from '../Images/elec_repair.jpg'
import motor from '../Images/motor.jpg'
import conversion from '../Images/conversion2.jpg'
import enquiry from '../Images/enquiry.jpg'

export default function ResCard() {
    return (
        <div className="container-fluid">
            <div className="row">
                <img src={elec_repair} className="image col-12 col-sm-12 col-md-3 col-lg-3" />
                <div className="overlay">
                    <h5 className="Homecard-title">Electronic Repairs</h5>
                    <div className="text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</div>
                </div>



                <img src={motor} className="image col-12 col-sm-12 col-md-3 col-lg-3" />
                <div className="overlay">
                    <h5 className="Homecard-title">Electronic Motor</h5>
                    <div className="text">Our dedicated motor repair workshops and custom build test rigs ensures we can repair a wide range of motors.</div>
                </div>


                <img src={conversion} className="image col-12 col-sm-12 col-md-3 col-lg-3" />
                <div className="overlay">
                    <h5 className="Homecard-title">Conversion</h5>
                    <div className="text">Migrate to newer faster technology to improve productivity and achieve business goals</div>
                </div>

                <img src={enquiry} className="image col-12 col-sm-12 col-md-3 col-lg-3" />
                <div className="overlay">
                    <h5 className="Homecard-title">Enquire Now</h5>
                    <div className="text">Any Make and any model - enquire now for a free quotation.</div>
                </div>
            </div>
        </div>
    )
}
