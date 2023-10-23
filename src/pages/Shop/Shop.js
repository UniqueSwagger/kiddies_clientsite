import React from "react";
import BreadCrumb from "../../components/BreadCrumb/BreadCrumb";
import { BsCartPlusFill } from "react-icons/bs";
import { AiOutlineMinus } from "react-icons/ai";
import { AiOutlinePlus } from "react-icons/ai";
import { Row, Col, Pagination } from "react-bootstrap";
import { useDispatch } from "react-redux";
import useProducts from "../../hooks/useProducts";
import "./Shop.css";
import {
  addToCart,
  decreaseQuantity,
  increaseQuantity,
} from "../../redux/slices/allProductSlice";
import Loader from "../../components/Loader/Loader";

const Shop = () => {
  const dispatch = useDispatch();
  const { products } = useProducts();
  const { addedProducts } = useProducts();
  const [active, setActive] = React.useState(1);
  const handleClick = (event) => {
    window.scrollTo(0, 40);
    setActive(Number(event.target.innerText));
  };
  const productsPerPage = 6;
  const indexOfLastProduct = active * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = products.slice(
    indexOfFirstProduct,
    indexOfLastProduct
  );
  let items = [];
  for (let number = 1; number <= 3; number++) {
    items.push(
      <Pagination.Item key={number} active={number === active}>
        {number}
      </Pagination.Item>
    );
  }
  return (
    <div>
      <BreadCrumb title="Shop" />
      {products?.length ? (
        <div>
          <Row className="mx-3 g-3 my-5 pb-5">
            {currentProducts.map((singleProduct) => {
              const { _id, title, image, originalPrice, price } = singleProduct;
              const matchedProduct = addedProducts.find(
                (item) => item._id === _id
              );
              return (
                <Col key={_id} xs={6} md={4} lg={4}>
                  <div className="product-card bg-white p-3">
                    <div>
                      <img
                        style={{ zIndex: 1 }}
                        className="w-100"
                        src={image}
                        alt={title}
                      />
                    </div>
                    <h4 className="my-2 text-center text-gray-600">{title}</h4>
                    <div className="d-flex mt-2 align-items-center justify-content-between">
                      <div>
                        <span className="mb-0 h4 me-1 text-teal-600">
                          ${price}
                        </span>
                        {originalPrice && (
                          <del className="text-muted">${originalPrice}</del>
                        )}
                      </div>
                      {matchedProduct ? (
                        <div className="cart-quantity-icon">
                          <div className="d-flex align-items-center">
                            <AiOutlineMinus
                              onClick={() =>
                                dispatch(decreaseQuantity(matchedProduct))
                              }
                            />
                            <span className="mx-2">
                              {matchedProduct.cartQuantity}
                            </span>
                            <AiOutlinePlus
                              onClick={() =>
                                dispatch(increaseQuantity(matchedProduct))
                              }
                            />
                          </div>
                        </div>
                      ) : (
                        <div
                          onClick={() => dispatch(addToCart(singleProduct))}
                          className="cart-icon"
                        >
                          <BsCartPlusFill className="fs-4" />
                        </div>
                      )}
                    </div>
                  </div>
                </Col>
              );
            })}
            <Pagination
              onClick={(event) => handleClick(event)}
              className="justify-center mt-5 pt-3"
            >
              {items}
            </Pagination>
          </Row>
        </div>
      ) : (
        <Loader />
      )}
    </div>
  );
};

export default Shop;
