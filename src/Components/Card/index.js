import React from "react";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import assets from "../../assets";

export const CardProgress = ({ label, progress = 0 }) => {
  return (
    <div className="card mb-4" style={{ borderRadius: 10 }}>
      <div className="card-body d-flex flex-direction-row justify-content-between align-items-center">
        <div className="d-flex flex-direction-row align-items-center">
          <div style={{ width: 50, height: 50 }}>
            <CircularProgressbar value={progress} text={`${progress}`} />
          </div>
          <h6 className="ml-4">{label}</h6>
        </div>
        <div>
          <FontAwesomeIcon color={"#898B8F"} size={20} icon={faChevronRight} />
        </div>
      </div>
    </div>
  );
};

export const CardComplete = ({ score = 60, onClick }) => {
  return (
    <div className="card mb-4" style={{ borderRadius: 10, cursor: "pointer" }} onClick={onClick}>
      <div className="card-body d-flex flex-direction-row justify-content-between align-items-center">
        <div className="d-flex flex-direction-row align-items-center">
          <div style={{ width: 50, height: 50 }}>
            <img src={assets.HuggingFace} width={50} />
          </div>
          <h5 className="ml-4">
            Scored:<span style={{ color: "#AB6FDC" }}>{score}%</span>
          </h5>
        </div>
        <div>
          <FontAwesomeIcon color={"#898B8F"} size={20} icon={faChevronRight} />
        </div>
      </div>
    </div>
  );
};
