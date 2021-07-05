import React, { useState } from 'react';
import './home.scss';

import SessionCard from '../Session/SessionCard';
import Deck from '../Deck/Deck';
import NoDeckSession from './NoDeckSession';

const Home = () => {
  const [state, setState] = useState(true);
  return (
    <div>
      {state ? (
        <div className="home">
          <h3>Your Last Session</h3>
          <div className="session-container">
            <SessionCard />
          </div>

          <div className="title-info">
            <h3>Your decks </h3>
            <a href="">View All </a>
          </div>
          <div className="decks-container">
            <Deck color={'#AB6FDC'} />
            <Deck color={'#FF8264'} />
            <Deck color={'#F4AA27'} />
            <Deck color={'#AB6FDC'} />
            <Deck color={'#6884F5'} />
            <Deck color={'#FF8264'} />
            <Deck color={'#F4AA27'} />
            <Deck color={'#AB6FDC'} />
          </div>
        </div>
      ) : (
        <NoDeckSession />
      )}
    </div>
  );
};

export default Home;
