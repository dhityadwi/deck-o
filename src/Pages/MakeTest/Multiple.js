import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import Deck from '../../Components/Deck/Deck';
import Header from '../../Components/Header/Header';
import DetailPage from '../../Components/YourDecks/DetailPage/DetailPage';
import { ProgressBar } from 'react-bootstrap';
import assets from '../../assets';
import styles from './make-test.scss';
import { ButtonLabel } from '../../Components/Button';
import { withRouter } from 'react-router-dom';
const Multiple = ({ history }) => {
  const [answer, setAnswer] = useState(null);
  return (
    <DetailPage>
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
              <p className="mb-0 text-center">Machine Learning</p>
            </div>
            <div className="row">
              <div className="col-lg-5 col-md-6 mx-auto">
                <div className="text-center">
                  <ProgressBar now={60} />
                  <img src={assets.FormulaOne} className="mt-4" />
                  <p className="text-left text-bold mt-4">
                    What is underfitting?
                  </p>

                  <div
                    className={`selectedAnswer card p-2 mb-2 `}
                    onClick={() => setAnswer('a')}
                    style={{
                      borderRadius: 10,
                      borderWidth: 1,
                      borderColor: answer === 'a' ? '#ab6fdc' : '#ddd',
                      cursor: 'pointer',
                    }}
                  >
                    <p className="mb-0 text-left">
                      If a learning algorithm is suffering from high variance,
                      getting more training data is likely to help.
                    </p>
                  </div>
                  <div
                    className="card p-2 mb-2"
                    onClick={() => setAnswer('b')}
                    style={{
                      borderRadius: 10,
                      borderWidth: 1,
                      borderColor: answer === 'b' ? '#ab6fdc' : '#ddd',
                      cursor: 'pointer',
                    }}
                  >
                    <p className="mb-0 text-left">
                      High bias is when the form of our hypothesis function h
                      maps poorly to the trend of the data.
                    </p>
                  </div>
                  <div
                    className="card p-2 mb-2"
                    onClick={() => setAnswer('c')}
                    style={{
                      borderRadius: 10,
                      borderWidth: 1,
                      borderColor: answer === 'c' ? '#ab6fdc' : '#ddd',
                      cursor: 'pointer',
                    }}
                  >
                    <p className="mb-0 text-left">
                      The average test error for the test set is.
                    </p>
                  </div>
                  <div
                    className="card p-2 mb-2"
                    onClick={() => setAnswer('d')}
                    style={{
                      borderRadius: 10,
                      borderWidth: 1,
                      borderColor: answer === 'd' ? '#ab6fdc' : '#ddd',
                      cursor: 'pointer',
                    }}
                  >
                    <p className="mb-0 text-left">
                      h of theta of a given input variable give us the
                      probability that our output is 1.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </DetailPage>
  );
};

export default withRouter(Multiple);
