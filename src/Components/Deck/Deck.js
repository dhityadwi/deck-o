import React from 'react';
import './deck.scss';
import { Link } from 'react-router-dom';

const Deck = ({
  color,
  title,
  deck_id,
  category_id,
  nameCategory,
  username,
}) => {
  // console.log(color, title, deck_id, category_id, nameCategory);

  return (
    <Link
      to={{
        pathname: `/detail/${deck_id}`,
        state: { username },
      }}
    >
      <div className="deck" style={{ background: `${color}` }}>
        <div className="deck-title">
          <h3>{title === '' ? 'No Title' : title}</h3>
        </div>
      </div>
    </Link>
  );
};

export default Deck;
