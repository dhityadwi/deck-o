import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { FiCheck } from 'react-icons/fi';
import { Link, useParams, useLocation } from 'react-router-dom';
import {
  getDecksByUser,
  editDeck,
  getDecksCategory,
} from '../../../redux/action/deckAction';
import { getCardsByDeckId } from '../../../redux/action/cardAction';
import '../EditDeck/editDeck.scss';

import { Toast, ToastBody, ToastHeader } from 'reactstrap';

const EditDeck = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const { deckByUser, loading, statusCode, deckCategory } = useSelector(
    (state) => state.deck
  );

  const { cardsByDeckId } = useSelector((state) => state.card);
  const [showListTerm, setShowListTerm] = useState(false);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [category, setCategory] = useState('');
  const [color, setColor] = useState('');

  const location = useLocation();

  const handleSubmit = () => {
    const data = {
      title: title,
      category_Id: category,
      description: description,
      color: color,
    };
    dispatch(editDeck(data, id));
  };

  const options = [
    { name: 'Mathematics', value: 'mathematics' },
    { name: 'Computer Science', value: 'Computer Science' },
    { name: 'Languages', value: 'Languages' },
    { name: 'Literature', value: 'Literature' },
    { name: 'Philosophy', value: 'Philosophy' },
    { name: 'Natural Science', value: 'Natural Science' },
    { name: 'Social Science', value: 'Social Science' },
    { name: 'Untagged', value: 'Untagged' },
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

  useEffect(() => {
    dispatch(getDecksByUser());
    dispatch(getDecksCategory());
    dispatch(getCardsByDeckId(id));
  }, []);

  return (
    <div>
      {loading ? (
        'Loading...'
      ) : (
        <div className="deck__edit">
          <div className="deck__edit__indicator">
            <div className="deck__edit__title">
              <h3>Edit Decks</h3>
              <div className="deck__edit__bar"></div>
              <div className="deck__edit__detail">
                <div className="deck__edit__number">1</div>
                <p>Edit Deck</p>
              </div>
            </div>
            <div className="deck__edit__title">
              <h5>Saved just now</h5>
              <div
                className={`deck__edit__bar ${showListTerm ? '' : 'off'} `}
              ></div>
              <div className="deck__edit__detail">
                <div className="deck__edit__number">2</div>
                <p>List of terms</p>
              </div>
            </div>
          </div>

          <div className="deck__edit__details">
            <h3>Deck Details</h3>
            <div className="deck__edit__form">
              <div className="deck__edit__form__left">
                <label htmlFor="">
                  <p>Title</p>
                </label>
                <input
                  type="text"
                  defaultValue={location.state.dataEdit.title}
                  onChange={(e) => setTitle(e.target.value)}
                />
                <label>Category</label>
                <select
                  defaultValue={location.state.dataEdit.category_Id}
                  onChange={(e) => setCategory(e.target.value)}
                >
                  {deckCategory.map((item) => (
                    <option key={item.label} value={item._id}>
                      {item.label}
                    </option>
                  ))}
                </select>
                <div className="deck__edit__color">
                  <p>Color Tag</p>
                  <div className="deck__edit__color--box">
                    {arrayColor.map((item, index) => (
                      <button
                        className="deck__edit__color--circel"
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
              <div className="deck__edit__form__right">
                <textarea
                  name="decription"
                  defaultValue={location.state.dataEdit.description}
                  onChange={(e) => setDescription(e.target.value)}
                  id=""
                  placeholder="    Decription (Optional)"
                ></textarea>
              </div>
            </div>
          </div>

          <div className="button__footer">
            <Link to={`/home`}>
              <button className="button__footer__cancel">Cancel</button>{' '}
            </Link>

            <Link
              to={{
                pathname: `/detail/edit-cards/${id}`,
                state: { editCardData: cardsByDeckId },
              }}
            >
              <button onClick={handleSubmit} className="button__footer__save">
                Save Changes
              </button>
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default EditDeck;
