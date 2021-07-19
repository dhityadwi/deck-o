import React from 'react';
import './index.scss';

const Bar = ({ off }) => {
  return (
    <div>
      <div className="flex">
        <div className="deck-title">
          <h3>New Decks</h3>
          <div className="bar "></div>
          <div className="detail">
            <div className="number">1</div>
            <p>Deck Details</p>
          </div>
        </div>
        <div className="deck-title">
          <h3>Saved just now</h3>
          <div className={`bar ${off ? 'off' : null}`}></div>
          <div className="detail">
            <div className="number">2</div>
            <p>List of terms</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Bar;
