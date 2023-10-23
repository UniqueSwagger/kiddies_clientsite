import styled from "styled-components";
export const BreadCrumbArea = styled.div`
  margin-top: 40px;
  background-image: url("https://i.ibb.co/YNpS085/pattern-951b276d.jpg");
  position: relative;
  background-attachment: scroll;
  background-position: center top;
  background-repeat: no-repeat;
  background-size: cover;
  padding: 75px 0 75px;
  z-index: 1;
  &::before {
    background: #33415c;
    content: "";
    height: 100%;
    left: -14%;
    position: absolute;
    top: 0;
    width: 60%;
    z-index: -1;
    transform: skew(40deg, 0deg);
  }
  .breadcrumb-item + .breadcrumb-item::before {
    color: #ffffff;
  }
`;

export const InnerContent = styled.div`
  position: relative;
  display: block;
`;
export const Title = styled.div`
  display: block;
  h2 {
    color: #ffffff;
    font-size: 30px;
    line-height: 40px;
    font-weight: 700;
    text-transform: capitalize;
  }
  @media only screen and (max-width: 767px) {
    margin-bottom: 16px;
  }
`;

export const BreadCrumbMenu = styled.div`
  position: relative;
  display: block;
  ul {
    position: relative;
    display: block;
    overflow: hidden;
    margin: 10px 0;
  }
  ul li {
    list-style: none;
    position: relative;
    float: left;
    color: #ffffff;
    font-size: 15px;
    line-height: 20px;
    font-weight: 400;
    text-transform: capitalize;
    font-family: "Rubik", sans-serif;
    transition: all 500ms ease;
  }
  ul li:last-child {
    margin-right: 0;
    padding-right: 0;
  }
  ul li a {
    color: #ffffff;
    font-weight: 700;
    transition: all 500ms ease;
  }
  ul li.active {
    color: #2e44d6;
  }
  ul li a:hover {
    color: #2e44d6;
  }
  @media only screen and (max-width: 767px) {
    display: block;
  }
`;
