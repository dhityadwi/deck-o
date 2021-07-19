import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import Deck from '../../Components/Deck/Deck';
import Header from '../../Components/Header/Header';
import DetailPage from '../../Components/YourDecks/DetailPage/DetailPage';
import { ProgressBar } from 'react-bootstrap';
import assets from '../../assets';
import './make-test.scss';
import { ButtonLabel } from '../../Components/Button';
import { withRouter } from 'react-router-dom';
const TrueOrFalse = ({ history }) => {
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
                  <p className="text-left">
                    High bias is when the form of our hypothesis function h maps
                    poorly to the trend of the data.
                  </p>
                  <div className="d-flex align-items-center justify-content-between">
                    <ButtonLabel
                      onClick={() => setAnswer(false)}
                      title="False"
                      className={'w-40 pb-2 pt-2 border-bottom'}
                      backgroundColor={answer === false ? '#FF8264' : '#c78ef7'}
                      color="#fff"
                    />
                    <ButtonLabel
                      onClick={() => setAnswer(true)}
                      title="True"
                      className={'w-40 pb-2 pt-2 border-bottom'}
                      backgroundColor={answer === true ? '#539D85' : '#c78ef7'}
                      color="#fff"
                    />
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

export default withRouter(TrueOrFalse);
