import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
export const Button = ({ outline, title = "Button", className }) => {
  return (
    <button
      className={`btn btn-danger${outline ? "-outline" : ""} ${className} btn-sm`}
      style={{
        borderRadius: "1.5rem",
        paddingLeft: 20,
        paddingRight: 20,
        fontWeight: "bold",
        backgroundColor: "#C78EF7",
        border: "none",
      }}
    >
      <FontAwesomeIcon color={"#fff"} icon={faPlus} />
      <span className={"ml-2"}>{title}</span>
    </button>
  );
};

export const ButtonLabel = ({ outline, title = "Button", className, backgroundColor = "#C78EF7", color = "#C78EF7", onClick }) => {
  return (
    <button
      onClick={onClick}
      className={`btn btn-default${outline ? "-outline" : ""} ${className} btn-sm`}
      style={{
        borderRadius: "1.5rem",
        paddingLeft: 20,
        paddingRight: 20,
        fontWeight: "bold",
        backgroundColor,
      }}
    >
      <span className={"ml-2"} style={{ color, fontSize: 16 }}>
        {title}
      </span>
    </button>
  );
};
