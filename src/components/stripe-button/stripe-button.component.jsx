import React from "react";
import "./stripe-button.styles.scss";
import StripeCheckout from "react-stripe-checkout";

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishablekey =
    "pk_test_51JSsZ7GN39VnzQ2FmQI7LnZSSECm7lwxsHABnU2PYyAekcs2KQJ8zIi5P55xyKUAwaePBdOtTbCGwKDSBPG2a2G700S553ez3Z";

  const onToken = (token) => {
    console.log(token);
    alert("Payment successful");
  };
  return (
    <StripeCheckout
      label="Pay Now"
      name="Crown clothing"
      billingAddress
      shippingAddress
      image="https://svgshare.com/i/CUz.svg"
      description={`Your total is ${price}`}
      amount={priceForStripe}
      panelLabel="Pay Now"
      token={onToken}
      stripeKey={publishablekey}
    />
  );
};

export default StripeCheckoutButton;
