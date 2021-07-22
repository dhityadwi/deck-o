import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState, useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Deck from '../../Components/Deck/Deck';
import Header from '../../Components/Header/Header';
import DetailPage from '../../Components/YourDecks/DetailPage/DetailPage';
import { ProgressBar } from 'react-bootstrap';
import assets from '../../assets';
import styles from './make-test.scss';
import { ButtonLabel } from '../../Components/Button';
import { withRouter } from 'react-router-dom';
import {
  setId,
  nextTestMultiple,
  getResultTest,
} from '../../redux/action/testAction';

const Multiple = ({ history }) => {
  const dispatch = useDispatch();
  const { loading, testDeckId, finished, totalQuiz } = useSelector(
    (state) => state.test
  );
  const testQuiz = useSelector((state) => state.test?.testQuiz);
  const [trackQuiz, setTrackQuiz] = useState(0);

  const postAnswer = (deckid, cardid, status) => {
    console.log(deckid, cardid, status);
    setTrackQuiz((prevCount) => prevCount + 1);
    dispatch(nextTestMultiple(deckid, cardid, status.toString()));
  };

  // if (trackQuiz === totalQuiz) {
  //   setTimeout(() => {
  //     history.push(`/home/test/result/${testDeckId}`, {
  //       deckId: '',
  //       test: 22,
  //     });
  //   }, 2500);
  // }
  console.log(trackQuiz);

  useEffect(() => {
    if (trackQuiz === totalQuiz) {
      setTimeout(() => {
        history.push(`/home/test/result/${testDeckId}`, {
          deckId: '',
          test: 22,
        });
      }, 2500);
    }
  }, []);

  return (
    <DetailPage>
      <div>
        {loading ? (
          <h1 style={{ textAlign: 'center', marginTop: '150px' }}>
            Loading...
          </h1>
        ) : testQuiz ? (
          <div className="row  mb-3" style={{ marginTop: '150px' }}>
            <div className="col-lg-10 col-md-10 mx-auto">
              <div className="container-fluid">
                <div className="text-center mb-3">
                  <div
                    style={{ position: 'absolute' }}
                    onClick={() => history.push('/home/test/choose-deck')}
                  >
                    <FontAwesomeIcon icon={faArrowLeft} />
                    <span className="ml-2">BACK</span>
                  </div>
                  <p className="mb-0 text-center">
                    Deck Name :
                    {testQuiz && testQuiz.dtDeck[0].title
                      ? testQuiz.dtDeck[0].title
                      : 'No title'}
                  </p>
                </div>
                <div className="row">
                  <div className="col-lg-5 col-md-6 mx-auto">
                    <div className="text-center">
                      <ProgressBar now={60} />
                      <img
                        src={testQuiz && testQuiz.dtCard[0].imageExplanation}
                        className="mt-4"
                      />
                      <p className="text-left text-bold mt-4">
                        {testQuiz && testQuiz.dtCard[0].term}
                      </p>

                      {testQuiz &&
                        testQuiz.dtExplanation.map((answer, index) => (
                          <div key={index}>
                            <div
                              className="card p-2 mb-2"
                              style={{
                                borderRadius: 10,
                                borderWidth: 1,
                                borderColor:
                                  answer === 'b' ? '#ab6fdc' : '#ddd',
                                cursor: 'pointer',
                              }}
                              onClick={() => {
                                postAnswer(
                                  history.location.state.deck_id,
                                  answer.cardId,
                                  answer.status,
                                  trackQuiz
                                );
                              }}
                            >
                              <div className="mb-0 text-left">
                                {answer.explane1}
                                {answer.explane2}
                                {answer.explane3}
                                {answer.explane4}
                              </div>
                            </div>
                          </div>
                        ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ) : (
          'loading...'
        )}
      </div>
    </DetailPage>
  );
};

export default withRouter(Multiple);
