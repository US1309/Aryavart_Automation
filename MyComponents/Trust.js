import React from 'react'
import assured from '../Images/assured.jpeg'

export default function Trust() {
    return (
        <div classNameName="container">
            <div className="card mb-3 trustContainer" style={{maxWidth: "2474",padding:"17px"}}>
                <div className="row g-0">
                    <div className="col-md-8">
                        <div className="card-body">
                            <h5 className="card-title trustcard-title trustcard-title2">Your Trust Is Our Motivation For Constant Improvement.</h5>
                            <br />
                            <h3 className="card-title trustcard-title trustcard-title2">GET IN TOUCH</h3>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <img src={assured} className="img-fluid rounded-start trustimg" alt="..." />
                    </div>
                </div>
            </div>
        </div>
    )
}
