import React from 'react'
import Headers from '../MyComponents/Head'
import Info from '../MyComponents/Info'
import Image_Text from '../MyComponents/Image_Text'
import Crd1 from '../MyComponents/Crd1'
import Footer from '../MyComponents/Footer2'
import Body from '../MyComponents/Body'
import Body_servoMotor from '../MyComponents/Body_servoMotor'
import service from '../Images/service_repair.jpg'
import Service1 from '../MyComponents/Service1'
import SerCrd from '../MyComponents/SerCrd'
import Service2 from '../MyComponents/Service2'
import Service3 from '../MyComponents/Service3'
import servo from '../Images/servo.jpg'
import Image2 from '../MyComponents/Image2'

export default function Servo_Motor_repairing() {
  return (
    <div className="servoMotor">
      <Headers />
      <br />
      <br />
      <br />
      <Image2 title="SERVO MOTOR REPAIRING" img={service} />
      <div className="container-fluid">
        <div className='container'>
          <br />
          <SerCrd />
          <br />
          <Service1 />
          <br />
          <button type='button' className='BodyBtn2'>ENQUIRY TODAY FOR A FREE SERVO MOTOR REPAIR EVALUTION</button>
          <img src={servo} alt="" className='servoImg' />

          <Service2 />
          <br />
          <br />
          <Service3 />
        </div>
      </div>
      <hr className="divider" />
      <Footer />
    </div>
  )
}