import React from 'react'
import SimpleSlider from '../component/SimpleSlider'
import OwlCarousel from 'react-owl-carousel'
import { Link } from 'react-router-dom'

const Home = () => {
    const setting = {
        autoplay: true,
        smartSpeed: 1500,
        items: 1,
        dots: false,
        loop: true,
        nav: true,
        navText: [
            '<i class="bi bi-chevron-left"></i>',
            '<i class="bi bi-chevron-right"></i>'
        ]
    };
    const options = {
        autoplay: true,
        smartSpeed: 1000,
        center: true,
        margin: 24,
        dots: true,
        loop: true,
        nav : false,
        responsive: {
            0:{
                items:1
            },
            768:{
                items:2
            },
            992:{
                items:3
            }
        }
    }
    return (
        <>
            {/* Carousel Start */}
            <div className="container-fluid p-0">
                <OwlCarousel className="owl-theme owl-carousel header-carousel position-relative" {...setting} >
                    {/* <div className="owl-carousel header-carousel position-relative"> */}
                    <div className="owl-carousel-item position-relative">
                        <img className="img-fluid" src="img/carousel-1.jpg" alt="" />
                        <div
                            className="position-absolute top-0 start-0 w-100 h-100 d-flex align-items-center"
                            style={{ background: "rgba(38, 168, 234, 0.5)" }}
                        >
                            <div className="container">
                                <div className="row justify-content-start">
                                    <div className="col-10 col-lg-8">
                                        <h1 className="display-3 text-white animated slideInDown mb-4">
                                            Find The Perfect Job That You Deserved
                                        </h1>
                                        <p className="fs-5 fw-medium text-white mb-4 pb-2">
                                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium magni non ex dolorem sunt iste hic.
                                        </p>
                                        <a
                                            href=""
                                            className="btn btn-primary py-md-3 px-md-5 me-3 animated slideInLeft"
                                        >
                                            Search A Job
                                        </a>
                                        <a
                                            href=""
                                            className="btn btn-secondary py-md-3 px-md-5 animated slideInRight"
                                        >
                                            Find A Talent
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="owl-carousel-item position-relative">
                        <img className="img-fluid" src="img/carousel-2.jpg" alt="" />
                        <div
                            className="position-absolute top-0 start-0 w-100 h-100 d-flex align-items-center"
                            style={{ background: "rgba(38, 168, 234, 0.5)" }}
                        >
                            <div className="container">
                                <div className="row justify-content-start">
                                    <div className="col-10 col-lg-8">
                                        <h1 className="display-3 text-white animated slideInDown mb-4">
                                            Find The Best Startup Job That Fit You
                                        </h1>
                                        <p className="fs-5 fw-medium text-white mb-4 pb-2">
                                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Praesentium qui iste ea eligendi officiis quos, cupiditate illo totam?
                                        </p>
                                        <a
                                            href=""
                                            className="btn btn-primary py-md-3 px-md-5 me-3 animated slideInLeft"
                                        >
                                            Search A Job
                                        </a>
                                        <a
                                            href=""
                                            className="btn btn-secondary py-md-3 px-md-5 animated slideInRight"
                                        >
                                            Find A Talent
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* </div> */}
                </OwlCarousel>
            </div>
            {/* Carousel End */}
            {/* Search Start */}
            <div
                className="container-fluid bg-primary mb-5 wow fadeIn"
                data-wow-delay="0.1s"
                style={{ padding: 35 }}
            >
                <div className="container">
                    <div className="row g-2">
                        <div className="col-md-10">
                            <div className="row g-2">
                                <div className="col-md-4">
                                    <input
                                        type="text"
                                        className="form-control border-0"
                                        placeholder="Keyword"
                                    />
                                </div>
                                <div className="col-md-4">
                                    <select className="form-select border-0">
                                        <option selected="">Category</option>
                                        <option value={1}>Category 1</option>
                                        <option value={2}>Category 2</option>
                                        <option value={3}>Category 3</option>
                                    </select>
                                </div>
                                <div className="col-md-4">
                                    <select className="form-select border-0">
                                        <option selected="">Location</option>
                                        <option value={1}>Location 1</option>
                                        <option value={2}>Location 2</option>
                                        <option value={3}>Location 3</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-2">
                            <button className="btn btn-dark border-0 w-100">Search</button>
                        </div>
                    </div>
                </div>
            </div>
            {/* Search End */}
            {/* Category Start */}
            <div className="container-xxl py-5">
                <div className="container">
                    <h1 className="text-center mb-5 wow fadeInUp" data-wow-delay="0.1s">
                        Explore By Category
                    </h1>
                    <div className="row g-4">
                        <div className="col-lg-3 col-sm-6 wow fadeInUp" data-wow-delay="0.1s">
                            <a className="cat-item rounded p-4" href="">
                                <i className="fa fa-3x fa-mail-bulk text-primary mb-4" />
                                <h6 className="mb-3">Marketing</h6>
                                <p className="mb-0">123 Vacancy</p>
                            </a>
                        </div>
                        <div className="col-lg-3 col-sm-6 wow fadeInUp" data-wow-delay="0.3s">
                            <a className="cat-item rounded p-4" href="">
                                <i className="fa fa-3x fa-headset text-primary mb-4" />
                                <h6 className="mb-3">Customer Service</h6>
                                <p className="mb-0">123 Vacancy</p>
                            </a>
                        </div>
                        <div className="col-lg-3 col-sm-6 wow fadeInUp" data-wow-delay="0.5s">
                            <a className="cat-item rounded p-4" href="">
                                <i className="fa fa-3x fa-user-tie text-primary mb-4" />
                                <h6 className="mb-3">Human Resource</h6>
                                <p className="mb-0">123 Vacancy</p>
                            </a>
                        </div>
                        <div className="col-lg-3 col-sm-6 wow fadeInUp" data-wow-delay="0.7s">
                            <a className="cat-item rounded p-4" href="">
                                <i className="fa fa-3x fa-tasks text-primary mb-4" />
                                <h6 className="mb-3">Project Management</h6>
                                <p className="mb-0">123 Vacancy</p>
                            </a>
                        </div>
                        <div className="col-lg-3 col-sm-6 wow fadeInUp" data-wow-delay="0.1s">
                            <a className="cat-item rounded p-4" href="">
                                <i className="fa fa-3x fa-chart-line text-primary mb-4" />
                                <h6 className="mb-3">Business Development</h6>
                                <p className="mb-0">123 Vacancy</p>
                            </a>
                        </div>
                        <div className="col-lg-3 col-sm-6 wow fadeInUp" data-wow-delay="0.3s">
                            <a className="cat-item rounded p-4" href="">
                                <i className="fa fa-3x fa-hands-helping text-primary mb-4" />
                                <h6 className="mb-3">Sales &amp; Communication</h6>
                                <p className="mb-0">123 Vacancy</p>
                            </a>
                        </div>
                        <div className="col-lg-3 col-sm-6 wow fadeInUp" data-wow-delay="0.5s">
                            <a className="cat-item rounded p-4" href="">
                                <i className="fa fa-3x fa-book-reader text-primary mb-4" />
                                <h6 className="mb-3">Teaching &amp; Education</h6>
                                <p className="mb-0">123 Vacancy</p>
                            </a>
                        </div>
                        <div className="col-lg-3 col-sm-6 wow fadeInUp" data-wow-delay="0.7s">
                            <a className="cat-item rounded p-4" href="">
                                <i className="fa fa-3x fa-drafting-compass text-primary mb-4" />
                                <h6 className="mb-3">Design &amp; Creative</h6>
                                <p className="mb-0">123 Vacancy</p>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            {/* Category End */}
            {/* About Start */}
            <div className="container-xxl py-5">
                <div className="container">
                    <div className="row g-5 align-items-center">
                        <div className="col-lg-6 wow fadeIn" data-wow-delay="0.1s">
                            <div className="row g-0 about-bg rounded overflow-hidden">
                                <div className="col-6 text-start">
                                    <img className="img-fluid w-100" src="img/about-1.jpg" />
                                </div>
                                <div className="col-6 text-start">
                                    <img
                                        className="img-fluid"
                                        src="img/about-2.jpg"
                                        style={{ width: "85%", marginTop: "15%" }}
                                    />
                                </div>
                                <div className="col-6 text-end">
                                    <img
                                        className="img-fluid"
                                        src="img/about-3.jpg"
                                        style={{ width: "85%" }}
                                    />
                                </div>
                                <div className="col-6 text-end">
                                    <img className="img-fluid w-100" src="img/about-4.jpg" />
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 wow fadeIn" data-wow-delay="0.5s">
                            <h1 className="mb-4">
                                We Help To Get The Best Job And Find A Talent
                            </h1>
                            <p className="mb-4">
                                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsum quam, doloremque eius amet fuga numquam aut totam, eaque ducimus eum, earum iure. Repellat, ea omnis?
                            </p>
                            <p>
                                <i className="fa fa-check text-primary me-3" />
                                Lorem ipsum dolor sit amet consectetur.
                            </p>
                            <p>
                                <i className="fa fa-check text-primary me-3" />
                                Lorem ipsum dolor sit amet consectetur adipisicing.
                            </p>
                            <p>
                                <i className="fa fa-check text-primary me-3" />
                                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                            </p>
                            <a className="btn btn-primary py-3 px-5 mt-3" href="">
                                Read More
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            {/* About End */}
            {/* Jobs Start */}
            <div className="container-xxl py-5">
                <div className="container">
                    <h1 className="text-center mb-5 wow fadeInUp" data-wow-delay="0.1s">
                        Job Listing
                    </h1>
                    <div className="tab-class text-center wow fadeInUp" data-wow-delay="0.3s">
                        <ul className="nav nav-pills d-inline-flex justify-content-center border-bottom mb-5">
                            <li className="nav-item">
                                <a
                                    className="d-flex align-items-center text-start mx-3 ms-0 pb-3 active"
                                    data-bs-toggle="pill"
                                    href="#tab-1"
                                >
                                    <h6 className="mt-n1 mb-0">Featured</h6>
                                </a>
                            </li>
                            <li className="nav-item">
                                <a
                                    className="d-flex align-items-center text-start mx-3 pb-3"
                                    data-bs-toggle="pill"
                                    href="#tab-2"
                                >
                                    <h6 className="mt-n1 mb-0">Full Time</h6>
                                </a>
                            </li>
                            <li className="nav-item">
                                <a
                                    className="d-flex align-items-center text-start mx-3 me-0 pb-3"
                                    data-bs-toggle="pill"
                                    href="#tab-3"
                                >
                                    <h6 className="mt-n1 mb-0">Part Time</h6>
                                </a>
                            </li>
                        </ul>
                        <div className="tab-content">
                            <div id="tab-1" className="tab-pane fade show p-0 active">
                                <div className="job-item p-4 mb-4">
                                    <div className="row g-4">
                                        <div className="col-sm-12 col-md-8 d-flex align-items-center">
                                            <img
                                                className="flex-shrink-0 img-fluid border rounded"
                                                src="img/com-logo-1.jpg"
                                                alt=""
                                                style={{ width: 80, height: 80 }}
                                            />
                                            <div className="text-start ps-4">
                                                <h5 className="mb-3">Software Engineer</h5>
                                                <span className="text-truncate me-3">
                                                    <i className="fa fa-map-marker-alt text-primary me-2" />
                                                    Delhi, INDIA
                                                </span>
                                                <span className="text-truncate me-3">
                                                    <i className="far fa-clock text-primary me-2" />
                                                    Full Time
                                                </span>
                                                <span className="text-truncate me-0">
                                                    <i className="far fa-money-bill-alt text-primary me-2" />
                                                    Rs.3L - Rs.6L Per Annum
                                                </span>
                                            </div>
                                        </div>
                                        <div className="col-sm-12 col-md-4 d-flex flex-column align-items-start align-items-md-end justify-content-center">
                                            <div className="d-flex mb-3">
                                                <a className="btn btn-light btn-square me-3" href="">
                                                    <i className="far fa-heart text-primary" />
                                                </a>
                                                <Link className="btn btn-primary" to="/Contact">
                        Apply Now
                      </Link>
                                            </div>
                                            <small className="text-truncate">
                                                <i className="far fa-calendar-alt text-primary me-2" />
                                                Date Line: 01 Jan, 2025
                                            </small>
                                        </div>
                                    </div>
                                </div>
                                <div className="job-item p-4 mb-4">
                                    <div className="row g-4">
                                        <div className="col-sm-12 col-md-8 d-flex align-items-center">
                                            <img
                                                className="flex-shrink-0 img-fluid border rounded"
                                                src="img/com-logo-2.jpg"
                                                alt=""
                                                style={{ width: 80, height: 80 }}
                                            />
                                            <div className="text-start ps-4">
                                                <h5 className="mb-3">Marketing Manager</h5>
                                                <span className="text-truncate me-3">
                                                    <i className="fa fa-map-marker-alt text-primary me-2" />
                                                    Gurugram, INDIA
                                                </span>
                                                <span className="text-truncate me-3">
                                                    <i className="far fa-clock text-primary me-2" />
                                                    Full Time
                                                </span>
                                                <span className="text-truncate me-0">
                                                    <i className="far fa-money-bill-alt text-primary me-2" />
                                                    Rs.3L - Rs.6L Per Annum
                                                </span>
                                            </div>
                                        </div>
                                        <div className="col-sm-12 col-md-4 d-flex flex-column align-items-start align-items-md-end justify-content-center">
                                            <div className="d-flex mb-3">
                                                <a className="btn btn-light btn-square me-3" href="">
                                                    <i className="far fa-heart text-primary" />
                                                </a>
                                                <Link className="btn btn-primary" to="/Contact">
                        Apply Now
                      </Link>
                                            </div>
                                            <small className="text-truncate">
                                                <i className="far fa-calendar-alt text-primary me-2" />
                                                Date Line: 01 Jan, 2025
                                            </small>
                                        </div>
                                    </div>
                                </div>
                                <div className="job-item p-4 mb-4">
                                    <div className="row g-4">
                                        <div className="col-sm-12 col-md-8 d-flex align-items-center">
                                            <img
                                                className="flex-shrink-0 img-fluid border rounded"
                                                src="img/com-logo-3.jpg"
                                                alt=""
                                                style={{ width: 80, height: 80 }}
                                            />
                                            <div className="text-start ps-4">
                                                <h5 className="mb-3">Product Designer</h5>
                                                <span className="text-truncate me-3">
                                                    <i className="fa fa-map-marker-alt text-primary me-2" />
                                                    Delhi, INDIA
                                                </span>
                                                <span className="text-truncate me-3">
                                                    <i className="far fa-clock text-primary me-2" />
                                                    Full Time
                                                </span>
                                                <span className="text-truncate me-0">
                                                    <i className="far fa-money-bill-alt text-primary me-2" />
                                                    Rs.3L - Rs.6L Per Annum
                                                </span>
                                            </div>
                                        </div>
                                        <div className="col-sm-12 col-md-4 d-flex flex-column align-items-start align-items-md-end justify-content-center">
                                            <div className="d-flex mb-3">
                                                <a className="btn btn-light btn-square me-3" href="">
                                                    <i className="far fa-heart text-primary" />
                                                </a>
                                                <Link className="btn btn-primary" to="/Contact">
                        Apply Now
                      </Link>
                                            </div>
                                            <small className="text-truncate">
                                                <i className="far fa-calendar-alt text-primary me-2" />
                                                Date Line: 01 Jan, 2025
                                            </small>
                                        </div>
                                    </div>
                                </div>
                                <div className="job-item p-4 mb-4">
                                    <div className="row g-4">
                                        <div className="col-sm-12 col-md-8 d-flex align-items-center">
                                            <img
                                                className="flex-shrink-0 img-fluid border rounded"
                                                src="img/com-logo-4.jpg"
                                                alt=""
                                                style={{ width: 80, height: 80 }}
                                            />
                                            <div className="text-start ps-4">
                                                <h5 className="mb-3">Creative Director</h5>
                                                <span className="text-truncate me-3">
                                                    <i className="fa fa-map-marker-alt text-primary me-2" />
                                                    Noida, INDIA
                                                </span>
                                                <span className="text-truncate me-3">
                                                    <i className="far fa-clock text-primary me-2" />
                                                    Full Time
                                                </span>
                                                <span className="text-truncate me-0">
                                                    <i className="far fa-money-bill-alt text-primary me-2" />
                                                    Rs.3L - Rs.6L Per Annum
                                                </span>
                                            </div>
                                        </div>
                                        <div className="col-sm-12 col-md-4 d-flex flex-column align-items-start align-items-md-end justify-content-center">
                                            <div className="d-flex mb-3">
                                                <a className="btn btn-light btn-square me-3" href="">
                                                    <i className="far fa-heart text-primary" />
                                                </a>
                                                <Link className="btn btn-primary" to="/Contact">
                        Apply Now
                      </Link>
                                            </div>
                                            <small className="text-truncate">
                                                <i className="far fa-calendar-alt text-primary me-2" />
                                                Date Line: 01 Jan, 2025
                                            </small>
                                        </div>
                                    </div>
                                </div>
                                <div className="job-item p-4 mb-4">
                                    <div className="row g-4">
                                        <div className="col-sm-12 col-md-8 d-flex align-items-center">
                                            <img
                                                className="flex-shrink-0 img-fluid border rounded"
                                                src="img/com-logo-5.jpg"
                                                alt=""
                                                style={{ width: 80, height: 80 }}
                                            />
                                            <div className="text-start ps-4">
                                                <h5 className="mb-3">Wordpress Developer</h5>
                                                <span className="text-truncate me-3">
                                                    <i className="fa fa-map-marker-alt text-primary me-2" />
                                                    Mohali, INDIA
                                                </span>
                                                <span className="text-truncate me-3">
                                                    <i className="far fa-clock text-primary me-2" />
                                                    Full Time
                                                </span>
                                                <span className="text-truncate me-0">
                                                    <i className="far fa-money-bill-alt text-primary me-2" />
                                                    Rs.3L - Rs.6L Per Annum
                                                </span>
                                            </div>
                                        </div>
                                        <div className="col-sm-12 col-md-4 d-flex flex-column align-items-start align-items-md-end justify-content-center">
                                            <div className="d-flex mb-3">
                                                <a className="btn btn-light btn-square me-3" href="">
                                                    <i className="far fa-heart text-primary" />
                                                </a>
                                                <Link className="btn btn-primary" to="/Contact">
                        Apply Now
                      </Link>
                                            </div>
                                            <small className="text-truncate">
                                                <i className="far fa-calendar-alt text-primary me-2" />
                                                Date Line: 01 Jan, 2025
                                            </small>
                                        </div>
                                    </div>
                                </div>
                                <a className="btn btn-primary py-3 px-5" href="">
                                    Browse More Jobs
                                </a>
                            </div>
                            <div id="tab-2" className="tab-pane fade show p-0">
                                <div className="job-item p-4 mb-4">
                                    <div className="row g-4">
                                        <div className="col-sm-12 col-md-8 d-flex align-items-center">
                                            <img
                                                className="flex-shrink-0 img-fluid border rounded"
                                                src="img/com-logo-1.jpg"
                                                alt=""
                                                style={{ width: 80, height: 80 }}
                                            />
                                            <div className="text-start ps-4">
                                                <h5 className="mb-3">Software Engineer</h5>
                                                <span className="text-truncate me-3">
                                                    <i className="fa fa-map-marker-alt text-primary me-2" />
                                                    Gurugram, INDIA
                                                </span>
                                                <span className="text-truncate me-3">
                                                    <i className="far fa-clock text-primary me-2" />
                                                    Full Time
                                                </span>
                                                <span className="text-truncate me-0">
                                                    <i className="far fa-money-bill-alt text-primary me-2" />
                                                    $Rs.3L - Rs.6L Per Annum
                                                </span>
                                            </div>
                                        </div>
                                        <div className="col-sm-12 col-md-4 d-flex flex-column align-items-start align-items-md-end justify-content-center">
                                            <div className="d-flex mb-3">
                                                <a className="btn btn-light btn-square me-3" href="">
                                                    <i className="far fa-heart text-primary" />
                                                </a>
                                                <Link className="btn btn-primary" to="/Contact">
                        Apply Now
                      </Link>
                                            </div>
                                            <small className="text-truncate">
                                                <i className="far fa-calendar-alt text-primary me-2" />
                                                Date Line: 01 Jan, 2025
                                            </small>
                                        </div>
                                    </div>
                                </div>
                                <div className="job-item p-4 mb-4">
                                    <div className="row g-4">
                                        <div className="col-sm-12 col-md-8 d-flex align-items-center">
                                            <img
                                                className="flex-shrink-0 img-fluid border rounded"
                                                src="img/com-logo-2.jpg"
                                                alt=""
                                                style={{ width: 80, height: 80 }}
                                            />
                                            <div className="text-start ps-4">
                                                <h5 className="mb-3">Marketing Manager</h5>
                                                <span className="text-truncate me-3">
                                                    <i className="fa fa-map-marker-alt text-primary me-2" />
                                                    Chandigarh, INDIA
                                                </span>
                                                <span className="text-truncate me-3">
                                                    <i className="far fa-clock text-primary me-2" />
                                                    Full Time
                                                </span>
                                                <span className="text-truncate me-0">
                                                    <i className="far fa-money-bill-alt text-primary me-2" />
                                                    Rs.3L - Rs.6L Per Annum
                                                </span>
                                            </div>
                                        </div>
                                        <div className="col-sm-12 col-md-4 d-flex flex-column align-items-start align-items-md-end justify-content-center">
                                            <div className="d-flex mb-3">
                                                <a className="btn btn-light btn-square me-3" href="">
                                                    <i className="far fa-heart text-primary" />
                                                </a>
                                                <Link className="btn btn-primary" to="/Contact">
                        Apply Now
                      </Link>
                                            </div>
                                            <small className="text-truncate">
                                                <i className="far fa-calendar-alt text-primary me-2" />
                                                Date Line: 01 Jan, 2025
                                            </small>
                                        </div>
                                    </div>
                                </div>
                                <div className="job-item p-4 mb-4">
                                    <div className="row g-4">
                                        <div className="col-sm-12 col-md-8 d-flex align-items-center">
                                            <img
                                                className="flex-shrink-0 img-fluid border rounded"
                                                src="img/com-logo-3.jpg"
                                                alt=""
                                                style={{ width: 80, height: 80 }}
                                            />
                                            <div className="text-start ps-4">
                                                <h5 className="mb-3">Product Designer</h5>
                                                <span className="text-truncate me-3">
                                                    <i className="fa fa-map-marker-alt text-primary me-2" />
                                                    Delhi, INDIA
                                                </span>
                                                <span className="text-truncate me-3">
                                                    <i className="far fa-clock text-primary me-2" />
                                                    Full Time
                                                </span>
                                                <span className="text-truncate me-0">
                                                    <i className="far fa-money-bill-alt text-primary me-2" />
                                                    Rs.3L - Rs.6L Per Annum
                                                </span>
                                            </div>
                                        </div>
                                        <div className="col-sm-12 col-md-4 d-flex flex-column align-items-start align-items-md-end justify-content-center">
                                            <div className="d-flex mb-3">
                                                <a className="btn btn-light btn-square me-3" href="">
                                                    <i className="far fa-heart text-primary" />
                                                </a>
                                                <Link className="btn btn-primary" to="/Contact">
                        Apply Now
                      </Link>
                                            </div>
                                            <small className="text-truncate">
                                                <i className="far fa-calendar-alt text-primary me-2" />
                                                Date Line: 01 Jan, 2025
                                            </small>
                                        </div>
                                    </div>
                                </div>
                                <div className="job-item p-4 mb-4">
                                    <div className="row g-4">
                                        <div className="col-sm-12 col-md-8 d-flex align-items-center">
                                            <img
                                                className="flex-shrink-0 img-fluid border rounded"
                                                src="img/com-logo-4.jpg"
                                                alt=""
                                                style={{ width: 80, height: 80 }}
                                            />
                                            <div className="text-start ps-4">
                                                <h5 className="mb-3">Creative Director</h5>
                                                <span className="text-truncate me-3">
                                                    <i className="fa fa-map-marker-alt text-primary me-2" />
                                                    New Delhi, INDIA
                                                </span>
                                                <span className="text-truncate me-3">
                                                    <i className="far fa-clock text-primary me-2" />
                                                    Full Time
                                                </span>
                                                <span className="text-truncate me-0">
                                                    <i className="far fa-money-bill-alt text-primary me-2" />
                                                    Rs.3L - Rs.6L Per Annum
                                                </span>
                                            </div>
                                        </div>
                                        <div className="col-sm-12 col-md-4 d-flex flex-column align-items-start align-items-md-end justify-content-center">
                                            <div className="d-flex mb-3">
                                                <a className="btn btn-light btn-square me-3" href="">
                                                    <i className="far fa-heart text-primary" />
                                                </a>
                                                <Link className="btn btn-primary" to="/Contact">
                        Apply Now
                      </Link>
                                            </div>
                                            <small className="text-truncate">
                                                <i className="far fa-calendar-alt text-primary me-2" />
                                                Date Line: 01 Jan, 2025
                                            </small>
                                        </div>
                                    </div>
                                </div>
                                <div className="job-item p-4 mb-4">
                                    <div className="row g-4">
                                        <div className="col-sm-12 col-md-8 d-flex align-items-center">
                                            <img
                                                className="flex-shrink-0 img-fluid border rounded"
                                                src="img/com-logo-5.jpg"
                                                alt=""
                                                style={{ width: 80, height: 80 }}
                                            />
                                            <div className="text-start ps-4">
                                                <h5 className="mb-3">Wordpress Developer</h5>
                                                <span className="text-truncate me-3">
                                                    <i className="fa fa-map-marker-alt text-primary me-2" />
                                                    Greater Noida, INDIA
                                                </span>
                                                <span className="text-truncate me-3">
                                                    <i className="far fa-clock text-primary me-2" />
                                                    Full Time
                                                </span>
                                                <span className="text-truncate me-0">
                                                    <i className="far fa-money-bill-alt text-primary me-2" />
                                                    Rs.3L - Rs.6L Per Annum
                                                </span>
                                            </div>
                                        </div>
                                        <div className="col-sm-12 col-md-4 d-flex flex-column align-items-start align-items-md-end justify-content-center">
                                            <div className="d-flex mb-3">
                                                <a className="btn btn-light btn-square me-3" href="">
                                                    <i className="far fa-heart text-primary" />
                                                </a>
                                                <Link className="btn btn-primary" to="/Contact">
                        Apply Now
                      </Link>
                                            </div>
                                            <small className="text-truncate">
                                                <i className="far fa-calendar-alt text-primary me-2" />
                                                Date Line: 01 Jan, 2025
                                            </small>
                                        </div>
                                    </div>
                                </div>
                                <a className="btn btn-primary py-3 px-5" href="">
                                    Browse More Jobs
                                </a>
                            </div>
                            <div id="tab-3" className="tab-pane fade show p-0">
                                <div className="job-item p-4 mb-4">
                                    <div className="row g-4">
                                        <div className="col-sm-12 col-md-8 d-flex align-items-center">
                                            <img
                                                className="flex-shrink-0 img-fluid border rounded"
                                                src="img/com-logo-1.jpg"
                                                alt=""
                                                style={{ width: 80, height: 80 }}
                                            />
                                            <div className="text-start ps-4">
                                                <h5 className="mb-3">Software Engineer</h5>
                                                <span className="text-truncate me-3">
                                                    <i className="fa fa-map-marker-alt text-primary me-2" />
                                                    Delhi, INDIA
                                                </span>
                                                <span className="text-truncate me-3">
                                                    <i className="far fa-clock text-primary me-2" />
                                                    Full Time
                                                </span>
                                                <span className="text-truncate me-0">
                                                    <i className="far fa-money-bill-alt text-primary me-2" />
                                                    Rs.3L - Rs.6L Per Annum
                                                </span>
                                            </div>
                                        </div>
                                        <div className="col-sm-12 col-md-4 d-flex flex-column align-items-start align-items-md-end justify-content-center">
                                            <div className="d-flex mb-3">
                                                <a className="btn btn-light btn-square me-3" href="">
                                                    <i className="far fa-heart text-primary" />
                                                </a>
                                                <Link className="btn btn-primary" to="/Contact">
                        Apply Now
                      </Link>
                                            </div>
                                            <small className="text-truncate">
                                                <i className="far fa-calendar-alt text-primary me-2" />
                                                Date Line: 01 Jan, 2025
                                            </small>
                                        </div>
                                    </div>
                                </div>
                                <div className="job-item p-4 mb-4">
                                    <div className="row g-4">
                                        <div className="col-sm-12 col-md-8 d-flex align-items-center">
                                            <img
                                                className="flex-shrink-0 img-fluid border rounded"
                                                src="img/com-logo-2.jpg"
                                                alt=""
                                                style={{ width: 80, height: 80 }}
                                            />
                                            <div className="text-start ps-4">
                                                <h5 className="mb-3">Marketing Manager</h5>
                                                <span className="text-truncate me-3">
                                                    <i className="fa fa-map-marker-alt text-primary me-2" />
                                                    Chandigarh, INDIA
                                                </span>
                                                <span className="text-truncate me-3">
                                                    <i className="far fa-clock text-primary me-2" />
                                                    Full Time
                                                </span>
                                                <span className="text-truncate me-0">
                                                    <i className="far fa-money-bill-alt text-primary me-2" />
                                                    Rs.3L - Rs.6L Per Annum
                                                </span>
                                            </div>
                                        </div>
                                        <div className="col-sm-12 col-md-4 d-flex flex-column align-items-start align-items-md-end justify-content-center">
                                            <div className="d-flex mb-3">
                                                <a className="btn btn-light btn-square me-3" href="">
                                                    <i className="far fa-heart text-primary" />
                                                </a>
                                                <Link className="btn btn-primary" to="/Contact">
                        Apply Now
                      </Link>
                                            </div>
                                            <small className="text-truncate">
                                                <i className="far fa-calendar-alt text-primary me-2" />
                                                Date Line: 01 Jan, 2025
                                            </small>
                                        </div>
                                    </div>
                                </div>
                                <div className="job-item p-4 mb-4">
                                    <div className="row g-4">
                                        <div className="col-sm-12 col-md-8 d-flex align-items-center">
                                            <img
                                                className="flex-shrink-0 img-fluid border rounded"
                                                src="img/com-logo-3.jpg"
                                                alt=""
                                                style={{ width: 80, height: 80 }}
                                            />
                                            <div className="text-start ps-4">
                                                <h5 className="mb-3">Product Designer</h5>
                                                <span className="text-truncate me-3">
                                                    <i className="fa fa-map-marker-alt text-primary me-2" />
                                                    New Delhi, INDIA
                                                </span>
                                                <span className="text-truncate me-3">
                                                    <i className="far fa-clock text-primary me-2" />
                                                    Full Time
                                                </span>
                                                <span className="text-truncate me-0">
                                                    <i className="far fa-money-bill-alt text-primary me-2" />
                                                    Rs.3L - Rs.6L Per Annum
                                                </span>
                                            </div>
                                        </div>
                                        <div className="col-sm-12 col-md-4 d-flex flex-column align-items-start align-items-md-end justify-content-center">
                                            <div className="d-flex mb-3">
                                                <a className="btn btn-light btn-square me-3" href="">
                                                    <i className="far fa-heart text-primary" />
                                                </a>
                                                <Link className="btn btn-primary" to="/Contact">
                        Apply Now
                      </Link>
                                            </div>
                                            <small className="text-truncate">
                                                <i className="far fa-calendar-alt text-primary me-2" />
                                                Date Line: 01 Jan, 2025
                                            </small>
                                        </div>
                                    </div>
                                </div>
                                <div className="job-item p-4 mb-4">
                                    <div className="row g-4">
                                        <div className="col-sm-12 col-md-8 d-flex align-items-center">
                                            <img
                                                className="flex-shrink-0 img-fluid border rounded"
                                                src="img/com-logo-4.jpg"
                                                alt=""
                                                style={{ width: 80, height: 80 }}
                                            />
                                            <div className="text-start ps-4">
                                                <h5 className="mb-3">Creative Director</h5>
                                                <span className="text-truncate me-3">
                                                    <i className="fa fa-map-marker-alt text-primary me-2" />
                                                    Mohali, INDIA
                                                </span>
                                                <span className="text-truncate me-3">
                                                    <i className="far fa-clock text-primary me-2" />
                                                    Full Time
                                                </span>
                                                <span className="text-truncate me-0">
                                                    <i className="far fa-money-bill-alt text-primary me-2" />
                                                    Rs.3L - Rs.6L Per Annum
                                                </span>
                                            </div>
                                        </div>
                                        <div className="col-sm-12 col-md-4 d-flex flex-column align-items-start align-items-md-end justify-content-center">
                                            <div className="d-flex mb-3">
                                                <a className="btn btn-light btn-square me-3" href="">
                                                    <i className="far fa-heart text-primary" />
                                                </a>
                                                <Link className="btn btn-primary" to="/Contact">
                        Apply Now
                      </Link>
                                            </div>
                                            <small className="text-truncate">
                                                <i className="far fa-calendar-alt text-primary me-2" />
                                                Date Line: 01 Jan, 2025
                                            </small>
                                        </div>
                                    </div>
                                </div>
                                <div className="job-item p-4 mb-4">
                                    <div className="row g-4">
                                        <div className="col-sm-12 col-md-8 d-flex align-items-center">
                                            <img
                                                className="flex-shrink-0 img-fluid border rounded"
                                                src="img/com-logo-5.jpg"
                                                alt=""
                                                style={{ width: 80, height: 80 }}
                                            />
                                            <div className="text-start ps-4">
                                                <h5 className="mb-3">Wordpress Developer</h5>
                                                <span className="text-truncate me-3">
                                                    <i className="fa fa-map-marker-alt text-primary me-2" />
                                                    Chandigarh, INDIA
                                                </span>
                                                <span className="text-truncate me-3">
                                                    <i className="far fa-clock text-primary me-2" />
                                                    Full Time
                                                </span>
                                                <span className="text-truncate me-0">
                                                    <i className="far fa-money-bill-alt text-primary me-2" />
                                                    Rs.3L - Rs.6L Per Annum
                                                </span>
                                            </div>
                                        </div>
                                        <div className="col-sm-12 col-md-4 d-flex flex-column align-items-start align-items-md-end justify-content-center">
                                            <div className="d-flex mb-3">
                                                <a className="btn btn-light btn-square me-3" href="">
                                                    <i className="far fa-heart text-primary" />
                                                </a>
                                                <Link className="btn btn-primary" to="/Contact">
                        Apply Now
                      </Link>
                                            </div>
                                            <small className="text-truncate">
                                                <i className="far fa-calendar-alt text-primary me-2" />
                                                Date Line: 01 Jan, 2025
                                            </small>
                                        </div>
                                    </div>
                                </div>
                                <a className="btn btn-primary py-3 px-5" href="">
                                    Browse More Jobs
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Jobs End */}

            {/* Testimonial Start */}
            <div className="container-xxl py-5 wow fadeInUp" data-wow-delay="0.1s">
                <div className="container">
                    <h1 className="text-center mb-5">Our Clients Say!!!</h1>
                    <OwlCarousel className="owl-theme owl-carousel testimonial-carousel" {...options}>
                        <div className="testimonial-item bg-light rounded p-4">
                            <i className="fa fa-quote-left fa-2x text-primary mb-3" />
                            <p>
                                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Error unde ex voluptate reiciendis. Deserunt ab debitis quasi cupiditate praesentium officia.
                            </p>
                            <div className="d-flex align-items-center">
                                <img
                                    className="img-fluid flex-shrink-0 rounded"
                                    src="img/testimonial-1.jpg"
                                    style={{ width: 50, height: 50 }}
                                />
                                <div className="ps-3">
                                    <h5 className="mb-1">#Fuggi</h5>
                                    <small>Product Manager</small>
                                </div>
                            </div>
                        </div>
                        <div className="testimonial-item bg-light rounded p-4">
                            <i className="fa fa-quote-left fa-2x text-primary mb-3" />
                            <p>
                                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Error cupiditate qui doloribus laboriosam in mollitia delectus totam ut.
                            </p>
                            <div className="d-flex align-items-center">
                                <img
                                    className="img-fluid flex-shrink-0 rounded"
                                    src="img/testimonial-2.jpg"
                                    style={{ width: 50, height: 50 }}
                                />
                                <div className="ps-3">
                                    <h5 className="mb-1">Ashish</h5>
                                    <small>Backend Developer</small>
                                </div>
                            </div>
                        </div>
                        <div className="testimonial-item bg-light rounded p-4">
                            <i className="fa fa-quote-left fa-2x text-primary mb-3" />
                            <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam quaerat accusantium labore sit amet consectetur adipisicing elit.
                            </p>
                            <div className="d-flex align-items-center">
                                <img
                                    className="img-fluid flex-shrink-0 rounded"
                                    src="img/testimonial-3.jpg"
                                    style={{ width: 50, height: 50 }}
                                />
                                <div className="ps-3">
                                    <h5 className="mb-1">Kamaldeep</h5>
                                    <small>Full Stack Developer</small>
                                </div>
                            </div>
                        </div>
                        <div className="testimonial-item bg-light rounded p-4">
                            <i className="fa fa-quote-left fa-2x text-primary mb-3" />
                            <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta debitis illum necessitatibus, et eos delectus eum explicabo.
                            </p>
                            <div className="d-flex align-items-center">
                                <img
                                    className="img-fluid flex-shrink-0 rounded"
                                    src="img/testimonial-4.jpg"
                                    style={{ width: 50, height: 50 }}
                                />
                                <div className="ps-3">
                                    <h5 className="mb-1">Angel</h5>
                                    <small>WordPress Developer</small>
                                </div>
                            </div>
                        </div>
                    </OwlCarousel>
                </div>
            </div>
            {/* Testimonial End */}


        </>

    )
}

export default Home
