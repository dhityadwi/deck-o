import Dropdown from "react-bootstrap/Dropdown";
import Form from "react-bootstrap/Form";
import React, { useState } from "react";
import Deck from "../Deck/Deck";
import "./yourDeck.scss";

const YourDecks = () => {
  const [checks, setCheck] = useState([]);
  const [view, setView] = useState(false);
  const [select, setSelect] = useState("Select an Option");

  const handleSubmit = (event) => {
    event.preventDefault();
  };
  const handleClear = (event) => {
    setCheck([]);
  };

  const handleCheckbox = (event) => {
    // event.prevenDefault();
    if (event.target.checked) {
      setCheck([...checks, event.target.value]);
    } else {
      setCheck(checks.filter((item) => item !== event.target.value));
    }
    console.log(event.target.value, "target value");
  };
  // console.log(checks, "target cek");

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
            {[
              "Mathematics",
              "Computer Science",
              "Language",
              "Literature",
              "Philosophy",
              "Natural Science",
              "Social Science",
              "Untagged",
            ].map((type) => (
              <div key={`default-${type}`} className="your__deck__drop__check">
                <Form.Check
                  onSubmit={handleSubmit}
                  type="checkbox"
                  value={type}
                  label={type}
                  onChange={handleCheckbox}
                  checked={checks.includes(type)}
                />
              </div>
            ))}
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
              "Most recent created",
              "Most mastered",
              "Most need to recall",
              "Most not studied",
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

        {/* <select aria-label="Default select example">
          <option value="none" selected disabled hidden>
            Select an Option
          </option>
          <option value="1">Most recent created</option>
          <option value="2">Most mastered</option>
          <option value="3">Most need to recall</option>
          <option value="4">Most not studied</option>
        </select> */}
      </div>

      <div className="your__deck__result">
        {view &&
          checks.map((type) => (
            <div key={`default-${type}`} className="your__deck__result--view">
              {type}
            </div>
          ))}
      </div>

      <div className="your__deck__container">
        <Deck color={"#AB6FDC"} />
        <Deck color={"#FF8264"} />
        <Deck color={"#F4AA27"} />
        <Deck color={"#AB6FDC"} />
        <Deck color={"#6884F5"} />
        <Deck color={"#FF8264"} />
        <Deck color={"#F4AA27"} />
        <Deck color={"#AB6FDC"} />
      </div>
    </div>
  );
};

export default YourDecks;
