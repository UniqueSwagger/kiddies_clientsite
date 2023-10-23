import React, { useEffect, useState } from "react";
import BreadCrumb from "../BreadCrumb/BreadCrumb";
import ScrollToTop from "../ScrollToTop/ScrollToTop";
import { Row, Col, Container, Badge } from "react-bootstrap"; // Import the Spinner component
import useAuth from "../../hooks/useAuth";
import axios from "axios";
import "./MyOrders.css";
import { useNavigate } from "react-router-dom";

const MyOrders = () => {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true); // State variable for loading
  const {
    currentUser: { email },
    token,
  } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(`http://localhost:5000/orders/${email}`, {
        headers: {
          authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        if (res.status === 200) {
          setOrders(res.data);
        } else {
          navigate("/login");
        }
      })
      .finally(() => {
        setLoading(false); // Set loading to false when the request is complete
      });
  }, [email, navigate, token]);

  const addedProducts = orders.map((order) => order.addedProducts);
  const flattenAddedProducts = addedProducts.flat();
  const statuses = orders.map((order) => order.status);

  return (
    <div>
      <ScrollToTop />
      <BreadCrumb title="My Orders" />
      {loading ? (
        <h3 className="text-center my-5">Loading...</h3>
      ) : orders?.length ? (
        <Container>
          <h3>My Orders</h3>
          <Row className="g-3 my-4">
            {flattenAddedProducts.map((product, index) => {
              const { _id, price, title, image, cartQuantity } = product;
              return (
                <Col key={_id} xs={12} md={4}>
                  <div className="order-card card bg-white p-3">
                    <Badge
                      className="px-2 pb-2 pt-1"
                      pill
                      bg={`${
                        statuses[index] === "Pending"
                          ? "danger"
                          : statuses[index] === "On Going"
                          ? "warning"
                          : "success"
                      }`}
                    >
                      {statuses[index]}
                    </Badge>
                    <div>
                      <img
                        style={{ zIndex: 1 }}
                        className="w-100"
                        src={image}
                        alt={title}
                      />
                    </div>
                    <small>{title}</small>
                    <h6>Original Price : ${price}</h6>
                    <h6>Ordered Quantity : {cartQuantity}</h6>
                    <div className="d-flex mt-2 align-items-center justify-content-between">
                      <div>
                        <span className="mb-0 h4 me-1">
                          Total : ${(price * cartQuantity).toFixed(2)}
                        </span>
                      </div>
                    </div>
                  </div>
                </Col>
              );
            })}
          </Row>
        </Container>
      ) : (
        <h3 className="text-center my-5">No Orders</h3>
      )}
    </div>
  );
};

export default MyOrders;
