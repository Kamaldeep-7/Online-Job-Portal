import React from 'react'

const About = () => {
    return (
<>
  {/* Header End */}
  <div className="container-xxl py-5 bg-dark page-header mb-5">
    <div className="container my-5 pt-5 pb-4">
      <h1 className="display-3 text-white mb-3 animated slideInDown">
        About Us
      </h1>
      <nav aria-label="breadcrumb">
        <ol className="breadcrumb text-uppercase">
          <li className="breadcrumb-item">
            <a href="#">Home</a>
          </li>
          <li className="breadcrumb-item">
            <a href="#">Pages</a>
          </li>
          <li className="breadcrumb-item text-white active" aria-current="page">
            About
          </li>
        </ol>
      </nav>
    </div>
  </div>
  {/* Header End */}
  {/* About Start */}
  <div className="container-xxl py-5">
    <div className="container">
      <div className="row g-5 align-items-center">
        <div className="col-lg-6 wow fadeIn" data-wow-delay="0.1s">
          <div className="row g-0 about-bg rounded overflow-hidden">
            <div className="col-6 text-start">
              <img className="img-fluid w-100" src="/img/about-1.jpg" />
            </div>
            <div className="col-6 text-start">
              <img
                className="img-fluid"
                src="/img/about-2.jpg"
                style={{ width: "85%", marginTop: "15%" }}
              />
            </div>
            <div className="col-6 text-end">
              <img
                className="img-fluid"
                src="/img/about-3.jpg"
                style={{ width: "85%" }}
              />
            </div>
            <div className="col-6 text-end">
              <img className="img-fluid w-100" src="/img/about-4.jpg" />
            </div>
          </div>
        </div>
        <div className="col-lg-6 wow fadeIn" data-wow-delay="0.5s">
          <h1 className="mb-4">
            We Help To Get The Best Job And Find A Talent
          </h1>
          <p className="mb-4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto delectus quae ipsa optio quod ex numquam corporis! Consequuntur voluptate, quia fugiat velit voluptas magni nesciunt, voluptatum facere accusamus saepe molestias.
          </p>
          <p>
            <i className="fa fa-check text-primary me-3" />
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </p>
          <p>
            <i className="fa fa-check text-primary me-3" />
            Lorem ipsum dolor sit amet consectetur adipisicing.
          </p>
          <p>
            <i className="fa fa-check text-primary me-3" />
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime, vel.
          </p>
          <a className="btn btn-primary py-3 px-5 mt-3" href="">
            Read More
          </a>
        </div>
      </div>
    </div>
  </div>
  {/* About End */}
</>



    )
}

export default About
