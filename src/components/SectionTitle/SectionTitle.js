import React from "react";

const SectionTitle = ({ title, description }) => {
  return (
    <div className="text-center w-11/12 sm:w-6/12 lg:w-8/12 mx-auto space-y-8">
      <h1 className="text-5xl text-medium text-slate-800 ">{title}</h1>
      <p className="text-slate-600 text-lg">{description}</p>
    </div>
  );
};

export default SectionTitle;
