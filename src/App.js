import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import AuthProvider from "./context/AuthProvider";
import ForgotPasswordPage from "./pages/ForgotPasswordPage/ForgotPasswordPage";
import Home from "./pages/Home/Home/Home";
import LoginPage from "./pages/LoginPage/LoginPage";
import SignupPage from "./pages/SignupPage/SignupPage";
import EventDetails from "./pages/Home/Events/EventDetails/EventDetails";
import Header from "./components/SharedComponents/Header/Header";
import Footer from "./components/SharedComponents/Footer/Footer";
import Shop from "./pages/Shop/Shop";
import GalleryPage from "./pages/GalleryPage/GalleryPage";
import EventsPage from "./pages/EventsPage/EventsPage";
import AboutUs from "./pages/AboutUs/AboutUs";
import CheckOut from "./pages/CheckOut/CheckOut/CheckOut";
import PrivateRoute from "./Private/PrivateRoute";
import MyOrders from "./components/MyOrders/MyOrders";
import NotFound from "./pages/NotFound/NotFound";
import AdminDashBoard from "./pages/AdminDashboard/AdminDashboard";

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/eventDetails/:id" element={<EventDetails />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/gallery" element={<GalleryPage />} />
          <Route
            path="/checkout"
            element={
              <PrivateRoute>
                <CheckOut />
              </PrivateRoute>
            }
          />
          <Route
            path="/myOrders"
            element={
              <PrivateRoute>
                <MyOrders />
              </PrivateRoute>
            }
          />
          <Route path="/events" element={<EventsPage />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignupPage />} />
          <Route path="/forgot-password" element={<ForgotPasswordPage />} />
          <Route
            path="/admin/*"
            element={
              <PrivateRoute>
                <AdminDashBoard />
              </PrivateRoute>
            }
          />

          <Route path="/*" element={<NotFound />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
