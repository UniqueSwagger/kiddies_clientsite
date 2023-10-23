import React, { Fragment, useState } from "react";
import { Disclosure } from "@headlessui/react";
import { MenuIcon, ShoppingCartIcon, XIcon } from "@heroicons/react/outline";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { Offcanvas } from "react-bootstrap";
import useAuth from "../../../hooks/useAuth";
import useProducts from "../../../hooks/useProducts";
import CartListItem from "../../CartListItem/CartListItem";
import "./Header.css";
import useFirebase from "../../../hooks/useFirebase";
const Header = () => {
  const navigate = useNavigate();
  const {
    currentUser: { displayName, photoURL },
    handleLogout,
  } = useAuth();
  const { admin } = useFirebase();

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const { addedProducts } = useProducts();
  const totalAddedProducts = addedProducts.reduce((acc, item) => {
    return acc + item.cartQuantity;
  }, 0);
  const totalAddedProductsPrice = addedProducts.reduce((acc, item) => {
    return acc + item.cartQuantity * item.price;
  }, 0);
  return (
    <header className="fixed-top total">
      <Disclosure as="nav" className="shadow-md">
        {({ open }) => (
          <Fragment>
            <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
              <div className="relative flex items-center justify-between h-16">
                <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                  {/* Mobile menu button*/}
                  <Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md text-gray-400  hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white text-white">
                    <span className="sr-only">Open main menu</span>
                    {open ? (
                      <XIcon className="block h-6 w-6" aria-hidden="true" />
                    ) : (
                      <MenuIcon className="block h-6 w-6" aria-hidden="true" />
                    )}
                  </Disclosure.Button>
                </div>
                {/* Navbar Left Side on large screen */}
                <div className="flex-1  flex items-center justify-center sm:justify-start">
                  <div className="flex-shrink-0 flex items-center">
                    {/* logo */}
                    <h1 className="text-2xl font-medium text-white mb-0 mb-lg-1">
                      <Link
                        className="text-white text-decoration-none"
                        to="/home"
                      >
                        Kiddies Educare
                      </Link>
                    </h1>
                  </div>
                  <div className="hidden sm:block sm:ml-6">
                    <div className="flex space-x-4">
                      {/* Navigation menu on large device */}
                      <NavLink
                        to={"/home"}
                        className="text-gray-50  hover:bg-white  px-3 py-2 rounded-md text-lg font-medium text-decoration-none text-none"
                      >
                        Home
                      </NavLink>
                      <NavLink
                        to={"/gallery"}
                        className="text-gray-50  hover:bg-white  px-3 py-2 rounded-md text-lg font-medium text-decoration-none text-none"
                      >
                        Gallery
                      </NavLink>
                      <NavLink
                        to={"/shop"}
                        className="text-gray-50 hover:bg-white  px-3 py-2 rounded-md text-lg font-medium text-decoration-none text-none"
                      >
                        Shop
                      </NavLink>
                      <NavLink
                        to={"/myOrders"}
                        className="text-gray-50 hover:bg-white  px-3 py-2 rounded-md text-lg font-medium text-decoration-none text-none"
                      >
                        My Orders
                      </NavLink>
                      <NavLink
                        to={"/about"}
                        className="text-gray-50 hover:bg-white  px-3 py-2 rounded-md text-lg font-medium text-decoration-none text-none"
                      >
                        About
                      </NavLink>
                      {admin && (
                        <NavLink
                          to={"/admin"}
                          className="text-gray-50 hover:bg-white  px-3 py-2 rounded-md text-lg font-medium text-decoration-none text-none"
                        >
                          Admin
                        </NavLink>
                      )}
                    </div>
                  </div>
                </div>
                {/* Navbar Right Side */}
                <div className="flex items-center pr-2  sm:ml-6 sm:pr-0 space-x-3 text-gray-300">
                  {/* User Name */}
                  <div className="flex items-center pr-2 sm:ml-6 sm:pr-0 space-x-4">
                    <div className="space-x-4 flex items-center">
                      {photoURL && (
                        <img
                          style={{ width: "40px", borderRadius: "50%" }}
                          src={photoURL}
                          loading="lazy"
                          alt="img"
                          referrerPolicy="no-referrer"
                        />
                      )}
                      {displayName && (
                        <span className="text-white text-xl  border-b-2 border-transparent">
                          {displayName}
                        </span>
                      )}
                      <div
                        className="relative cursor-pointer"
                        onClick={handleShow}
                      >
                        <ShoppingCartIcon
                          className="h-6 w-6 "
                          aria-hidden="true"
                        />

                        <span className="bg-white total px-1 text-xs rounded-md absolute bottom-3 left-4">
                          {totalAddedProducts}
                        </span>
                      </div>
                    </div>
                    {displayName ? (
                      <button
                        onClick={() => [handleLogout(), navigate("/")]}
                        className="px-4 py-2 bg-white text-red-600 font-medium rounded-full "
                      >
                        Logout
                      </button>
                    ) : (
                      <NavLink
                        className="text-white text-xl border-b-2 border-transparent hover:text-orange-400 text-decoration-none"
                        activeclassname="border-orange"
                        to="/login"
                      >
                        Login
                      </NavLink>
                    )}
                  </div>
                  {/* <HeaderCart /> */}

                  {/* cart menu */}

                  {/* cart menu end*/}
                </div>
              </div>
            </div>
            {/* Mobile Menus */}
            <Disclosure.Panel className="sm:hidden">
              <div className="px-2 pt-2 flex flex-column pb-3 space-y-1">
                <Disclosure.Button>
                  <Link
                    className="text-gray-300 hover:bg-gray-700  block px-3 py-2 rounded-md text-base font-medium text-decoration-none"
                    to="/home"
                  >
                    Home
                  </Link>
                </Disclosure.Button>
                <Disclosure.Button>
                  <Link
                    className="text-gray-300 hover:bg-gray-700  block px-3 py-2 rounded-md text-base font-medium text-decoration-none"
                    to="/gallery"
                  >
                    Gallery
                  </Link>
                </Disclosure.Button>
                <Disclosure.Button>
                  <Link
                    className="text-gray-300 hover:bg-gray-700  block px-3 py-2 rounded-md text-base font-medium text-decoration-none"
                    to="/shop"
                  >
                    Shop
                  </Link>
                </Disclosure.Button>
                <Disclosure.Button>
                  <Link
                    className="text-gray-300 hover:bg-gray-700  block px-3 py-2 rounded-md text-base font-medium text-decoration-none"
                    to="/myOrders"
                  >
                    My Orders
                  </Link>
                </Disclosure.Button>
              </div>
            </Disclosure.Panel>
            <Offcanvas placement="end" show={show} onHide={handleClose}>
              <Offcanvas.Header closeButton>
                <Offcanvas.Title>Shopping Cart</Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                {addedProducts.length ? (
                  addedProducts.map((addedProduct) => (
                    <CartListItem
                      key={addedProduct._id}
                      addedProduct={addedProduct}
                    />
                  ))
                ) : (
                  <h2>Your Cart is empty</h2>
                )}
              </Offcanvas.Body>
              <NavLink className="p-3 nav-link" to="/checkout">
                <button
                  onClick={handleClose}
                  className={`w-100 py-3 px-3 rounded-lg checkout-btn d-flex align-items-center justify-content-between text-white ${
                    !addedProducts.length && "d-none"
                  }`}
                >
                  <span className="h5 mb-0">Proceed To Checkout</span>
                  <span className="rounded fs-5 fw-bold total py-2 px-3 bg-white ">
                    ${totalAddedProductsPrice.toFixed(2)}
                  </span>
                </button>
              </NavLink>
            </Offcanvas>
          </Fragment>
        )}
      </Disclosure>
    </header>
  );
};

export default Header;
