import React from 'react';
import './deck.scss';

const Deck = ({ color }) => {
  return (
    <div className="deck" style={{ background: color }}>
      <div className="deck-title">
        <h3>German - Irregular Verbs</h3>
      </div>
    </div>
  );
};

export default Deck;
