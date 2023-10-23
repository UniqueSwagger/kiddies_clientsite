import React from "react";
import BreadCrumb from "../../components/BreadCrumb/BreadCrumb";
import ScrollToTop from "../../components/ScrollToTop/ScrollToTop";
import Gallery from "../Home/Gallery/Gallery";

const GalleryPage = () => {
  return (
    <div>
      <ScrollToTop />
      <BreadCrumb title="Gallery" />
      <Gallery />
    </div>
  );
};

export default GalleryPage;
