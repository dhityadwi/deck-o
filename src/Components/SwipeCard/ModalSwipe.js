import React from 'react';
import Modal from 'react-modal';
import { Link } from 'react-router-dom';

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    padding: '50px',
    display: 'flex',
    flexDirection: 'column',
  },
  centerText: {
    textAlign: 'center',
  },
};

const ModalSwipe = ({ isOpen, type, id, username }) => {
  return (
    <div className="container">
      <Modal isOpen={isOpen} style={customStyles}>
        <img
          src="https://i.ibb.co/ngRPf2b/Frame-4460.png"
          alt="Frame-4460"
          border="0"
          style={{ margin: '0 auto', textAlign: 'center' }}
        />
        <h1 style={customStyles.centerText}>Yay! Great job!</h1>
        <p style={customStyles.centerText}>You finished reviewed {type} deck</p>
        <Link
          to={{
            pathname: `/detail/${id}`,
            state: { username },
          }}
        >
          <button
            style={{
              background: '#E6C7FF',
              borderRadius: '28px',
              padding: '10px 20px',
              color: 'white',
              textAlign: 'center',
              border: 'none',
              width: '100%',
            }}
          >
            back to detail
          </button>
        </Link>
      </Modal>
    </div>
  );
};

export default ModalSwipe;
