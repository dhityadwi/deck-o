import React, { useState } from 'react';
import './newdeck.scss';
import { FiCheck, FiPlusCircle } from 'react-icons/fi';
import circleAdd from '../../assets/img/mdi_plus-circle.png';

import NewCard from '../NewCard/NewCard';

const YourDeck = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [category, setCategory] = useState('');
  const [colorTag, setColorTag] = useState('');
  const [showListTerm, setShowListTerm] = useState(false);

  const options = [
    { name: 'Mathematics', value: 'mathematics' },
    { name: 'Computer Science', value: 'Computer Science' },
    { name: 'Languages', value: 'Languages' },
    { name: 'Literature', value: 'Literature' },
    { name: 'Philosophy', value: 'Philosophy' },
  ];

  const [activecolor, setActiveColor] = useState([
    false,
    false,
    false,
    false,
    false,
  ]);
  const arrayColor = ['#F4AA27', '#AB6FDC', '#FF8264', '#539D85', '#6884F5'];
  const colors = [
    [true, false, false, false, false],
    [false, true, false, false, false],
    [false, false, true, false, false],
    [false, false, false, true, false],
    [false, false, false, false, true],
  ];

  const handleNext = () => {
    setShowListTerm(true);
    console.log(title, description, category, colorTag);
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
          <h3>Saved just now</h3>
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
                  {arrayColor.map((item, index) => (
                    <button
                      className="circle"
                      key={index}
                      onClick={() => {
                        setActiveColor(colors[index]);
                        setColorTag(item);
                      }}
                      style={{ background: item }}
                    >
                      {activecolor[index] ? <FiCheck /> : ''}
                    </button>
                  ))}
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
        <div>
          <h2 style={{ marginTop: '50px' }}>List of Card</h2>
          <NewCard />
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
