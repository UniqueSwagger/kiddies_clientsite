import styled from "styled-components";
import { Container } from "react-bootstrap";
export const SlideItem = styled.div`
  position: relative;
`;

export const SlideItemImage = styled.div`
  img {
    object-fit: cover;
    mask-image: url("https://i.ibb.co/k2dbk5c/slide-bg.png");
    mask-position: center center;
    mask-repeat: no-repeat;
    mask-size: auto 100%;
  }
  @media screen and (max-width: 991px) {
    img {
      height: 600px;
    }
  }
  @media screen and (max-width: 767px) {
    img {
      height: 450px;
    }
  }
`;

export const SlideContent = styled.div`
  display: block;
  height: 100%;
  left: 0;
  position: absolute;
  top: 0;
  width: 100%;
`;

export const SlideContentBox = styled(Container)`
  position: relative;
  top: 50%;
  transform: translateY(-50%);
  transition: all 1s ease 0.5s;
  display: flex;
  height: 100%;
  align-items: center;
`;

export const SlideContentArea = styled.div`
  p {
    max-width: 600px;
    font-size: 18px;
    margin-bottom: 40px;
    font-weight: 500;
    color: #000;
    line-height: 30px;
    font-size: 1.3rem;
  }
  @media screen and (max-width: 1200px) {
    padding-left: 50px;
    p {
      margin-bottom: 20px;
      font-size: 1.1rem;
    }
  }
  @media screen and (max-width: 767px) {
    margin-right: 12px;
    padding: 10px 20px;
    font-size: 13px;
    text-align: left;
  }
  p {
    margin-bottom: 10px;
    padding-right: 35px;
    font-size: 1.1rem;
  }
  a {
    margin-right: 10px;
    font-size: 14px;
  }
`;

export const SlideTitle = styled.div`
  font-size: 70px;
  line-height: 70px;
  font-family: "Abhaya Libre", serif;
  color: #3d56f0;
  @media screen and (max-width: 1200px) {
    font-size: 50px;
    margin-bottom: 5px;
    line-height: 55px;
  }
  @media screen and (max-width: 767px) {
    font-size: 30px;
    margin-bottom: 5px;
    line-height: 35px;
    span:after {
      content: none;
    }
    span {
      padding: 0;
    }
  }
`;
