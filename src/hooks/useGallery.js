import { useEffect } from "react";
import { fetchGalleryImages } from "../redux/slices/gallerySlice";
import { useDispatch, useSelector } from "react-redux";
const useEvents = () => {
  const dispatch = useDispatch();
  const { gallery } = useSelector((state) => state.gallery);
  useEffect(() => {
    dispatch(fetchGalleryImages());
  }, [dispatch]);
  return gallery;
};

export default useEvents;
