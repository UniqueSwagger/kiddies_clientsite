import React, { Fragment } from "react";
import BreadCrumb from "../../components/BreadCrumb/BreadCrumb";
import Managers from "../../components/Managers/Manager";
import ScrollToTop from "../../components/ScrollToTop/ScrollToTop";
import WhyRegister from "../../components/WhyRegister/WhyRegister";
import image from "../../images/learnAbout.jpg";
import "./AboutUs.css";

const AboutUs = () => {
  return (
    <Fragment>
      <ScrollToTop />
      <BreadCrumb title="About Us" />
      <div style={{ marginTop: "80px" }} className="row py-5">
        <div className="col-lg-6">
          <img
            className="d-block mx-auto img-fluid"
            width="90%"
            src={image}
            alt="kids studying"
          />
        </div>
        <div className="col-lg-5 m-2">
          <h3 className="section-subtitle">Education for everyone</h3>
          <h1 className="section-title">
            Learn About Our Work Culture At Kiddies Educare
          </h1>
          <p className="lead section-desc">
            As a word from our heart, we love to dedicate for Kids the valuable
            things in Life. A great education is a must for a solid developments
            in both soul and mind for kids. We go with <br /> kids to play,
            learn, and grow better.
          </p>
          <ul className="d-flex list-unstyled lead fw-bold">
            <div className="me-5">
              <li>
                <i className="fas text-primary fa-check-circle"></i>
                Transportation
              </li>
              <li>
                <i className="fas text-primary fa-check-circle"></i> Outdoor
                Games
              </li>
            </div>
            <div>
              <li>
                <i className="fas text-primary fa-check-circle"></i> Nutritious
                Food
              </li>
              <li>
                <i className="fas text-primary fa-check-circle"></i> Best Care
              </li>
            </div>
          </ul>
        </div>
      </div>
      <WhyRegister />
      <Managers />
    </Fragment>
  );
};

export default AboutUs;
