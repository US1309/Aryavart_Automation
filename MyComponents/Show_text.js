import React from 'react'

export default function Show_text() {

  let activeButtonId = "button1"
  function changeColor(buttonId){
  const button = document.getElementById(buttonId);

    // Remove color from the previously active button
    if (activeButtonId) {
      const prevActiveButton = document.getElementById(activeButtonId);
      prevActiveButton.classList.remove('active1');
    }

    // Add color to the clicked button
    button.classList.add('active1');
    activeButtonId = buttonId;
  }
   function myFunc(e,string){
    console.log("pressed");
    changeColor(e.target.id);
    document.getElementById('uk').innerText=string;
   }

  return (
    <div className="row container mt-4 mb-4">
        <div className=" col-4">
        <div className="in active1" type="button" id="button1"  onClick={(e)=>myFunc(e,"With years of experience in the industry and in house testing setup, we have honed our skills to become specialists in repairing all the models of B&R Acopos Servo Drives, like Acopos 1090, Acopos 1022, Acopos 1045, Acopos 1180, Acopos 1320 & Acopos 1640 Servo Drives. Our technicians are equipped with in-depth knowledge of these drives, allowing them to diagnose issues accurately and provide efficient solutions.")}>B&R make Acopos Servo Drives</div>
        <div className="in" type="button" id="button2" onClick={(e)=>myFunc(e,"With years of experience in the industry and in house testing setup, we have honed our skills to become specialists in repairing all the modules of B&R MultiDrives, like Acopos Multi Inverter Modules, Auxiliary Supply Modules, Power Supply Modules, Expansion Modules, Capacitor Modules etc. Our technicians are equipped with in-depth knowledge of these drives, allowing them to diagnose issues accurately and provide efficient solutions.")}>B&R make Acopos Multi Drives</div>
        <div className="in" type="button" id="button3" onClick={(e)=>myFunc(e,"With years of experience in the industry and in house testing setup, we have honed our skills to become specialists in repairing all the Elau Pac Drive, like C600 Pac Drive, C400 Pac Drive, C200 Pac Drive, MC-4 Pac Drive,  etc. Our technicians are equipped with in-depth knowledge of these drives, allowing them to diagnose issues accurately and provide efficient solutions.")}>Elau PacDrive</div>
        <div className="in" type="button" id="button4" onClick={(e)=>myFunc(e,"With years of experience in the industry and in house testing setup, we have honed our skills to become specialists in repairing all the models of Allen Bradley Kinetix Servo Drives like Kinetix 5500, Kinetix 5700, Kinetix 5300, Kinetix 350 Servo Drives,  etc. Our technicians are equipped with in-depth knowledge of these drives, allowing them to diagnose issues accurately and provide efficient solutions.")}>Allen Bradley Kinetix Servo Drive</div>
        <div className="in" type="button" id="button5" onClick={(e)=>myFunc(e,"With years of experience in the industry and in house testing setup, we have honed our skills to become specialists in repairing Servo Motors of any brands like Siemens, B&R, Elau, Allen Bradley, Baumuller, Panasonic, etc. Our technicians are equipped with in-depth knowledge of these servo motors, allowing them to diagnose issues accurately and provide efficient solutions.")}>All Brands Servo Motors</div>
    </div>
    <div className="col-8 show-text">
        <div className="in2" id="uk">
        With years of experience in the industry and in house testing setup, we have honed our skills to become specialists in repairing all the models of B&R Acopos Servo Drives, like Acopos 1090, Acopos 1022, Acopos 1045, Acopos 1180, Acopos 1320 & Acopos 1640 Servo Drives. Our technicians are equipped with in-depth knowledge of these drives, allowing them to diagnose issues accurately and provide efficient solutions.
        </div>
    </div>
    </div>
  )
}
