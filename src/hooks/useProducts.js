import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../redux/slices/allProductSlice";
const useProducts = () => {
  const dispatch = useDispatch();
  const { products } = useSelector((state) => state.products);
  const { addedProducts } = useSelector((state) => state.products);
  const { payment } = useSelector((state) => state.products);
  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);
  return { products, addedProducts, payment };
};

export default useProducts;
