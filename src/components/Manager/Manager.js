import React from "react";
import { Card, Col } from "react-bootstrap";
import "./Manager.css";

const Manager = ({ manager }) => {
  const { name, designation, image } = manager;
  return (
    <Col>
      <Card className="border-0 manager">
        <div>
          <Card.Img variant="top" className="img-fluid" src={image} />
        </div>
        <div className="manager-content">
          <div>
            <h5>{name}</h5>
            <h6>{designation}</h6>
          </div>
        </div>
      </Card>
    </Col>
  );
};

export default Manager;
