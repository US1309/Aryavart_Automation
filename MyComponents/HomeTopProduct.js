import React from 'react'
import AM from '../Images/2094-AM01-S.jpg'
import V from '../Images/8V1090.jpg'
import AP from '../Images/ap.jpg'
import AP1 from '../Images/ap2.jpg'

export default function HomeTopProduct() {
    return (
        <div className="container">
            <div className="mt-100">
                <div className="row">
                    <div className="col-md-3 col-sm-6">
                        <div className="card mb-30">
                            <a className="card-img-tiles" href="#" data-abc="true">
                                <div className="inner">
                                    <div className="main-img"><img src="https://i.imgur.com/O0GMYuw.jpg" alt="Category" /></div>
                                    <div className="thumblist"><img src="https://i.imgur.com/ILEU18M.jpg" alt="Category" /><img src="https://i.imgur.com/2kePJmX.jpg" alt="Category" /></div>
                                </div>
                            </a>
                            <div className="card-body text-center">
                                <h4 className="card-title">Laptops</h4>
                                {/* <p class="text-muted">Starting from $499</p><a class="btn btn-outline-primary btn-sm" href="#" data-abc="true">View Products</a> */}
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3 col-sm-6">
                        <div className="card mb-30">
                            <a className="card-img-tiles" href="#" data-abc="true">
                                <div className="inner">
                                    <div className="main-img"><img src={AM} alt="Category" /></div>
                                    <div className="thumblist"><img src={V} alt="Category" /><img src={AP} alt="Category" /></div>
                                </div>
                            </a>
                            <div className="card-body text-center">
                                <h4 className="card-title">Accessories</h4>
                                {/* <p class="text-muted">Starting from $499</p><a class="btn btn-outline-primary btn-sm" href="#" data-abc="true">View Products</a> */}
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3 col-sm-6">
                        <div className="card mb-30"><a className="card-img-tiles" href="#" data-abc="true">
                            <div className="inner">
                                <div className="main-img"><img src={V} alt="Category" /></div>
                                <div className="thumblist"><img src={AP} alt="Category" /><img src={AP1} alt="Category" /></div>
                            </div></a>
                            <div className="card-body text-center">
                                <h4 className="card-title">Accessories</h4>
                                {/* <p class="text-muted">Starting from $50</p><a class="btn btn-outline-primary btn-sm" href="#" data-abc="true">View Products</a> */}
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3 col-sm-6">
                        <div className="card mb-30">
                            <a className="card-img-tiles" href="#" data-abc="true">
                                <div className="inner">
                                    <div className="main-img"><img src={AP1} alt="Category" /></div>
                                    <div className="thumblist"><img src={AM} alt="Category" /><img src={V} alt="Category" /></div>
                                </div>
                            </a>
                            <div className="card-body text-center">
                                <h4 className="card-title">Accessories</h4>
                                {/* <p class="text-muted">Starting from $9</p><a class="btn btn-outline-primary btn-sm" href="#" data-abc="true">View Products</a> */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
