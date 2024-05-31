import React from 'react'
import warehouse from '../Images/warehshe.jpg'

export default function AboutInfo2() {
  return (
    <div className='aboutinfosec'>
       <div className="grid-container">
        <div className="grid-item">
        <h3 className='about_blog_title'>Spare Parts and Repair Services for Installed Control Systems, Drives, & Servo Motors</h3>
       <br />
       <p className='aboutpara'>Aryavart Pvt Ltd is focused on supporting your installed control systems and drives through spare parts and repair services. We have a large inventory of high quality, surplus control system parts, drives and servo motors. We also provide many new hardware and software products to help support your existing installation or utilize the latest technology. We have a an experienced repairing team, extensive test and repair facilities. You can order online or generate a quote. You can also contact us by phone or e-mail.</p>
       <p className='aboutpara'>Advanced testing tools are used to diagnose quickly the root problem.</p>
        </div>
        <div className="grid-item">
        <img className='imgGrid' src={warehouse} alt="" />
        </div>
       </div>
    </div>
  )
}
