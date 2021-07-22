import Dropdown from 'react-bootstrap/Dropdown';
import Form from 'react-bootstrap/Form';
import React, { useState, useEffect } from 'react';
import Deck from '../Deck/Deck';
import './yourDeck.scss';
import NoDeckFilter from './NoDeckFilter';
import { useSelector, useDispatch } from 'react-redux';
import { Button, Spinner } from 'reactstrap';
import { getAllDecks, getDecksCategory } from '../../redux/action/deckAction';
import { filterAsyns } from '../../redux/action/filterAction';
import { shortAsyns } from '../../redux/action/sortAction';
// import { categoryAsync } from "../../redux/action/categoryAction";

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
  // const { data } = useSelector((state) => state.category);
  console.log(checks, 'category check');

  const { data, loadingSort } = useSelector((state) => state.sort);
  const { filter, loadingFilter } = useSelector((state) => state.filter);

  console.log(filter, 'data filter cat');
  console.log(data, 'ini data sort');

  const [showCate, setShowCate] = useState(false);

  const [deckMapping, setDeckMapping] = useState();

  console.log(deckMapping + ' deck mapping');

  const deckData = () => {
    if (data.length !== 0 || filter.length !== 0) {
      if (data.length !== 0) {
        return data;
      } else {
        return filter;
      }
    } else {
      return allDecksPagination;
    }
  };

  const clickPagination = () => {
    setPage((prevState) => prevState + 1);
  };

  const handleSubmit = () => {
    dispatch(filterAsyns(checks));
  };

  const handleClear = (event) => {
    setCheck([]);
  };

  const handleCheckbox = (event) => {
    if (event.target.checked) {
      setCheck([...checks, JSON.parse(event.target.value)]);
    } else {
      setCheck(
        checks.filter((item) => item !== JSON.parse(event.target.value))
      );
    }
    console.log(event.target.value, 'target value');
    console.log(event.target.checked, 'target checked');
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
        <Dropdown
          className="your__deck__down"
          show={showCate}
          onToggle={() => setShowCate(!showCate)}
        >
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
                  type="checkbox"
                  value={JSON.stringify(type)}
                  label={type.label}
                  onChange={handleCheckbox}
                  checked={checks.type}
                />
              </div>
            ))}

            <div>
              <button
                className="your__deck__btn"
                type="submit"
                onClick={() => {
                  setView(true);
                  setShowCate(false);
                  handleSubmit();
                }}
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
            {select}
          </Dropdown.Toggle>

          <Dropdown.Menu className="your__deck__drop__menu">
            <div className="your__deck__drop__check--right">
              <Dropdown.Item
                value={1}
                onClick={() => {
                  setSelect('Most recent created');
                  dispatch(shortAsyns(1));
                }}
              >
                Most recent created
              </Dropdown.Item>
              <Dropdown.Item
                value={2}
                onClick={() => {
                  setSelect('Most mastered');
                  dispatch(shortAsyns(2));
                }}
              >
                Most mastered
              </Dropdown.Item>
              <Dropdown.Item
                value={3}
                onClick={() => {
                  setSelect('Most need to recall');
                  dispatch(shortAsyns(3));
                }}
              >
                Most need to recall
              </Dropdown.Item>
              <Dropdown.Item
                value={4}
                onClick={() => {
                  setSelect('Most not studied');
                  dispatch(shortAsyns(4));
                }}
              >
                Most not studied
              </Dropdown.Item>
            </div>
          </Dropdown.Menu>
        </Dropdown>
      </div>
      <div className="your__deck__result">
        {view &&
          checks.map((type) => (
            <div key={`default-${type}`} className="your__deck__result--view">
              {type.label}
            </div>
          ))}
      </div>
      {tes ? (
        loadingSort || loadingFilter ? (
          <Spinner
            color="success"
            style={{ margin: '5% 45%', width: '3rem', height: '3rem' }}
          />
        ) : (
          <div className="your__deck__container">
            {deckData().map((deck, index) => (
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
        )
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
