import React from 'react'
import SimpleSlider from '../component/SimpleSlider'

const Services = () => {
    return (
        <>
            <>
                {/* Page Header Start */}
                <div
                    className="container-fluid page-header mb-5 wow fadeIn"
                    data-wow-delay="0.1s"
                >
                    <div className="container text-center">
                        <h1 className="display-4 text-white animated slideInDown mb-4">
                            Service
                        </h1>
                        <nav aria-label="breadcrumb animated slideInDown">
                            <ol className="breadcrumb justify-content-center mb-0">
                                <li className="breadcrumb-item">
                                    <a className="text-white" href="#">
                                        Home
                                    </a>
                                </li>
                                <li className="breadcrumb-item">
                                    <a className="text-white" href="#">
                                        Pages
                                    </a>
                                </li>
                                <li
                                    className="breadcrumb-item text-primary active"
                                    aria-current="page"
                                >
                                    Service
                                </li>
                            </ol>
                        </nav>
                    </div>
                </div>
                {/* Page Header End */}
                {/* Service Start */}
                <div className="container-xxl py-5">
                    <div className="container">
                        <div
                            className="text-center mx-auto mb-5 wow fadeInUp"
                            data-wow-delay="0.1s"
                            style={{ maxWidth: 500 }}
                        >
                            <div className="d-inline-block rounded-pill bg-danger text-white py-1 px-3 mb-3">
                                What We Do
                            </div>
                            <h1 className="display-6 mb-5">
                                Learn More What We Do And Get Involved
                            </h1>
                        </div>
                        <div className="row g-4 justify-content-center">
                            <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
                                <div className="service-item bg-white text-center h-100 p-4 p-xl-5">
                                    <img className="img-fluid mb-4" src="/img/icon-1.png" alt="" />
                                    <h4 className="mb-3">Child Education</h4>
                                    <p className="mb-4">
                                       Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem velit fuga officia nobis delectus temporibus ducimus quibusdam, non esse quo.
                                    </p>
                                    <a className="btn btn-outline-primary px-3" href="">
                                        Learn More
                                        <div className="d-inline-flex btn-sm-square bg-primary text-white rounded-circle ms-2">
                                            <i className="fa fa-arrow-right" />
                                        </div>
                                    </a>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.3s">
                                <div className="service-item bg-white text-center h-100 p-4 p-xl-5">
                                    <img className="img-fluid mb-4" src="/img/icon-2.png" alt="" />
                                    <h4 className="mb-3">Medical Treatment</h4>
                                    <p className="mb-4">
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. At, architecto debitis optio culpa quaerat necessitatibus delectus repellat assumenda.
                                    </p>
                                    <a className="btn btn-outline-primary px-3" href="">
                                        Learn More
                                        <div className="d-inline-flex btn-sm-square bg-primary text-white rounded-circle ms-2">
                                            <i className="fa fa-arrow-right" />
                                        </div>
                                    </a>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.5s">
                                <div className="service-item bg-white text-center h-100 p-4 p-xl-5">
                                    <img className="img-fluid mb-4" src="/img/icon-3.png" alt="" />
                                    <h4 className="mb-3">Pure Drinking Water</h4>
                                    <p className="mb-4">
                                       Lorem ipsum dolor sit amet consectetur adipisicing elit. Non, eos neque ut accusamus excepturi quod mollitia nisi accusantium similique soluta.
                                    </p>
                                    <a className="btn btn-outline-primary px-3" href="">
                                        Learn More
                                        <div className="d-inline-flex btn-sm-square bg-primary text-white rounded-circle ms-2">
                                            <i className="fa fa-arrow-right" />
                                        </div>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Service End */}
            </>


        </>
    )
}

export default Services
