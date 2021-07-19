import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Deck from '../Deck/Deck';
import './myDeck.scss';
import { useSelector, useDispatch } from 'react-redux';
import MyDeckEmpty from './MyDeckEmpty';
import { getDecksByUser } from '../../redux/action/deckAction';

const MyDeck = () => {
  const [state, setState] = useState(true);
  const { deckByUser } = useSelector((state) => state.deck);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getDecksByUser());
  }, []);

  return (
    <div className="mydeck">
      <div className="mydeck__head">
        <span>My Decks</span>
        <Link to="/new-deck">
          <button className="mydeck__button">+ New Decks</button>
        </Link>
      </div>

      {deckByUser.length > 0 ? (
        <div className="mydeck__containers">
          {deckByUser.map((deck, index) => (
            <Deck
              key={index}
              color={deck.color}
              description={deck.description}
              title={deck.title}
              deck_id={deck._id}
              username={deck.user_Id.username}
            />
          ))}
        </div>
      ) : (
        <MyDeckEmpty />
      )}
    </div>
  );
};

export default MyDeck;
