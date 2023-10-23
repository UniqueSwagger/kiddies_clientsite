import styled from "styled-components";

export const FooterTitle = styled.h5`
  font-size: 21px;
  font-weight: 600;
  color: #3d56f0;
  margin-bottom: 40px;
  text-transform: uppercase;
`;

export const FooterTop = styled.div`
  background: #c4eafb;
  background-size: cover;
  background-position: center;
  padding: 150px 0 50px;
  position: relative;
  &:after {
    content: "";
    height: 80px;
    position: absolute;
    left: 0;
    width: 100%;
    z-index: 2;
    background-repeat: no-repeat;
    background-image: url("https://i.ibb.co/sFvRgJX/line-bg1.png");
    top: 0;
    background-size: 100%;
  }
`;
export const FooterBottom = styled.div`
  background-color: #c4eafb;
  padding: 40px 0;
  color: #191d21;
  border-top: 1px solid rgba(0, 0, 0, 0.1);
  .btn-link {
    color: #3d56f0;
    font-size: 18px;
  }
  ul {
    margin: 0;
  }
`;

export const InformationDiv = styled.div`
  ul {
    margin-top: -8px;
    display: table;
  }
  ul li {
    transition: all 1s;
    float: left;
    padding: 0;
    width: 50%;
    position: relative;
  }
  ul li:hover {
    transform: translateX(10px);
  }
  ul li:hover:before {
    color: #1abc9c;
  }
  ul li a {
    color: #191918;
    font-size: 18px;
    font-weight: 400;
    line-height: 28px;
    padding: 8px 0 8px 20px;
    display: block;
    text-transform: uppercase;
    text-decoration: none;
  }
  ul li:before {
    content: "";
    position: absolute;
    left: 0;
    top: 18px;
    display: block;
    width: 7px;
    height: 7px;
    background: #4862f1;
    border-radius: 6px;
  }
`;

export const RecentEvents = styled.div`
  .singleEvent {
    margin-bottom: 20px;
    align-items: center;
    display: flex;
    overflow: hidden;
  }
  .eventImage {
    width: 100px;
    min-width: 100px;
    margin: 0;
    border-radius: 6px;
  }
  .eventInfo {
    background: transparent;
    padding: 0;
    border: none;
  }
  .eventImage + .eventInfo {
    padding-left: 20px;
    padding-right: 10px;
  }
`;

export const SubscribeForm = styled.div`
  input {
    background-color: #fff;
    margin: 0 0 15px 0;
    border: 0;
    padding: 20px 30px;
    height: 60px;
    color: #000;
    border-radius: 15px;
  }
`;
