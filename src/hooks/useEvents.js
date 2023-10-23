import { useEffect } from "react";
import { fetchEvents } from "../redux/slices/eventsSlice";
import { useDispatch, useSelector } from "react-redux";
const useEvents = () => {
  const dispatch = useDispatch();
  const { events } = useSelector((state) => state.events);
  useEffect(() => {
    dispatch(fetchEvents());
  }, [dispatch]);
  return events;
};

export default useEvents;
