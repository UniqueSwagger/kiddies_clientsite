import React from "react";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import GalleryDashboard from "../GalleryDashboard/GalleryDashboard";

const Gallery = () => {
  return (
    <section className="my-5">
      <SectionTitle
        title="Gallery of our classes"
        description="We provide three classes with nine to twenty children each aged twelve months to six years of age."
      />
      <GalleryDashboard />
    </section>
  );
};

export default Gallery;
