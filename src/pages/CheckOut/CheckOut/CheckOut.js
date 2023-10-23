import React, { useState } from "react";
import CheckOutItem from "../../../components/CheckOutItem/CheckOutItem";
import StripePayment from "../../../components/StripePayment/StripePayment";
import useProducts from "../../../hooks/useProducts";
import { Container, Row, Col, Form, Button, Spinner } from "react-bootstrap";
import useAuth from "../../../hooks/useAuth";
import axios from "axios";
import Swal from "sweetalert2";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import ScrollToTop from "../../../components/ScrollToTop/ScrollToTop";
import { clearTheCart } from "../../../redux/slices/allProductSlice";

const CheckOut = () => {
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  const { addedProducts } = useProducts();
  const totalAddedProductsPrice = addedProducts.reduce((acc, item) => {
    return acc + item.cartQuantity * item.price;
  }, 0);
  const {
    currentUser: { displayName, email },
  } = useAuth();
  const { register, handleSubmit } = useForm();
  const { payment } = useProducts();
  const haveDonePayment = payment.find(
    (item) => item.currentUser.email === email
  );

  const onSubmit = (data) => {
    setLoading(true);
    data.addedProducts = addedProducts;
    data.status = "pending";
    data.email = email;
    axios.post("http://localhost:5000/orders", data).then((res) => {
      if (res.data.insertedId) {
        dispatch(clearTheCart());
        setLoading(false);
        Swal.fire(
          "Ordered successfully!",
          "Thanks for shopping with us. We will contact you soon.",
          "success"
        );
      }
    });
  };
  return (
    <div className="mt-20 px-12">
      <ScrollToTop />
      <div style={{ background: "#F9FAFB" }}>
        <Container>
          <Row className="items-center">
            <Col xs={12} md={4} className="bg-white ">
              <h5 className="px-3 pt-3">Order Summary</h5>
              <div className="py-5 ">
                {addedProducts.length ? (
                  addedProducts.map((addedProduct) => (
                    <CheckOutItem
                      key={addedProduct._id}
                      addedProduct={addedProduct}
                    />
                  ))
                ) : (
                  <h6>Your Cart is empty</h6>
                )}
              </div>
              <table className="table  table-borderless my-5">
                <tbody>
                  <tr>
                    <td className="fw-bold">Subtotal</td>
                    <td className="fw-bold">
                      ${totalAddedProductsPrice.toFixed(2)}
                    </td>
                  </tr>
                  <tr>
                    <td className="fw-bold">Shipping</td>
                    <td className="fw-bold">0.00</td>
                  </tr>
                  <tr>
                    <td className="fw-bold">Tax</td>
                    <td className="fw-bold">0.00</td>
                  </tr>
                  <tr className="border-top">
                    <td className="fw-bold">Total</td>
                    <td className="fw-bold">
                      ${totalAddedProductsPrice.toFixed(2)}
                    </td>
                  </tr>
                </tbody>
              </table>
            </Col>
            <Col xs={12} md={8}>
              <StripePayment addedProducts={addedProducts} />
            </Col>
          </Row>
          <div>
            <h5 className="px-3 pt-3">Personal details</h5>
            <Form className="m-5" onSubmit={handleSubmit(onSubmit)}>
              <Row xs={1} sm={1} md={2}>
                <div className="mx-auto">
                  <Form.Group className="mb-3">
                    <Form.Label className="fw-bold">Name*</Form.Label>
                    <Form.Control
                      {...register("name")}
                      required
                      type="text"
                      defaultValue={displayName}
                      placeholder="Your name"
                    />
                  </Form.Group>
                  <Form.Group className="mb-3">
                    <Form.Label className="fw-bold">Email*</Form.Label>
                    <Form.Control
                      {...register("email")}
                      required
                      disabled
                      defaultValue={email}
                      type="email"
                      placeholder="Your email"
                    />
                  </Form.Group>
                  <Form.Group className="mb-3">
                    <Form.Label className="fw-bold">Phone number*</Form.Label>
                    <Form.Control
                      {...register("phone")}
                      required
                      type="number"
                      placeholder="Your phone"
                    />
                  </Form.Group>
                </div>
                <div className="mx-auto">
                  <Form.Group className="mb-3">
                    <Form.Label className="fw-bold">Message</Form.Label>
                    <Form.Control
                      {...register("description")}
                      as="textarea"
                      placeholder="Any special message?"
                      rows={3}
                    />
                  </Form.Group>
                  <Form.Group className="mb-3">
                    <Form.Label className="fw-bold">City*</Form.Label>
                    <Form.Control
                      required
                      type="text"
                      {...register("city")}
                      placeholder="Enter your city name"
                    />
                  </Form.Group>
                  {loading ? (
                    <Button className="ms-auto d-block my-5 w-50" disabled>
                      <Spinner
                        as="span"
                        animation="border"
                        size="sm"
                        role="status"
                        aria-hidden="true"
                      />
                      <span className="visually-hidden">Loading...</span>
                    </Button>
                  ) : totalAddedProductsPrice !== 0 ? (
                    <Button
                      disabled={!haveDonePayment}
                      className="ms-auto d-block my-5 w-50"
                      type="submit"
                    >
                      Place Order
                    </Button>
                  ) : (
                    <Button disabled className="ms-auto d-block my-5 w-50">
                      Place Order
                    </Button>
                  )}
                </div>
              </Row>
            </Form>
          </div>
        </Container>
      </div>
    </div>
  );
};

export default CheckOut;
