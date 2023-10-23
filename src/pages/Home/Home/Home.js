import React, { Fragment } from "react";
import ScrollToTop from "../../../components/ScrollToTop/ScrollToTop";
import Events from "../Events/Events";
import Features from "../Features/Features";
import Gallery from "../Gallery/Gallery";
import HeroSection from "../HeroSection/HeroSection";
import AnotherHero from "../AnotherHero/AnotherHero";

const Home = () => {
  return (
    <Fragment>
      <ScrollToTop />
      <HeroSection />
      <Features />
      <AnotherHero />
      <Events />
      <Gallery />
    </Fragment>
  );
};

export default Home;
