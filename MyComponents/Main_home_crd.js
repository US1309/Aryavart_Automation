import React from 'react'

import warrenty from '../Images/warranty1.png'
import repair from '../Images/rep.png'
import flag from '../Images/flag.png'
import globe from '../Images/global.png'
import test from '../Images/test.png'

export default function Main_home_crd() {
    return (
        <div className='container' style={{ display: "flex" }}>
            <div className="row">
            <div className='main col-sm-12 col-md-2 col-lg-2' >
                    <div className="main_top_img col-3 col-xs-3 col-sm-3">
                        <img src={warrenty} className="main_img" alt="..." />
                    </div>
                    <div className="main_text col-9 col-xs-9 col-sm-9" >
                        <h5 className="main_font">6 Months Warranty</h5>
                    </div>
                </div>


                <div className='main main2 col-sm-12 col-md-2 col-lg-2'>
                    <div className="main_top_img col-3 col-xs-3 col-sm-3">
                        <img src={repair} className="main_img" alt="..." />
                    </div>
                    <div className="main_text col-9 col-xs-9 col-sm-9" >
                        <h5 className="main_font">Experienced Repair Engineers</h5>
                    </div>
                </div>


                <div className='main main2 col-sm-12 col-md-2 col-lg-2' >
                    <div className="main_top_img col-3 col-xs-3 col-sm-3">
                        <img src={flag} className="main_img" alt="..." />
                    </div>
                    <div className="main_text col-9 col-xs-9 col-sm-9" >
                        <h5 className="main_font">Innovative Workshops</h5>
                    </div>
                </div>


                <div className='main main2 col-sm-12 col-md-2 col-lg-2' >
                    <div className="main_top_img col-3 col-xs-3 col-sm-3">
                        <img src={globe} className="main_img" alt="..." />
                    </div>
                    <div className="main_text col-9 col-xs-9 col-sm-9" >
                        <h5 className="main_font">Custom Build Test Rigs</h5>
                    </div>
                </div>


                <div className='main main2 col-sm-12 col-md-2 col-lg-2' >
                    <div className="main_top_img col-3 col-xs-3 col-sm-3">
                        <img src={test} className="main_img" alt="..." />
                    </div>
                    <div className="main_text col-9 col-xs-9 col-sm-9" >
                        <h5 className="main_font">Global Sales Team</h5>
                    </div>
                </div>
            </div>


            {/* 

           
            <div className="card wholeCrd" style={{ maxWidth: 540 }}>
                <div className="row g-0">
                    <div className="col-md-4">
                        <img src={test} className="img-fluid rounded-start HomeCrdImg" alt="..." />
                    </div>
                    <div className="col-md-8">
                        <div className="Homecard-body">
                            <h5 className="homeCrdCard-title">Global Sales Team</h5>
                            <p className="card-text"></p>
                        </div>
                    </div>
                </div>
            </div> */}
        </div>
    )
}
