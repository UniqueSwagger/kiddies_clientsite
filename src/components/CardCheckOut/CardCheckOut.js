import { RefreshIcon } from "@heroicons/react/outline";
import {
  PaymentElement,
  useElements,
  useStripe,
  CardElement,
} from "@stripe/react-stripe-js";
import React, { useState } from "react";
import useAuth from "../../hooks/useAuth";
import Swal from "sweetalert2";
import { useDispatch } from "react-redux";
import { setPayment } from "../../redux/slices/allProductSlice";

const CardCheckOut = ({ totalAddedProductsPrice, addedProducts }) => {
  const dispatch = useDispatch();
  const stripe = useStripe();
  const elements = useElements();
  const { currentUser } = useAuth();
  const [isLoading, setIsLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!stripe || !elements) {
      // Stripe.js has not yet loaded.
      // Make sure to disable form submission until Stripe.js has loaded.
      return;
    }
    setIsLoading(true);

    const { error, paymentIntent } = await stripe.confirmPayment({
      elements,
      redirect: "if_required",
      payment_method: {
        card: elements.getElement(CardElement),
        billing_details: {
          addedProducts,
          currentUser,
          totalAddedProductsPrice,
        },
      },
    });

    if (error) {
      console.log(error);
      error &&
        Swal.fire({
          title: "Payment Failed",
          text: error.message,
          icon: "error",
        }).then(() => setIsLoading(false));
    } else {
      Swal.fire({
        title: "Payment Successful",
        text: "Thank you for shopping with us! Now don't forget to fill up the form",
        icon: "success",
      }).then(() => setIsLoading(false));
      setSuccess(true);
      const payment = {
        addedProducts,
        currentUser,
        totalAddedProductsPrice,
        paymentIntent,
      };
      dispatch(setPayment(payment));
    }
    e.target.reset();
  };
  return (
    <form id="payment-form" onSubmit={handleSubmit}>
      <PaymentElement id="payment-element" />

      <button
        disabled={isLoading || !stripe || !elements || success}
        id="submit"
        className="card-button w-full"
      >
        <span id="button-text">
          {isLoading ? (
            <RefreshIcon className="h-6 w-6 mx-auto animate-spin text-orange-600" />
          ) : (
            <span>{success ? "Paid" : `Pay `}</span>
          )}
        </span>
      </button>
    </form>
  );
};

export default CardCheckOut;
