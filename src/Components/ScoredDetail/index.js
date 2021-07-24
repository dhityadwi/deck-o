import { faTimesCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import { Button, Modal } from 'react-bootstrap';
import assets from '../../assets';
import { ButtonLabel } from '../Button';
import { CardComplete } from '../Card';
import CardAnswer from '../CardAnswer';
const ScoredDetail = ({ score, resultTest }) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  console.log(resultTest?.dtResultTakeTest[0], ' props');

  return (
    <div>
      <CardComplete score={score} onClick={handleShow} />
      <Modal show={show} onHide={() => handleClose()}>
        <Modal.Header closeButton className="border-bottom-0">
          <Modal.Title>Test Result</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="text-center">
            <img src={assets.CourceComplete} width={200} />
            <h4 className="mb-0 mt-2" style={{ color: '#AB6FDC' }}>
              {resultTest?.dtResultDecksTest[0]?.score}
            </h4>
            <p style={{ color: '#898B8F' }}>Youre Score</p>
            {/* <h3 className={'mt-2'}>Keep studying!</h3>
            <h5 className={'mt-2'} style={{ color: '#3E3E3E' }}>
              You missed 8 out of 20 questions
            </h5> */}
            {/* <ButtonLabel
              title="Retake the test"
              color="#fff"
              className="w-100 pt-2 pb-2 border-bottom-purple"
            /> */}
            {resultTest?.dtResultTakeTest.map((data) => (
              <CardAnswer item={data} />
            ))}
          </div>
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default ScoredDetail;
