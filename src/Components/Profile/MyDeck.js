import React from "react";
import { Link } from "react-router-dom";
import Deck from "../Deck/Deck";
import "./myDeck.scss";

const MyDeck = () => {
  return (
    <div className="mydeck">
      <div className="mydeck__head">
        <span>My Decks</span>
        <Link to="/new-deck">
          <button className="mydeck__button">+ New Decks</button>
        </Link>
      </div>

      <div className="mydeck__containers">
        <Deck color={"#AB6FDC"} />
        <Deck color={"#FF8264"} />
        <Deck color={"#F4AA27"} />
        <Deck color={"#AB6FDC"} />
        <Deck color={"#6884F5"} />
        <Deck color={"#FF8264"} />
        <Deck color={"#F4AA27"} />
        <Deck color={"#AB6FDC"} />
        <Deck color={"#AB6FDC"} />
      </div>
    </div>
  );
};

export default MyDeck;
