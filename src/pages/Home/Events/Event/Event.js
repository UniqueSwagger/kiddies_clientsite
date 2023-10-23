import React from "react";
import { ClockIcon, LocationMarkerIcon } from "@heroicons/react/outline";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
const Event = ({ event }) => {
  const {
    title,
    fromDate,
    toDate,
    fromTime,
    toTime,
    location,
    image,
    _id,
    fromMonth,
  } = event;
  const navigate = useNavigate();
  return (
    <div key={_id} className="relative space-y-4">
      <div
        className="cursor-pointer"
        onClick={() => navigate(`/eventDetails/${_id}`)}
      >
        <img src={image} alt="event" />
        <div className="bg-orange-400 text-gray-200 absolute w-16 h-16 text-base top-0 text-center p-2">
          <span className="text-xl">{fromDate.slice(0, 2)}</span> <br />
          <span>{fromMonth}</span>
        </div>
      </div>
      <div>
        <h3 className="text-gray-600 border-b border-gray-400 pb-3 text-2xl">
          <Link className="text-decoration-none" to={`/eventDetails/${_id}`}>
            {title}
          </Link>
        </h3>
        <div className="flex text-slate-500 items-center">
          <span>
            <ClockIcon className="w-4 h-4 me-2" />
          </span>
          <span>
            {fromDate} {fromTime} {" - "}
            {toDate} {toTime}
          </span>
        </div>
        <div className="flex text-slate-500 items-center">
          <span>
            <LocationMarkerIcon className="w-4 h-4 me-2" />
          </span>
          <span>{location}</span>
        </div>
      </div>
    </div>
  );
};

export default Event;
