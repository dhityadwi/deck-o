import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { withRouter } from 'react-router-dom';
import Deck from '../../Components/Deck/Deck';
import Header from '../../Components/Header/Header';
import DetailPage from '../../Components/YourDecks/DetailPage/DetailPage';

const ChooseDeck = ({ history }) => {
  return (
    <DetailPage>
      <div className="row  mb-3 mt-10" style={{ marginTop: '150px' }}>
        <div className="col-lg-10 col-md-12 mx-auto">
          <div className="container-fluid">
            <div className="text-center mb-3">
              <div style={{ position: 'absolute' }}>
                <FontAwesomeIcon icon={faArrowLeft} />
                <span className="ml-2">BACK</span>
              </div>
              <p className="mb-0 text-center">Prepare for your test</p>
            </div>
            <h3 className="text-center text-bold">Choose the deck</h3>
            <div className="row mt-5">
              <div
                className="col-lg-3 col-md-4 col-sm-6 col-6 mb-4"
                onClick={() => history.push('/home/test/true-or-false')}
              >
                <Deck color={'#AB6FDC'} label="German - Irregular Verbs" />
              </div>
              <div
                className="col-lg-3 col-md-4 col-sm-6 col-6 mb-4"
                onClick={() => history.push('/home/test/multiple')}
              >
                <Deck color={'#F4AA27'} label="German - Akkusativ" />
              </div>
              <div className="col-lg-3 col-md-4 col-sm-6 col-6 mb-4">
                <Deck color={'#FF8264'} label="Indonesian History" />
              </div>
              <div className="col-lg-3 col-md-4 col-sm-6 col-6 mb-4">
                <Deck
                  color={'#539D85'}
                  label="Probabilistic Graphical Models"
                />
              </div>
              <div className="col-lg-3 col-md-4 col-sm-6 col-6 mb-4">
                <Deck color={'#6884F5'} label="Machine Learning" />
              </div>
              <div className="col-lg-3 col-md-4 col-sm-6 col-6 mb-4">
                <Deck color={'#FF8264'} label="German - Dativ" />
              </div>
              <div className="col-lg-3 col-md-4 col-sm-6 col-6 mb-4">
                <Deck color={'#F4AA27'} label="Math" />
              </div>
              <div className="col-lg-3 col-md-4 col-sm-6 col-6 mb-4">
                <Deck color={'#AB6FDC'} label="Linear Regression" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </DetailPage>
  );
};

export default withRouter(ChooseDeck);
