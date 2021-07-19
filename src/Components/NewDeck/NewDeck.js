import React, { useState, useEffect } from 'react';
import './newdeck.scss';
import { FiCheck } from 'react-icons/fi';
import { useSelector, useDispatch } from 'react-redux';
import { createDeck, getDecksCategory } from '../../redux/action/deckAction';
import { useHistory } from 'react-router-dom';

import Bar from '../Bar';

const YourDeck = () => {
  const dispatch = useDispatch();
  const history = useHistory();

  const { deckCategory, loading } = useSelector((state) => state.deck);

  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [category, setCategory] = useState('');
  const [color, setColor] = useState('');
  const [showListTerm, setShowListTerm] = useState(false);

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
    const data = {
      title,
      category_Id: category,
      description,
      color,
    };
    dispatch(createDeck(data));

    if (!loading) {
      history.push('/new-card');
    }
  };

  useEffect(() => {
    dispatch(getDecksCategory());
  }, []);

  return (
    <div className="your-deck">
      <Bar off={true} />

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
              {deckCategory.map((item) => (
                <option key={item.nameCategory} value={item._id}>
                  {item.nameCategory}
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
                      setColor(item);
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

      <div className="button-footer">
        {loading ? 'Loading...' : <button onClick={handleNext}>Next </button>}
      </div>
    </div>
  );
};

export default YourDeck;
