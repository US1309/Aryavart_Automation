import React from 'react'
import el2 from '../Images/el2.jpg'

export default function HomeQuotes() {
    return (
        <div className="container ">
            <div className="row">
            <div className="col-12 col-sm-12 col-md-5 col-lg-5 col-xl-6">
                <img src={el2} alt="" className='QuotesImg' />
            </div>
            <div className="col-12 col-sm-12 col-md-7 col-lg-7 col-xl-6">
                <h1 className="Quotescard-title homeQuotes">Who we are?</h1>
                <p className="Quotescard-text homeQuotes"><b>Company Name</b> is extremely proud to introduce itself as a pioneer in the field of industrial automation repairing. It is focused on supporting your installed control systems and drives through spare parts and repair services. We have a large inventory of high quality, control system parts, drives and servo motors. We also provides new hardware and software products to help support your existing installation or utilize the latest technology. We have a an experienced repairing team, extensive test and repair facilities. You can order online or generate a quote.</p>
                <div className='text-start'>
                <a href="#/contact"><button type="button" className="btn btn-primary">Contact Us</button></a>
                </div>
            </div>
            </div>
        </div>
    )
}