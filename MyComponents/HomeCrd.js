import React from 'react'

import warrenty from '../Images/warranty1.png'
import repair from '../Images/rep.png'
import flag from '../Images/flag.png'
import globe from '../Images/global.png'
import test from '../Images/test.png'

export default function HomeCrd() {
    return (
        <div className='container homeCrd '>
            <div class="card wholeCrd" style={{ maxWidth: 540 }}>
                <div class="row g-0">
                    <div class="col-md-4">
                        <img src={warrenty} class="img-fluid rounded-start HomeCrdImg" alt="..." />
                    </div>
                    <div class="col-md-8">
                        <div class="Homecard-body">
                            <h5 class="homeCrdCard-title">6months warrenty</h5>
                            <p class="card-text"></p>
                        </div>
                    </div>
                </div>
            </div>

            <div class="card wholeCrd" style={{ maxWidth: 540 }}>
                <div class="row g-0">
                    <div class="col-md-4">
                        <img src={repair} class="img-fluid rounded-start HomeCrdImg" alt="..." />
                    </div>
                    <div class="col-md-8">
                        <div class="Homecard-body">
                            <h5 class="homeCrdCard-title">Experienced Repair Engineers</h5>
                            <p class="card-text"></p>
                        </div>
                    </div>
                </div>
            </div>

            <div class="card wholeCrd" style={{ maxWidth: 540 }}>
                <div class="row g-0">
                    <div class="col-md-4">
                        <img src={flag} class="img-fluid rounded-start HomeCrdImg" alt="..." />
                    </div>
                    <div class="col-md-8">
                        <div class="Homecard-body">
                            <h5 class="homeCrdCard-title">Innovative Workshops</h5>
                            <p class="card-text"></p>
                        </div>
                    </div>
                </div>
            </div>

            <div class="card wholeCrd" style={{ maxWidth: 540 }}>
                <div class="row g-0">
                    <div class="col-md-4">
                        <img src={globe} class="img-fluid rounded-start HomeCrdImg" alt="..." />
                    </div>
                    <div class="col-md-8">
                        <div class="Homecard-body">
                            <h5 class="homeCrdCard-title">Custom Built Test Rigs</h5>
                            <p class="card-text"></p>
                        </div>
                    </div>
                </div>
            </div>

            <div class="card wholeCrd" style={{ maxWidth: 540 }}>
                <div class="row g-0">
                    <div class="col-md-4">
                        <img src={test} class="img-fluid rounded-start HomeCrdImg" alt="..." />
                    </div>
                    <div class="col-md-8">
                        <div class="Homecard-body">
                            <h5 class="homeCrdCard-title">Global Sales Team</h5>
                            <p class="card-text"></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
