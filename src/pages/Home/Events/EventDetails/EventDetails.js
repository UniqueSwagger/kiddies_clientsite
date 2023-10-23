import {
  ClockIcon,
  LocationMarkerIcon,
  ColorSwatchIcon,
  OfficeBuildingIcon,
  MailIcon,
  PhoneIcon,
} from "@heroicons/react/outline";
import React, { Fragment } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { useParams } from "react-router-dom";
import BreadCrumb from "../../../../components/BreadCrumb/BreadCrumb";
import Loader from "../../../../components/Loader/Loader";
import ScrollToTop from "../../../../components/ScrollToTop/ScrollToTop";
import useEvents from "../../../../hooks/useEvents";
const EventDetails = () => {
  const { id } = useParams();
  const events = useEvents();
  const event = events?.find((event) => event._id === id);
  return (
    <Fragment>
      <ScrollToTop />
      {events.length ? (
        <div>
          <BreadCrumb title={event.title} />
          <Container>
            <div className="flex items-center mx-3 my-10 border-bottom py-4">
              <div className="bg-primary text-gray-200 w-16 h-16 text-base top-0 text-center p-2">
                <span className="text-xl">{event.fromDate.slice(0, 2)}</span>
                <br />
                <span>{event.fromMonth}</span>
              </div>
              <div className="ms-4">
                <h2>{event.title}</h2>
                <div className="flex text-slate-500 items-center">
                  <span>
                    <ClockIcon className="w-4 h-4 me-2" />
                  </span>
                  <span>
                    {event.fromDate} {event.fromTime} {" - "}
                    {event.toDate} {event.toTime}
                  </span>
                </div>
              </div>
            </div>
            <div>
              <Row xs={1} md={2}>
                <Col>
                  <img
                    className="w-100 mb-5 mb-lg-0"
                    src={event.image}
                    alt="event"
                  />
                </Col>
                <Col>
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d369106.7267949492!2d-79.65824079514913!3d43.71789901030551!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89d4cb90d7c63ba5%3A0x323555502ab4c477!2z4Kaf4Kaw4Kao4KeN4Kaf4KeLLCDgpoXgpqjgp43gpp_gpr7gprDgpr_gppMsIOCmleCmvuCmqOCmvuCmoeCmvg!5e0!3m2!1sbn!2sbd!4v1641205417342!5m2!1sbn!2sbd"
                    width="670"
                    className="w-100 border-0"
                    height="310"
                    allowFullScreen
                    loading="lazy"
                    title="map"
                  ></iframe>
                </Col>
              </Row>
              <div>
                <p className="text-muted fs-6 my-3">{event.description}</p>
              </div>
              <div className="my-5">
                <h3 className="border-b border-gray-400 pb-3 text-2xl">
                  Event Details
                </h3>
                <div className="flex text-slate-500 flex-lg-row flex-column items-start items-lg-center justify-between">
                  <div>
                    <div className="flex items-center">
                      <ClockIcon className="w-4 h-4 me-2" />
                      <strong className="me-3">Date :</strong> {event.fromDate}
                      {event.fromTime} {" - "}
                      {event.toDate} {event.toTime}
                    </div>
                    <div className="flex items-center">
                      <LocationMarkerIcon className="w-4 h-4 me-2" />
                      <strong className="me-3">Address :</strong>{" "}
                      {event.location}
                    </div>
                    <div className="flex items-center">
                      <ColorSwatchIcon className="w-4 h-4 me-2" />
                      <strong className="me-3">Time :</strong> {event.fromTime}{" "}
                      {" - "}
                      {event.toTime}
                    </div>
                  </div>
                  <div>
                    <div className="flex items-center">
                      <OfficeBuildingIcon className="w-4 h-4 me-2" />
                      <strong className="me-3">Venue :</strong> {event.venue}
                    </div>
                    <div className="flex items-center">
                      <PhoneIcon className="w-4 h-4 me-2" />
                      <strong className="me-3">Phone :</strong> 1-677-124-44227
                    </div>
                    <div className="flex items-center">
                      <MailIcon className="w-4 h-4 me-2" />
                      <strong className="me-3">Email :</strong>{" "}
                      s.rahmanrahi191491@outlook.com
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Container>
        </div>
      ) : (
        <Loader />
      )}
    </Fragment>
  );
};

export default EventDetails;
