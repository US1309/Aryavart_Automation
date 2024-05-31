import React from 'react'
import Head from '../MyComponents/Head'
import Info from '../MyComponents/Info'
import Image_Text from '../MyComponents/Image_Text'
import Contact_us_form from '../MyComponents/Contact_us_form'
import Footer from '../MyComponents/Footer2'
import service from '../Images/services.jpg'
import SerCrd from '../MyComponents/SerCrd'
import Image2 from '../MyComponents/Image2'

export default function Contact_us() {
  return (
    <div className="contact">
        <Head/>
        <br />
     <br />
     <br />
        <Image2 title="CONTACT" img={service}/>
         <div className="container-fluid">
          <br />
          <SerCrd/>
          <br />
          <Contact_us_form/>
         </div>
        <hr className="divider"/>
        <Footer/>
    </div>
  )
}
