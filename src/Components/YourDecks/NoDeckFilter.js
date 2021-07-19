import React from "react";
import "./noDeckFilter.scss";
import icon from "../../assets/img/nodeckFilter.svg";

const NoDeckFilter = () => {
  return (
    <div className="emptyDeckFilter">
      <img src={icon} alt="icon" />
      <h3>No deck found</h3>
      <p>Maybe tunning the sort or filter</p>
    </div>
  );
};

export default NoDeckFilter;
