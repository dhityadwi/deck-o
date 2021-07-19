import Dropdown from 'react-bootstrap/Dropdown';
import Form from 'react-bootstrap/Form';
import React, { useState, useEffect } from 'react';
import Deck from '../Deck/Deck';
import './yourDeck.scss';
import NoDeckFilter from './NoDeckFilter';
import { useSelector, useDispatch } from 'react-redux';
import { Button, Spinner } from 'reactstrap';
import { getAllDecks, getDecksCategory } from '../../redux/action/deckAction';

const YourDecks = () => {
  const { allDecksPagination, loading, deckCategory } = useSelector(
    (state) => state.deck
  );
  const dispatch = useDispatch();
  const [checks, setCheck] = useState([]);
  const [view, setView] = useState(false);
  const [select, setSelect] = useState('Select an Option');
  const [page, setPage] = useState(2);
  const [tes, setTes] = useState(true);

  const clickPagination = () => {
    setPage((prevState) => prevState + 1);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  const handleClear = (event) => {
    setCheck([]);
  };

  const handleCheckbox = (event) => {
    if (event.target.checked) {
      setCheck([...checks, event.target.value]);
    } else {
      setCheck(checks.filter((item) => item !== event.target.value));
    }
  };

  useEffect(() => {
    dispatch(getAllDecks(page));
    dispatch(getDecksCategory());
  }, [page]);

  return (
    <div className="your__deck">
      <div>
        <h3>All decks </h3>
      </div>
      <div className="your__deck__filter">
        <Dropdown className="your__deck__down">
          <Dropdown.Toggle className="your__deck__drop" id="dropdown-basic">
            Category
          </Dropdown.Toggle>
          {checks.length > 0 && view && (
            <div className="your__deck--reset" onClick={handleClear}>
              Reset
            </div>
          )}
          <Dropdown.Menu className="your__deck__drop__menus">
            {deckCategory.map((type) => (
              <div
                key={`default-${type._id}`}
                className="your__deck__drop__check"
              >
                <Form.Check
                  onSubmit={handleSubmit}
                  type="checkbox"
                  value={type.nameCategory}
                  label={type.nameCategory}
                  onChange={handleCheckbox}
                  checked={checks.includes(type.nameCategory)}
                />
              </div>
            ))}

            {/* {deckCategory.map((item) => 
               <div key={`default-${item.nameCategory}`} className="your__deck__drop__check">
               <Form.Check
                 onSubmit={handleSubmit}
                 type="checkbox"
                 value={item._id}
                 label={item.nameCategory}
                 onChange={handleCheckbox}
                 checked={checks.includes(type)}
               />
            )} */}
            <div>
              <button
                className="your__deck__btn"
                type="button"
                onClick={() => setView(true)}
              >
                Apply
              </button>
            </div>
          </Dropdown.Menu>
        </Dropdown>

        <Dropdown className="your__deck__down">
          <Dropdown.Toggle
            className="your__deck__drop--opt"
            id="dropdown-basic"
          >
            {/* {select.length > 0 && "Select an Option"}  */}
            {select}
          </Dropdown.Toggle>

          <Dropdown.Menu className="your__deck__drop__menu">
            {[
              'Most recent created',
              'Most mastered',
              'Most need to recall',
              'Most not studied',
            ].map((item) => (
              <div
                key={`default-${item}`}
                className="your__deck__drop__check--right"
              >
                <Dropdown.Item value={item} onClick={() => setSelect(item)}>
                  {item}
                </Dropdown.Item>
              </div>
            ))}
          </Dropdown.Menu>
        </Dropdown>
      </div>
      <div className="your__deck__result">
        {view &&
          checks.map((type) => (
            <div key={`default-${type}`} className="your__deck__result--view">
              {type}
            </div>
          ))}
      </div>
      {tes ? (
        <div className="your__deck__container">
          {allDecksPagination.map((deck, index) => (
            <Deck
              key={index}
              color={deck.color}
              description={deck.description}
              title={deck.title}
              deck_id={deck._id}
              username={deck.user_Id.username}
            />
          ))}
        </div>
      ) : (
        <NoDeckFilter />
      )}

      <div className="load">
        {loading ? (
          <Spinner
            color="secondary"
            style={{
              margin: '50px 50%',

              textAlign: 'center',
            }}
          />
        ) : (
          <Button
            color="secondary"
            style={{
              margin: '50px 40%',
              padding: '5px 50px',
              textAlign: 'center',
            }}
            onClick={clickPagination}
          >
            <div>Load more</div>
          </Button>
        )}
      </div>
    </div>
  );
};

export default YourDecks;
