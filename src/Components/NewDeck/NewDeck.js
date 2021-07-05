import React, { useState } from 'react';
import './newdeck.scss';
import circleAdd from '../../assets/img/mdi_plus-circle.png';

const YourDeck = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [category, setCategory] = useState('');
  const [color, setColor] = useState('');
  const [showListTerm, setShowListTerm] = useState(false);

  const options = [
    { name: 'Mathematics', value: 'mathematics' },
    { name: 'Computer Science', value: 'Computer Science' },
    { name: 'Languages', value: 'Languages' },
    { name: 'Literature', value: 'Literature' },
    { name: 'Philosophy', value: 'Philosophy' },
  ];

  const handleNext = () => {
    setShowListTerm(true);
    console.log(title, description, category);
  };

  const handleSubmit = () => {};

  return (
    <div className="your-deck">
      <div className="flex">
        <div className="deck-title">
          <h3>New Decks</h3>
          <div className="bar"></div>
          <div className="detail">
            <div className="number">1</div>
            <p>Deck Details</p>
          </div>
        </div>
        <div className="deck-title">
          <h5>Saved just now</h5>
          <div className={`bar ${showListTerm ? '' : 'off'} `}></div>
          <div className="detail">
            <div className="number">2</div>
            <p>List of terms</p>
          </div>
        </div>
      </div>
      {!showListTerm ? (
        <div className="deck-details">
          <h3>Deck Details</h3>
          <div className="form">
            <div className="left-form">
              <label htmlFor="">
                <p>Title*</p>
              </label>
              <input
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
              <label>Category</label>
              <select
                value={category}
                onChange={(e) => setCategory(e.target.value)}
              >
                {options.map((item) => (
                  <option key={item.name} value={item.value}>
                    {item.name}
                  </option>
                ))}
              </select>
              <div className="color-tag">
                <p>Color Tag</p>
                <div className="circle-box">
                  <div className="circle"></div>
                  <div className="circle"></div>
                  <div className="circle"></div>
                  <div className="circle"></div>
                  <div className="circle"></div>
                </div>
              </div>
            </div>
            <div className="right-form">
              <textarea
                name="decription"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                id=""
                placeholder="    Decription (Optional)"
              ></textarea>
            </div>
          </div>
        </div>
      ) : (
        <div className="terms">
          <h3>List of Terms</h3>
          <div className="terms-container">
            <div className="term-input">
              <label htmlFor="">Term</label>
              <input type="text" className="term" />
            </div>
            <div className="term-input">
              <label htmlFor="">Explanation</label>
              <input type="text" className="term" />
            </div>
            <div className="term-input">
              <input type="file" className="term" />
            </div>
          </div>
          <div className="add-deck-btn">
            <img src={circleAdd} alt="" />
          </div>
        </div>
      )}

      <div className="button-footer">
        {showListTerm ? (
          <button onClick={handleSubmit}>Create this deck</button>
        ) : (
          <button onClick={handleNext}>Next </button>
        )}
      </div>
    </div>
  );
};

export default YourDeck;
