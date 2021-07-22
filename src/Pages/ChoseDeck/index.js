import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useState } from 'react';
import { Modal } from 'react-bootstrap';
import { useSelector, useDispatch } from 'react-redux';
import { withRouter, Link, useHistory } from 'react-router-dom';
import Deck from '../../Components/Deck/Deck';
import Header from '../../Components/Header/Header';
import DetailPage from '../../Components/YourDecks/DetailPage/DetailPage';
import { getDecksByUser } from '../../redux/action/deckAction';
import {
  getResultTest,
  setId,
  takeTestMultiple,
} from '../../redux/action/testAction';

const ChooseDeck = ({ history }) => {
  const dispatch = useDispatch();

  const { loading } = useSelector((state) => state.deck);
  const deckByUser = useSelector((state) => state.deck?.deckByUser);
  const user_id = useSelector((state) => state.login.id);
  const { resultTest } = useSelector((state) => state.test);

  const [smShow, setSmShow] = useState(false);
  const [quizType, setQuizType] = useState('');
  const [deck_id, setDeck_id] = useState('');
  const [nameCategory, setNameCategory] = useState('');

  const showModal = (show) => {
    setSmShow(show);
  };

  const getDeckId = (id, name) => {
    setDeck_id(id);
    setNameCategory(name);
  };

  const handleMultiple = (id) => {
    history.push(`/home/test/multiple`, { deck_id, nameCategory });
    dispatch(takeTestMultiple({ decksId: deck_id }));
  };
  const handleTrueFalse = () => {
    history.push(`/home/test/result/${deck_id}`, { deck_id, nameCategory });
    // dispatch(takeTestMultiple({ decksId: deck_id }));
  };

  console.log(deck_id, ' deck id');

  useEffect(() => {
    dispatch(getDecksByUser(user_id));
    dispatch(getResultTest(deck_id));
  }, []);

  console.log(deck_id);
  return (
    <DetailPage>
      <div>
        {!deckByUser ? (
          <h1 style={{ marginTop: '150px' }}>Loading...</h1>
        ) : (
          <div className="row  mb-3 mt-10" style={{ marginTop: '150px' }}>
            <Modal
              size="sm"
              show={smShow}
              onHide={() => setSmShow(false)}
              aria-labelledby="example-modal-sizes-title-sm"
            >
              <Modal.Header closeButton>
                <Modal.Title id="example-modal-sizes-title-sm">
                  Type test
                </Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <div style={{ display: 'flex' }}>
                  <button
                    style={{ flex: '1', width: '50%' }}
                    onClick={() => handleMultiple(deck_id)}
                  >
                    Multiple
                  </button>

                  <button
                    style={{ flex: '1', width: '50%' }}
                    onClick={handleTrueFalse}
                  >
                    True or false
                  </button>
                </div>
              </Modal.Body>
            </Modal>
            <div className="col-lg-10 col-md-12 mx-auto">
              <div className="container-fluid">
                <div className="text-center mb-3">
                  <div style={{ position: 'absolute' }}>
                    <FontAwesomeIcon icon={faArrowLeft} />
                    <span className="ml-2">BACK</span>
                  </div>
                  <p className="mb-0 text-center">Prepare for your test</p>
                </div>
                <h3 className="text-center text-bold">Choose your deck</h3>
                <div className="row mt-5">
                  {deckByUser.length > 0 ? (
                    deckByUser.map((deck, index) => (
                      <div
                        key={index}
                        className="col-lg-3 col-md-4 col-sm-6 col-6 mb-4"
                        onClick={() => {
                          getDeckId(deck._id, deck.category_Id.nameCategory);
                        }}
                      >
                        <Deck
                          key={index}
                          color={deck.color}
                          description={deck.description}
                          title={deck.title}
                          deck_id={deck._id}
                          username={deck.user_Id.username}
                          type={'test'}
                          smShow={smShow}
                          showModal={showModal}
                          currentPath={window.location.pathname}
                          quizType={quizType}
                          resultTest={resultTest}
                        />
                      </div>
                    ))
                  ) : (
                    <h1>No decks</h1>
                  )}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </DetailPage>
  );
};

export default withRouter(ChooseDeck);
