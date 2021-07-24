import React, { useState, useEffect } from 'react';
import './session.scss';
import emot from '../../assets/image/emot-session.png';
import { Progress } from 'reactstrap';
import { useDispatch, useSelector } from 'react-redux';
import { getProgressDecksByUser } from '../../redux/action/deckAction';
import { useHistory } from 'react-router-dom';
import { Carousel } from 'react-bootstrap';

const Session = ({ onClick }) => {
  const dispatch = useDispatch();
  const history = useHistory();
  const { deckProgressByUser } = useSelector((state) => state.deck);
  const username = useSelector((state) => state.profile.username);

  useEffect(() => {
    dispatch(getProgressDecksByUser());
    console.log(deckProgressByUser[0]);
  }, []);
  return (
    <div style={{ display: 'flex' }}>
      {deckProgressByUser[0] ? (
        deckProgressByUser.length > 0 &&
        deckProgressByUser.slice(0, 3).map((item) => (
          <Carousel>
            <Carousel.Item>
              <div className="session-card">
                <div className="title">{item.decksId?.title}</div>
                <Progress
                  color="warning"
                  style={{
                    borderRadius: '44px',
                  }}
                  value={item.progress * 100}
                />
                <p>Great progress! Keep studying to master this deck</p>
                <button onClick={() => history.push(`/detail/${item._id}`)}>
                  Resume
                </button>
              </div>
            </Carousel.Item>
          </Carousel>
        ))
      ) : (
        <div>
          <div className="no-session-container">
            <div className="session-content">
              <h3>{username}, you’ve got tons of decks! </h3>
              <p>
                Keep studying them before you take the test. Let’s review it!
              </p>
              <button>Star the session</button>
            </div>
            <div className="emot">
              <img src={emot} alt="" />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Session;
