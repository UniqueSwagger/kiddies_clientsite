import React from "react";
import image from "../../images/whyRegister.jpg";

const WhyRegister = () => {
  return (
    <div
      data-testid="why-register"
      className="row p-5 my-5 align-items-center"
      style={{ background: "#235c51", borderRadius: "30px" }}
    >
      <div className="col-lg-6">
        <img className="img-fluid rounded" src={image} alt="why register" />
      </div>
      <div className="col-lg-6 text-white">
        <h3>Why Hesitate To Register?</h3>
        <h1 className="section-title">We Are The Best Choice For Your Child</h1>
        <p>
          As a word from our heart, we love to dedicate for Kids the valuable
          things in Life. A great education is a must for a solid developments
          in both soul and mind for kids. We go with kids to play, learn, and
          grow better.
        </p>
        <div>
          <h5>Well Trained Professionals</h5>
          <p>
            Enabling humanoid robot movement with imitation learning and
            mimicking of animal behaviors
          </p>
        </div>
        <div>
          <h5>International Lesson Patterns</h5>
          <p>
            Summer of the SPAC, Adam Neumann returns and the Nissan Ariya debuts
          </p>
        </div>
        <div>
          <h5>Awesome Infra-Structure</h5>
          <p>
            Ready, set, network! CrunchMatch is now open for Early Stage 2020
          </p>
        </div>
      </div>
    </div>
  );
};

export default WhyRegister;
