import React, { useState, useEffect } from 'react';
import './swipecard.scss';
import TinderCard from 'react-tinder-card';
import Flippy, { FrontSide, BackSide } from 'react-flippy';
import { Progress } from 'reactstrap';
import Modal from 'react-modal';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import { useSelector, useDispatch } from 'react-redux';
import {
  getPratice,
  getNeedToRecall,
  getMastered,
  swipeLeft,
  swipeRight,
} from '../../redux/action/praticeAction';
import { Redirect, useHistory, useLocation, Link } from 'react-router-dom';

const SwipeCard = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const location = useLocation();
  const { pratice, loading, cardsAmount, afterSwipeColor } = useSelector(
    (state) => state.pratice
  );

  const { username } = useSelector((state) => state.login);

  const [currentCard, setCurrentCard] = useState(0);
  const [currentCardLeft, setCurrentCardLeft] = useState(0);
  const [currentCardRight, setCurrentCardRight] = useState(0);
  const [isOpen, setIsOpen] = useState(false);
  const [colorBg, setColorBg] = useState('#fff');

  const swipe = (direction, cardId) => {
    if (direction === 'left') {
      setCurrentCard((prevCount) => prevCount + 1);
      setCurrentCardLeft((prevCount) => prevCount + 1);
      setColorBg('#FFF3EE');
      dispatch(swipeLeft(pratice.DecksDetails._id, cardId));
    }

    if (direction === 'right') {
      setCurrentCard((prevCount) => prevCount + 1);
      setCurrentCardRight((prevCount) => prevCount + 1);
      setColorBg('#E7F6F1');
      dispatch(swipeRight(pratice.DecksDetails._id, cardId));
    }
  };

  const openModal = (n) => {
    setTimeout(() => {
      if (n === 0) {
        // setIsOpen(true)
      }
    }, 1000);
  };

  useEffect(() => {
    if (location.state.praticeFor === 'needtostudy') {
      dispatch(getPratice(location.state.deckid));
    }

    if (location.state.praticeFor === 'needtorecall') {
      dispatch(getNeedToRecall(location.state.deckid));
    }

    if (location.state.praticeFor === 'mastered') {
      dispatch(getMastered(location.state.deckid));
    }
  }, []);

  return (
    <div style={{ background: colorBg, textAlign: 'center' }}>
      {loading ? (
        'Loading...'
      ) : (
        <div>
          <div
            style={{
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'center',
              margin: '0 50px',
            }}
          >
            <Link
              to={{
                pathname: `/detail/${location.state.deckid}`,
                state: { username },
              }}
            >
              <FaArrowLeft size="20" />
            </Link>

            <Progress
              color="warning"
              style={{
                borderRadius: '44px',
                width: '50%',
                margin: '120px auto',
              }}
              value={(currentCard / cardsAmount) * 100}
            />
            <FaArrowRight size="20" />
          </div>

          <div className="swipe-container">
            <div className="circle orange">
              <p>{currentCardLeft}</p>
            </div>
            <div className="card-container" style={{ margin: 'auto' }}>
              {pratice && pratice.TestPractice?.length > 0
                ? pratice.TestPractice.map((item, index) => (
                    <TinderCard
                      key={index}
                      card_id={item._id}
                      onSwipe={(dir) => {
                        swipe(dir, item._id);
                        openModal(index);
                      }}
                      className="swipe"
                      preventSwipe={['up', 'down']}
                    >
                      <Flippy
                        flipOnClick={true}
                        flipDirection="horizontal"
                        className="card"
                      >
                        <FrontSide>
                          <div>
                            <h1>Terms</h1>
                            <h3>{item.term}</h3>
                          </div>
                        </FrontSide>
                        <BackSide>
                          <div>
                            <h1>Explanation</h1>
                            <h3>{item.explanation}</h3>
                          </div>
                        </BackSide>
                      </Flippy>
                    </TinderCard>
                  ))
                : ' This deck has zero card '}
            </div>
            <div className="circle green">
              <p>{currentCardRight}</p>
            </div>
          </div>
          <Modal isOpen={isOpen}>
            <h1>Hallo test Modal</h1>
          </Modal>
        </div>
      )}
    </div>
  );
};

export default SwipeCard;
