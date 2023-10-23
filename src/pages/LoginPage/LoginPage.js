import React, { Fragment } from "react";
import Login from "../../components/Login/Login";
import ScrollToTop from "../../components/ScrollToTop/ScrollToTop";

const LoginPage = () => {
  return (
    <Fragment>
      <ScrollToTop />
      <Login />
    </Fragment>
  );
};

export default LoginPage;
