import React, { useState, useEffect } from 'react';
import './home.scss';
import SessionCard from '../Session/SessionCard';
import Deck from '../Deck/Deck';
import NoDeckSession from './NoDeckSession';
import { withRouter, Link } from 'react-router-dom';
import {
  getAllDecks,
  getProgressDecksByUser,
} from '../../redux/action/deckAction';
import { useDispatch, useSelector } from 'react-redux';
import { Spinner } from 'reactstrap';

const Home = ({ history }) => {
  const dispatch = useDispatch();
  const { allDecks, loading } = useSelector((state) => state.deck);

  const [tes, setTes] = useState(true);

  useEffect(() => {
    dispatch(getProgressDecksByUser());
    dispatch(getAllDecks(1));
  }, []);

  return (
    <div>
      {tes ? (
        <div className="home">
          <h3>Your Last Session</h3>
          <div className="session-container">
            <SessionCard onClick={() => history.push('/home/test/result')} />
          </div>

          <div className="title-info">
            <h3>Home decks </h3>

            <Link to="/your-decks">
              <div>
                <p>View All</p>
              </div>
            </Link>
          </div>

          {loading ? (
            <Spinner
              color="success"
              style={{ margin: '5% 50%', width: '3rem', height: '3rem' }}
            />
          ) : (
            <div className="decks-container">
              {allDecks.map((deck, index) => (
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
          )}
        </div>
      ) : (
        <NoDeckSession />
      )}
    </div>
  );
};

export default withRouter(Home);
