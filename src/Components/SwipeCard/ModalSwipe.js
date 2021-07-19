import React from 'react';
import { withRouter } from 'react-router-dom';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Header from '../../Components/Header/Header';
import assets from '../../assets';
import { ButtonLabel } from '../../Components/Button';
import { ProgressBar } from 'react-bootstrap';
import './NotifResult.css';

const ModalSwipe = ({ history }) => {
  return (
    <div className="container">
      <Header />

      <div
        className="d-flex justify-content-center align-items-left flex-column"
        style={{ height: '30vh', background: '#fff3ee', width: '100%' }}
      >
        <div
          style={{ position: 'absolute' }}
          onClick={() => history.push('/home/practice/needtorecal')}
        >
          <p className="need">
            All Decks / Computer Science / Machine Learning / Need to Recall
          </p>

          <FontAwesomeIcon icon={faArrowLeft} />

          <span className="ml-2">BACK</span>
          <ProgressBar
            now={60}
            style={{
              position: 'absolute',
              width: '588px',
              height: '12px',
              left: '200px',
              top: '100px',
              background: '#FFA780',
              borderRadius: '44px',
            }}
          />
        </div>
      </div>

      <div
        className="d-flex justify-content-center align-items-center flex-column"
        style={{ height: '50vh' }}
      >
        <img src={assets.ResultGood} />
        <h5 className="mt-3 text-bold">Yay! Great job!</h5>
        <p className="text-bold f-12">
          You finished reviewed “Need to Recall” deck
        </p>
        <div style={{ width: '10%' }}>
          <ButtonLabel
            onClick={() => history.push('/home/practice/needtorecal')}
            title="Back to"
            className={'w-100 pb-2 pt-2 border-bottom-purple'}
            backgroundColor={'#c78ef7'}
            color="#fff"
          />
        </div>
      </div>
    </div>
  );
};

export default ModalSwipe;
