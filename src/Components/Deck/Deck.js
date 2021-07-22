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
  type,
  showModal,
  currentPath,
  getDeckId,
  resultTest,
}) => {
  return (
    <div>
      {currentPath === '/home/test/choose-deck' ? (
        <div
          className="deck"
          style={{ background: `${color}` }}
          onClick={() => showModal(true)}
        >
          <div className="deck-title">
            <h3>{title === '' ? 'No Title' : title}</h3>
          </div>
        </div>
      ) : resultTest ? (
        console.log('result')
      ) : (
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
      )}
    </div>
  );
};

export default Deck;
