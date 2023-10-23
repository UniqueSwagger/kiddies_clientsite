import React from "react";
import { Link } from "react-router-dom";
import { Carousel } from "react-bootstrap";
import banner1 from "../../../images/slide1.jpg";
import banner2 from "../../../images/slide2.jpg";
import banner3 from "../../../images/slide3.jpg";
import "./HeroSection.css";
import {
  SlideContent,
  SlideItem,
  SlideItemImage,
  SlideTitle,
  SlideContentArea,
  SlideContentBox,
} from "../../../components/StyledComponents/Slider";
const HeroSection = () => {
  const carouselBlog = [
    {
      id: 1,
      title: "Education from birth begins with us",
      subTitle:
        "Our children's academy, together with one of the oldest private schools, created a joint school preparation project. The goal of the project is the harmonious development, socialization for admission to the best educational institutions of our city.",
      image: banner3,
    },
    {
      id: 2,
      title: "Learning and Playing",
      subTitle:
        "Educator has a fully integrated learning management system. Create courses, individual lessons, and quizzes.",
      image: banner1,
    },
    {
      id: 3,
      title: "We Are Child Care Professional",
      subTitle:
        "Place your child in the highest quality care, today! School bells are ringing loud and clear; vacation’s over, school is here.Let us remember: One book, one pen, one child and one teacher can change the world.",
      image: banner2,
    },
  ];
  return (
    <Carousel
      indicators={false}
      controls={true}
      className="slider my-5 py-3"
      autoPlay={true}
    >
      {carouselBlog.map((item) => {
        const { image, id, title, subTitle } = item;
        return (
          <Carousel.Item key={id}>
            <SlideItem>
              <SlideItemImage>
                <img src={image} alt={`${title}`} className="img-fluid" />
              </SlideItemImage>
              <SlideContent>
                <SlideContentBox>
                  <SlideContentArea>
                    <SlideTitle className="w-75">{title}</SlideTitle>
                    <p>{subTitle}</p>
                  </SlideContentArea>
                </SlideContentBox>
              </SlideContent>
            </SlideItem>
          </Carousel.Item>
        );
      })}
    </Carousel>
  );
};

export default HeroSection;
