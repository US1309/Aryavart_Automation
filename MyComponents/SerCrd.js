import React from 'react'
import { default as logo, default as logo1, default as logo2 } from "../Images/question.jpg"

export default function SerCrd() {
    return (
        <div className="row">
            <div className='col-md-4'>
                <div className="card mb-3 shadow-lg p-3 mb-5 bg-body rounded " id="serCrd1">
                    <div className="row g-0">
                        <div className="col-md-4 col-sm-4 col-4">
                            <img src={logo2} className="img-fluid rounded-start cardImg" alt="..." />
                        </div>
                        <div className="col-md-8 col-sm-8 col-8">
                            <div className="card-body">
                                <h5 className="card-title ContactCard-title">Pick And Drop Item</h5>
                                <p className="card-text ContactCard-text">We can pick your repair items up from anywhere.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='col-md-4'>
                <div className="card mb-3 shadow-lg p-3 mb-5 bg-body rounded ">
                    <div className="row g-0">
                        <div className="col-md-4 col-sm-4 col-4">
                            <img src={logo} className="img-fluid rounded-start cardImg" alt="..." />
                        </div>
                        <div className="col-md-8 col-sm-8 col-8">
                            <div className="card-body">
                                <h5 className="card-title ContactCard-title">Send Us Your Part</h5>
                                <p className="card-text ContactCard-text">Send your part to us for a free evaluation and quotation</p>
                                
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='col-md-4'>
                <div className="card mb-3 shadow-lg p-3 mb-5 bg-body rounded ">
                    <div className="row g-0">
                        <div className="col-md-4 col-sm-4 col-4">
                            <img src={logo1} className="img-fluid rounded-start cardImg" alt="..." />
                        </div>
                        <div className="col-md-8 col-sm-8 col-8">
                            <div className="card-body">
                                <h5 className="card-title ContactCard-title">Free Repair Quoation</h5>
                                <p className="card-text ContactCard-text">Enquire today for a free no obligation quote.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}
