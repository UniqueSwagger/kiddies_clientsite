import React, { Fragment } from "react";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import Event from "./Event/Event";
import useEvents from "../../../hooks/useEvents";
import Loader from "../../../components/Loader/Loader";
const Events = () => {
  const events = useEvents();
  return (
    <section className="my-5">
      {events.length ? (
        <Fragment>
          <SectionTitle
            title="Latest Events"
            description="Experience the magic of our latest events, where creativity, imagination, and joy come together in spectacular harmony, leaving your child with unforgettable moments of wonder."
          />
          <div className="py-12 w-10/12 mx-auto px-4 sm:px-8 lg:px-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-y-4 sm:gap-4 lg:gap-8 text-sm">
            {events?.map((event) => (
              <Event key={event._id} event={event} />
            ))}
          </div>
        </Fragment>
      ) : (
        <Loader />
      )}
    </section>
  );
};

export default Events;
