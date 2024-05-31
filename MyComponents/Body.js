import React from 'react'
import passageImg from '../Images/el3.jpg'

export default function Body(props) {
  return (
    <div className="mainBody">
        <div className="secondBody">
          <h1>{props.title1}</h1>
          <div className="passage1">
            <p className='pg'>At Aryavart, our electronic repair services are our area of expertise. Our experience includes fixing more than 150,000 various electronic components from more than 6,000 manufacturers. We can expertly repair your electronic automation parts regardless of the make, model, or part manufacturer.</p>
            <img src={passageImg} alt="" style={{width:"67rem"}}/>
            <button type='button' style={{border:".5px solid #f78104",marginTop:'1rem',fontSize:'1rem',padding:".5rem",background:"#f78104",borderRadius:".5rem",color:"white"}}>ENQUIRY TODAY FOR A FREE REPAIR EVALUTION</button>
          </div>
          <div className="passage2">
            <h1>Electronic Repair Services</h1>
            <p className='pg'>We provide electronic repairs for the following product categories. To learn more about each electronic repair service, click on the relevant link:</p>
            <div className='sr' href="#">CNC's</div>
            <hr className="sr1"/>
            <div className='sr' href="#">Drives</div>
            <hr className="sr1"/>
            <div className='sr' href="#">Servo Drives</div>
            <hr className="sr1"/>
            <div className='sr' href="#">Motors & Encoders</div>
            <hr className="sr1"/>
            <div className='sr' href="#">PLC's & Software</div>
            <hr className="sr1"/>
            <div className='sr' href="#">Industrial PCs & HMIs</div>
            <hr className="sr1"/>
            <div className='sr' href="#">Monitors</div>
            <hr className="sr1"/>
            <div className='sr' href="#">Robots</div>
            <hr className="sr1"/>
            <div className='sr' href="#">Power Supplies</div>
            <hr className="sr1"/>
            <div className='sr' href="#">Safety Equipment</div>
            <hr className="sr1"/>
            <div className='sr' href="#">Communications</div>
            <hr className="sr1"/>
            <div className='sr' href="#">Gear Boxes</div>
          </div>
          <br/>
          <div className="passage3">
            <h1>Electronic Repair Lead Times</h1>
            <p className='pg'>We pride ourselves on the quality of our electronic repair service and understand the effect a faulty machine has on our customer’s production. This is why we have a number of repair options to suit your requirements:</p>
            <br />
            <h2>Standard Electronic Repairs</h2>
            <p className='pg'>Up to 10 workings days*</p>
            <br />
            <h2>Emergency Electronic Repairs</h2>
            <p className='pg'>Up to 3 working days.*</p>
            <p className='pg'>*Subject to parts and availability</p>
            <button type='button' style={{border:".5px solid #f78104",marginTop:'1rem',fontSize:'1.2rem',padding:".5rem",background:"#f78104",borderRadius:".5rem",color:"white"}}>BOOK YOUR ELECTRIC REPAIR TODAY</button>
          </div>
          <br />
          <br />
          <div className="passage4">
            <h1>How does the Electronic Repair service work?</h1>
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
          <div className="passage5">
          <h1>General Electronics</h1>
          <p className='pg'>Many of our customers want a comprehensive service to deal with all of their industrial electronic repair needs. This includes PSU, PCB, Process Control Instrumentation and Test Instrumentation as well as General Electronics. Shawa has risen to this challenge by diversifying into many other areas and gaining the necessary skills enabling us to offer this service with confidence.</p>
          </div>
        </div>
    </div>
  )
}
