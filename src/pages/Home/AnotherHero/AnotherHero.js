import React from "react";
import image from "../../../images/kiddo-svg.svg";

const AnotherHero = () => {
  //This is special hero section
  return (
    <div
      className="row p-5 my-5 mx-3 align-items-center justify-content-around text-white"
      style={{
        background: "#33415c",
        borderRadius: "60px",
        fontFamily: "Lucida Console, Courier New, monospace",
      }}
    >
      <div className="col-lg-5">
        <h1>
          We Are Child Care <br />
          <span className="display-4 fw-bold">Professional</span>
        </h1>
        <p>
          Place your child in the highest quality care, today! School bells are
          ringing loud and clear; vacation’s over, school is here.Let us
          remember: One book, one pen, one child and one teacher can change the
          world.
        </p>
      </div>
      <div className="col-lg-6">
        <img
          className="img-fluid"
          width="90%"
          src={image}
          alt="kids-schooling"
        />
      </div>
    </div>
  );
};

export default AnotherHero;
