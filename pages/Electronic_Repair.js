import React from 'react'
import Head from '../MyComponents/Head'
import Info from '../MyComponents/Info'
import Image_Text from '../MyComponents/Image_Text'
import Crd1 from '../MyComponents/Crd1'
import Footer from '../MyComponents/Footer'
import Body from '../MyComponents/Body'
import Image2 from '../MyComponents/Image2'


export default function Electronic_Repair() {
    return (
        <div className="Electronic_Repair">
            <Head />
            <br />
            <br />
            <br />
            <br />
            <Image2 title="ELECTRONIC REPAIR" />
            <Info />
            <Crd1 />
            <Body title1="Electronic Repair by Aryavart" />
            <Footer />
        </div>
    )
}
