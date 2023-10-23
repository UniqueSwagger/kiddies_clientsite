import React from "react";
import { Row } from "react-bootstrap";
import Manager from "../Manager/Manager";

const Managers = () => {
  const managers = [
    {
      name: "Anushka",
      designation: "CEO",
      image: "https://i.ibb.co/X49173h/teacher01-ef9900b4.jpg",
    },
    {
      name: "Arup Barman",
      designation: "CTO",
      image: "https://i.ibb.co/3M5j7n7/teacher02-ecb09afe.jpg",
    },
    {
      name: "Bristy Roy",
      designation: "CEO",
      image: "https://i.ibb.co/pKXMCP2/teacher03-ea1dd076.jpg",
    },
    {
      name: "Saiful Islam",
      designation: "Manager",
      image: "https://i.ibb.co/T0zcRtx/teacher04-fe86f51d.jpg",
    },
    {
      name: "Jennifer",
      designation: "Assistant Manager",
      image: "https://i.ibb.co/N285t0W/teacher05-9d015a74.jpg",
    },
    {
      name: "Rima",
      designation: "Helper",
      image: "https://i.ibb.co/TDfxFC9/teacher06-901f0774.jpg",
    },
    {
      name: "Ben Hamlington",
      designation: "Teacher",
      image: "https://i.ibb.co/RyZqmGy/teacher07-266e5393.jpg",
    },
    {
      name: "Nishad Borua",
      designation: "Photographer",
      image: "https://i.ibb.co/2s5npkc/teacher08-a3fe896d.jpg",
    },
  ];

  return (
    <div>
      <div className="text-center w-75 mx-auto my-5">
        <h3 className="section-subtitle">Together we can create</h3>
        <h1 className="section-title">Who Stand By Your Kids Always</h1>
        <p className="section-desc lead">
          While the unit economics were a driving factor, the company says its
          acquisition of lidar company Blackmore and the integration of that
          tech in its self-driving stack has made the shift to trucks possible.
          Aurora has said its FirstLight.
        </p>
      </div>
      <Row xs={1} md={2} lg={4} className="g-4 mx-3 my-5">
        {managers.map((manager) => (
          <Manager manager={manager} key={manager.name} />
        ))}
      </Row>
    </div>
  );
};

export default Managers;
