import { faTimesCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import assets from '../../assets';
import './index.scss';
const CardAnswer = ({ item }) => {
  return (
    <div className={'card mt-4 text-left shadow'} style={{ borderRadius: 10 }}>
      <div
        className={`card-header text-white answer-${
          item.type ? 'true' : 'false'
        } d-flex flex-direction-row align-items-center`}
        style={{ borderTopLeftRadius: 10, borderTopRightRadius: 10 }}
      >
        <FontAwesomeIcon icon={faTimesCircle} />
        <h5 className="header-title mb-0 ml-3">
          {item.type ? 'Correct' : 'False'}
        </h5>
      </div>
      <div className={'card-body'}>
        <p style={{ color: '#C2C3C6' }}>Term</p>
        <p style={{ color: '#3E3E3E' }}>{item.cardId.term}</p>
        <p style={{ color: '#C2C3C6' }}>Explanation</p>
        <p style={{ color: '#3E3E3E' }}>{item.cardId.explanation}</p>
        <div className={'text-center'}>
          {item.cardId.imageExplanation && (
            <img src={item.cardId.imageExplanation} height={80} />
          )}
        </div>
      </div>
    </div>
  );
};

export default CardAnswer;
