import React from "react";
import { useSelector } from "react-redux";
import "./home.scss";
const NoDeckSession = () => {
  const username = useSelector((state) => state.profile.username);
  return (
    <div className="no-deck-session">
      <h3>Welcome, {username}</h3>
      <p>Aching you next test with us. Ready to create your new deck?</p>
      <button>Create new deck</button>
    </div>
  );
};

export default NoDeckSession;
