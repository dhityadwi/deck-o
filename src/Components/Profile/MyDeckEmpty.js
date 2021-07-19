import React from "react";
import "./myDeckEmpty.scss";
import icon from "../../assets/img/noDeck.svg";

const MyDeckEmpty = () => {
  return (
    <div className="emptyDeck">
      <img src={icon} alt="icon" />
      <h3>No Deck</h3>
      <p>No harm to add one, right?</p>
    </div>
  );
};

export default MyDeckEmpty;
