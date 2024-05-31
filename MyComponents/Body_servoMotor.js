import React from 'react'
import servo from '../Images/servo.jpg'

export default function Body_servoMotor(props) {
  return (
    <div className="mainBody2">
        <div className="secondary2">
        <h1 className='ServiceTitle'>{props.title1}</h1>
          <div className="passage1">
            <p className='pgTop'>Shawa servo motor repairing workshops in-house machinist and custom built test rigs have been designed to provide our customers with the very best servo motor repair service possible. We specialise in repairing motors from a broad range of manufacturers, therefore you can be safe in the knowledge we have the expertise to repair your faulty servo motor, no matter who manufactured the part. All our servo motor repairs come with the added security of 6 months whole of unit warranty.</p>
            <br />
            <div className="passage2">
            <p className='pg'>Our team of skilled motor engineers can repair a wide range of motors including:</p>
            <div className='sr' href="#">AC Motors</div>
            <hr className="sr1"/>
            <div className='sr' href="#">DC Motors</div>
            <hr className="sr1"/>
            <div className='sr' href="#">Servo Motors</div>
            <hr className="sr1"/>
            <div className='sr' href="#">Stepper Motors</div>
            <hr className="sr1"/>
            <div className='sr' href="#">Slip Ring Motors</div>
            <hr className="sr1"/>
            <div className='sr' href="#">Spindle Motors</div>
            <br />
          </div>
          <button type='button' className='BodyBtn2'>ENQUIRY TODAY FOR A FREE SERVO MOTOR REPAIR EVALUTION</button>
          <br />
          <br />
            <img src={servo} alt="" className='servoImg'/>
          </div>
          <br/>
          <div className="passage3">
            <h1 className='ServiceTitle'>How does the Servo Motor Repairing service work?</h1>
            <p className='pg'>Your servo motor will go through a rigorous inspection, repair and testing process. The below list highlights some of the processes involved:</p>
            <br />
            <p className='pg1'>Servo Motor initially inspected for obvious mechanical damage to electrical connectors, fixings and the drive shaft.</p>
            <hr className="sr2"/>
            <p className='pg1'>Various electrical tests completed on servo motors including an AC drop test and insulation resistance (IR) testing to ensure that servo motor windings are in good working order.</p>
            <hr className="sr2"/>
            <p className='pg1'>Insulation resistance is temperature-sensitive, when the temperature increases, insulation resistance decreases (If the windings appear short then servo motor to be rewound).</p>
            <hr className="sr2"/>
            <p className='pg1'>The feedback devices to be tested as appropriate. Tacho to be drop tested, resolver and encoder tested using Mitchell Rig.</p>
            <hr className="sr2"/>
            <p className='pg1'>Our Mitchell Rig allows us to ascertain the correct lockup angle relationship of the feedback device to the servo motor windings.</p>
            <hr className="sr2"/>
            <p className='pg1'>Servo motors dismantled down to their component parts, casing to be sandblasted (if required), jet-washed and then stoved to ensure that all contaminates are removed from both the internal and external parts of the motor.</p>
            <hr className="sr2"/>
            <p className='pg1'>Servo Motor initially inspected for obvious mechanical damage to electrical connectors, fixings and the drive shaft.</p>
            <hr className="sr2"/>
            <p className='pg1'>Over time too much or too little lubrication creates heat through pressure or friction and this can create noise, meaning that the bearings have failed.</p>
            <hr className="sr2"/>
            <p className='pg1'>New bearings and oil seals fitted as part of the service to improve the servo motors life cycle.</p>
            <hr className="sr2"/>
            <p className='pg1'>On completion of the service we spray paint the motor.</p>
            <hr className="sr1"/>
            <p className='pg1'>To ensure servo motors run correctly on-site, testing at various speeds is undertaken to test functionality</p>
            <hr className="sr1"/>


            <button type='button' className='BodyBtn2'>ENQUIRE TODAY FOR FREE SERVO MOTOR REPAIR EVALUATION</button>
          </div>
          <br />
          <br />
          <div className="passage4">
            <h1 className='ServiceTitle'>How does the Electronic Repair service work?</h1>
            <br />
            <p className='pg'>Shawa follows a rigorous and thorough repair procedure to ensure your equipment is repaired to a high standard and returned to you as soon as possible.</p>
            <br />
            <p className='pg'>The Repair procedure is as follows:</p>
            <br />
            <p className='pg'><b>STEP 1: </b> Collection of the item to be repaired from your premises.</p>
            <br /> 
            <p className='pg'><b>STEP 2: </b>Thorough cleaning of equipment to remove any possible contamination.</p>
            <br />
            <p className='pg'><b>STEP 3: </b> Diagnostic testing to locate defective components (the entire unit is checked even if the problem is identified during the early stages).</p>
            <br />
            <p className='pg'><b>STEP 4: </b> Circuit analysis on all electronic products to isolate marginal components.</p>
            <br />
            <p className='pg'><b>STEP 5: </b>  Replacement of defective and marginal components with parts that meet or exceed original specifications.</p>
            <br />
            <p className='pg'><b>STEP 6: </b> Verification of total circuit board quality using state-of-the-art automated testing equipment.</p>
            <br />
            <p className='pg'><b>STEP 7: </b> Packing and shipping of repaired equipment. Repaired equipment is protected by a FULL 12-month warranty covering the entire unit, not just the repaired components.</p>
            <br />
          </div>
          <br />
          <br />
          <div className="passage3">
            <h1 className='ServiceTitle2'>Servo Motor Repairing Lead Times</h1>
            <p className='pg'>We pride ourselves on the quality of our motor repair service and understand the effect a faulty machine has on our customer’s production. This is why we have a number of servo motor repair options to suit your requirements:</p>
            <br />
            <h2 className='ServiceTitle2'>Standard Electronic Repairs</h2>
            <p className='pg'>Up to 10 workings days*</p>
            <br />
            <h2 className='ServiceTitle2'>Emergency Electronic Repairs</h2>
            <p className='pg'>Up to 3 working days.*</p>
            <p className='pg'>*Subject to parts and availability</p>
            <button type='button' className='BodyBtn2' >BOOK YOUR SERVO MOTOR REPAIR TODAY</button>
            <br />
            <br />
            <h2 className='ServiceTitle2'>In house Machinist</h2>
            <p className="pg">Our motor workshop includes an in-house Machinist for manual Milling and Turning so we can offer a complete machining and motor repair service along with balancing, rewinds and re-banding.</p>
          </div>
          <br />
          <div className="blc">
          <div className="block1">
            <h3 className='ServiceTitle2 ServiceTitle3' >Motor Workshop</h3>
            <p className='pg5'>Shawa dedicated motor workshop is designed to meet all our customers repair needs.</p>
          </div>
          <div className="block1">
            <h3 className='ServiceTitle2 ServiceTitle3' >Servo Motor Engineers</h3>
            <p className='pg5'>Our experienced servo motor engineers repair all makes and models of motors.</p>
          </div>
          <div className="block1">
              <h3 className='ServiceTitle2 ServiceTitle3' >Custom Built Test Rigs</h3>
              <p className='pg5'>At Aaryavart, we have a huge array of custom build test rigs to fully functionally test your equipment.</p>
          </div>
          </div>
        </div>
    </div>
  )
}
