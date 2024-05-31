import React from 'react'
import el2 from '../Images/el2.jpg'
import arrow from '../Images/arrow.png'

export default function Quotes(){
    return (
<div className="quotes " >
            <div className="card mb-3 bgr1 ">
                    <div className="col-md-4 hh1">
                        <img src={el2} className="img-fluid rounded-start hh " alt="..." />
                    </div>
                    <div className="col-md-8 my4">
                        <div className="card-body bgr " >
                            <h1 className="card-title5">Who we are?</h1>
                            <p className="card-text"><b>Company Name</b> is extremely proud to introduce itself as a pioneer in the field of industrial automation repairing. It is focused on supporting your installed control systems and drives through spare parts and repair services. We have a large inventory of high quality, control system parts, drives and servo motors. We also provides new hardware and software products to help support your existing installation or utilize the latest technology. We have a an experienced repairing team, extensive test and repair facilities. You can order online or generate a quote.</p>
                            <div className="arrow">
                            <a href="/contact" className="btn contBtn btn-primary">Contact us<img src={arrow} alt="" style={{paddingLeft:"1rem"}}/></a>
                            </div>
                        </div>
                </div>
            </div>
        </div>
    )
}
