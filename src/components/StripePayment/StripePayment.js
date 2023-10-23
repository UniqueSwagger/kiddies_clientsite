import React, { useEffect, useState } from "react";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import "../CardCheckOut/CardCheckOut.css";
import CardCheckOut from "../CardCheckOut/CardCheckOut";
import axios from "axios";

const stripePromise = loadStripe(
  "pk_test_51Jx0AjCvip3LZhpPnP8CGuCjzE0Hqk5xX5VmWDpbwqRzxRZFH2zPIHhIYB0dzsyOngL2aDDU6TriwpbHNygxKcJs0044m9oakv"
);

const StripePayment = ({ addedProducts }) => {
  const totalAddedProductsPrice = addedProducts.reduce((acc, item) => {
    return acc + item.cartQuantity * item.price;
  }, 0);
  const [clientSecret, setClientSecret] = useState("");
  useEffect(() => {
    axios
      .post("http://localhost:5000/create-payment-intent", {
        totalAddedProductsPrice,
      })
      .then((res) => {
        setClientSecret(res.data.clientSecret);
      });
  }, [totalAddedProductsPrice]);
  const options = {
    clientSecret,
  };
  return (
    <div>
      {clientSecret && addedProducts?.length ? (
        <Elements options={options} stripe={stripePromise}>
          <CardCheckOut
            addedProducts={addedProducts}
            totalAddedProductsPrice={totalAddedProductsPrice.toFixed(2)}
          />
        </Elements>
      ) : (
        <h1>As your cart is empty you can't pay.</h1>
      )}
    </div>
  );
};

export default StripePayment;
