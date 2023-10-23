import React, { useState, Fragment } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Lightbox from "react-image-lightbox";
import "react-image-lightbox/style.css";
import Loader from "../../../components/Loader/Loader";
import "./GalleryImage.css";
const GalleryImages = ({ images }) => {
  const [photoIndex, setPhotoIndex] = useState(null);
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Fragment>
      {images.length ? (
        <Container>
          <Row xs={1} md={3} lg={4} className="g-4">
            {images?.map(({ image }, index) => {
              return (
                <Col key={index} className="gallery-image">
                  <img
                    onClick={() => {
                      setIsOpen(true);
                      setPhotoIndex(index + 1);
                    }}
                    style={{ borderRadius: "10px", cursor: "pointer" }}
                    className="img-fluid w-100 gallery-image"
                    src={image}
                    decoding="async"
                    alt=""
                  />
                </Col>
              );
            })}
          </Row>
          {isOpen && (
            <Lightbox
              mainSrc={images?.[photoIndex].image}
              nextSrc={images?.[(photoIndex + 1) % images?.length].image}
              prevSrc={
                images[(photoIndex + images?.length - 1) % images?.length].image
              }
              onCloseRequest={() => setIsOpen(false)}
              onMovePrevRequest={() =>
                setPhotoIndex((photoIndex + images.length - 1) % images.length)
              }
              onMoveNextRequest={() =>
                setPhotoIndex((photoIndex + 1) % images.length)
              }
            />
          )}
        </Container>
      ) : (
        <Loader />
      )}
    </Fragment>
  );
};

export default GalleryImages;
