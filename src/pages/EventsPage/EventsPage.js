import React from "react";
import BreadCrumb from "../../components/BreadCrumb/BreadCrumb";
import ScrollToTop from "../../components/ScrollToTop/ScrollToTop";
import Events from "../Home/Events/Events";

const EventsPage = () => {
  return (
    <div>
      <ScrollToTop />
      <BreadCrumb title="Events" />
      <Events />
    </div>
  );
};

export default EventsPage;
