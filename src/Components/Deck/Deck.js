import React from 'react';
import './deck.scss';
import { Link } from 'react-router-dom';

const Deck = ({ color }) => {
  return (
    <Link to="home/detail">
      <div className="deck" style={{ background: color }}>
        <div className="deck-title">
          <h3>German - Irregular Verbs</h3>
        </div>
      </div>
    </Link>
  );
};

export default Deck;
