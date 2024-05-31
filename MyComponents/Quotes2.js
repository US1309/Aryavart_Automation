import React from 'react'
import el2 from '../Images/el2.jpg'
import arrow from '../Images/arrow.png'

export default function Quotes2() {
    return (
        <div className='quotesContainer'>
            <div className="quotesItem">
                <img src={el2} alt="" className='quotesImg'/>
            </div>
            <div className="quotesItem">
                <h1 className="card-title5">Who we are?</h1>
                <p className="card-text"><b>Company Name</b> is extremely proud to introduce itself as a pioneer in the field of industrial automation repairing. It is focused on supporting your installed control systems and drives through spare parts and repair services. We have a large inventory of high quality, control system parts, drives and servo motors. We also provides new hardware and software products to help support your existing installation or utilize the latest technology. We have a an experienced repairing team, extensive test and repair facilities. You can order online or generate a quote.</p>
                <div className="arrow">
                    <a href="/contact" className="btn contBtn btn-primary">Contact us<img src={arrow} alt="" style={{ paddingLeft: "0.4rem",height: "24px",width:"30px"}} /></a>
                </div>
            </div>
        </div>
    )
}
