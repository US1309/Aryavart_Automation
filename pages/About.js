import React from 'react'
import Head from '../MyComponents/Head'
import Info from '../MyComponents/Info'
import Image_Text from '../MyComponents/Image_Text'
import Contact_us_form from '../MyComponents/Contact_us_form'
import Footer from '../MyComponents/Footer2'
import service from '../Images/services.jpg'
import AboutInfo from '../MyComponents/AboutInfo'
import AboutInfo2 from '../MyComponents/AboutInfo2'
import AboutChoose from '../MyComponents/AboutChoose'
import AboutContact from '../MyComponents/AboutContact'
import SerCrd from '../MyComponents/SerCrd'
import Image2 from '../MyComponents/Image2'


export default function () {
  return (
    <div className='About'>
        <Head/>
        <br />
     <br />
     <br />
        <Image2 title="ABOUT US" img={service}/>
        <div className="container">
        <br />
        <SerCrd/>
        <AboutInfo2/>
        <AboutChoose/>
        <AboutContact/>
        </div>
        <br />
        <br />
        <Footer/>
    </div>
  )
}
