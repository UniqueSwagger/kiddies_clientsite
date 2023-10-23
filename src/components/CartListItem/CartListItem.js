import React from "react";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import { RiDeleteBinLine } from "react-icons/ri";
import { useDispatch } from "react-redux";
import {
  decreaseQuantity,
  increaseQuantity,
  removeFromCart,
} from "../../redux/slices/allProductSlice";
const CartListItem = ({ addedProduct }) => {
  const dispatch = useDispatch();
  const { cartQuantity, price, image, title } = addedProduct;
  return (
    <div className="d-flex align-items-center">
      <img className="w-25 me-3" src={image} alt="" />
      <div>
        <small className=" d-block">{title}</small>
        <small className="text-muted">Item price ${price}</small>
        <div className="d-flex align-items-center my-2">
          <h5 className="mb-0">${(price * cartQuantity).toFixed(2)}</h5>
          <div className="cart-quantity-icon  mx-5">
            <div className="d-flex align-items-center">
              <AiOutlineMinus
                onClick={() => dispatch(decreaseQuantity(addedProduct))}
              />
              <span className="mx-2">{cartQuantity}</span>
              <AiOutlinePlus
                onClick={() => dispatch(increaseQuantity(addedProduct))}
              />
            </div>
          </div>
          <div>
            <RiDeleteBinLine
              onClick={() => dispatch(removeFromCart(addedProduct))}
              style={{ cursor: "pointer" }}
              className="text-danger fs-4"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartListItem;
