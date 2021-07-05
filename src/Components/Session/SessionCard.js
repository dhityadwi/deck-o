import React, { useState } from 'react';
import './session.scss';
import emot from '../../assets/image/emot-session.png';

const Session = () => {
  const [session, setSession] = useState([1]);
  return (
    <div>
      {session.length > 0 ? (
        <div className="session-card">
          <div className="title">Machine Learning</div>
          <p>Great progress! Keep studying to master this deck</p>
          <button>Resume</button>
        </div>
      ) : (
        <div className="no-session-container">
          <div className="session-content">
            <h3>Rara, you’ve got tons of decks! </h3>
            <p>Keep studying them before you take the test. Let’s review it!</p>
            <button>Star the session</button>
          </div>
          <div className="emot">
            <img src={emot} alt="" />
          </div>
        </div>
      )}
    </div>
  );
};

export default Session;
