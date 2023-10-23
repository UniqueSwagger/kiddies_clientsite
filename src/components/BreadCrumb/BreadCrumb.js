import React from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col, BreadcrumbItem } from "react-bootstrap";
import {
  BreadCrumbArea,
  BreadCrumbMenu,
  InnerContent,
  Title,
} from "../StyledComponents/BreadCrumbStyle";
const BreadCrumb = ({ title }) => {
  return (
    <BreadCrumbArea>
      <Container>
        <Row>
          <Col xs={12}>
            <InnerContent>
              <Title>
                <h2>{title}</h2>
              </Title>
              <BreadCrumbMenu>
                <ul>
                  <li className="breadcrumb-item">
                    <Link className="text-decoration-none" to="/home">
                      Home
                    </Link>
                  </li>
                  <BreadcrumbItem>{title}</BreadcrumbItem>
                </ul>
              </BreadCrumbMenu>
            </InnerContent>
          </Col>
        </Row>
      </Container>
    </BreadCrumbArea>
  );
};

export default BreadCrumb;
