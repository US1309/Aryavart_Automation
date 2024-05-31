import React from 'react'
import verify from '../Images/warranty1.png'
import repair from '../Images/rep.png'
import flag from '../Images/flag.png'
import globe from '../Images/global.png'
import test from '../Images/test.png'

export default function Crd() {
    return (
        <div className="urr">
            <div className="crd">
                <span><img src={verify} alt="" className='iconImg' /></span>
                <div className="wr">6 Months Warranty</div>
            </div>
            <div className="crd">
                <span><img src={repair} alt="" className='iconImg' /></span>
                <div className="wr">Experienced Repair Engineers</div>
            </div>
            <div className="crd">
                <span><img src={flag} alt="" className='iconImg' /></span>
                <div className="wr">Innovative Workshops</div>
            </div>
            <div className="crd" id='crdBuilt'>
                <span><img src={test} alt="" className='iconImg' /></span>
                <div className="wr">Custom Built Test Rigs</div>
            </div>
            <div className="crd" id='crdGlobal'>
                <span><img src={globe} alt="" className='iconImg' /></span>
                <div className="wr">Global Sales Team</div>
            </div>
        </div>
    )
}
