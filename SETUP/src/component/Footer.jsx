import React from 'react'

const Footer = () => {
    return (
        <>
            {/* Footer Start */}
            <div
                className="container-fluid bg-dark text-white-50 footer mt-5 pt-5 wow fadeIn"
                data-wow-delay="0.1s"
            >
                <div className="container py-5">
                    <div className="row g-5">
                        <div className="col-lg-3 col-md-6">
                            <h1 className="fw-bold text-primary mb-4">
                            Job<span className="text-white">Entry</span>
                            </h1>
                            <p>
                                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Totam placeat delectus est qui iure at! Sunt reiciendis illo maxime aspernatur?

                            </p>
                            <div className="d-flex pt-2">
                                <a className="btn btn-square me-1" href="">
                                    <i className="fab fa-twitter" />
                                </a>
                                <a className="btn btn-square me-1" href="">
                                    <i className="fab fa-facebook-f" />
                                </a>
                                <a className="btn btn-square me-1" href="">
                                    <i className="fab fa-youtube" />
                                </a>
                                <a className="btn btn-square me-0" href="">
                                    <i className="fab fa-linkedin-in" />
                                </a>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6">
                            <h5 className="text-light mb-4">Address</h5>
                            <p>
                                <i className="fa fa-map-marker-alt me-3" />
                                123 Street, Haryana, India
                            </p>
                            <p>
                                <i className="fa fa-phone-alt me-3" />
                                +91 12345 67890
                            </p>
                            <p>
                                <i className="fa fa-envelope me-3" />
                                info@example.com
                            </p>
                        </div>
                        <div className="col-lg-3 col-md-6">
                            <h5 className="text-light mb-4">Quick Links</h5>
                            <a className="btn btn-link" href="">
                                About Us
                            </a>
                            <a className="btn btn-link" href="">
                                Contact Us
                            </a>
                            <a className="btn btn-link" href="">
                                Our Services
                            </a>
                            <a className="btn btn-link" href="">
                                Terms &amp; Condition
                            </a>
                            <a className="btn btn-link" href="">
                                Support
                            </a>
                        </div>
                        <div className="col-lg-3 col-md-6">
                            <h5 className="text-light mb-4">Newsletter</h5>
                            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Optio nisi cum ex qui Dolores.</p>
                            <div className="position-relative mx-auto" style={{ maxWidth: 400 }}>
                                <input
                                    className="form-control bg-transparent w-100 py-3 ps-4 pe-5"
                                    type="text"
                                    placeholder="Your email"
                                />
                                <button
                                    type="button"
                                    className="btn btn-primary py-2 position-absolute top-0 end-0 mt-2 me-2"
                                >
                                    SignUp
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container-fluid copyright">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-6 text-center text-md-start mb-3 mb-md-0">
                                © <a href="#">copyright</a>, All Right Reserved.
                            </div>
                            <div className="col-md-6 text-center text-md-end">
                               
                                Designed By <a href="https://htmlcodex.com">Kamaldeep</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Footer End */}
        </>

    )
}

export default Footer
