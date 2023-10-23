import React, { useState } from "react";
import { Row, Col, Tabs, Tab } from "react-bootstrap";
import useGallery from "../../../hooks/useGallery";
import GalleryImages from "../GalleryImages/GalleryImages";
import "./GalleryDashboard.css";
const GalleryDashboard = () => {
  const [key, setKey] = useState("showAll");
  const images = useGallery();
  const drawingImages = images.filter((image) => image.category === "Drawing");
  const educationImages = images.filter(
    (image) => image.category === "Education"
  );
  const gameImages = images.filter((image) => image.category === "Game");
  return (
    <div className="galleryDashboard my-3">
      <Row>
        <Col>
          <div>
            <Tabs
              className="justify-content-center align-items-center border-0 nav-pills text-black my-5"
              defaultActiveKey="All"
              activeKey={key}
              onSelect={(k) => setKey(k)}
            >
              <Tab eventKey="showAll" title="Show All">
                <GalleryImages images={images} />
              </Tab>
              <Tab eventKey="drawing" title="Drawing">
                <GalleryImages images={drawingImages} />
              </Tab>
              <Tab eventKey="education" title="Education">
                <GalleryImages images={educationImages} />
              </Tab>
              <Tab eventKey="game" title="Game">
                <GalleryImages images={gameImages} />
              </Tab>
            </Tabs>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default GalleryDashboard;
