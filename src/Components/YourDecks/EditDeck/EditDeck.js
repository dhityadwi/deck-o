import React, { useState } from "react";
import circleAdd from "../../../assets/img/mdi_plus-circle.png";
import "../EditDeck/editDeck.scss";

const EditDeck = () => {
  const [showListTerm, setShowListTerm] = useState(false);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");
  const [color, setColor] = useState("");

  const handleNext = () => {
    setShowListTerm(true);
    console.log(title, description, category);
  };

  const handleSubmit = () => {};

  const options = [
    { name: "Mathematics", value: "mathematics" },
    { name: "Computer Science", value: "Computer Science" },
    { name: "Languages", value: "Languages" },
    { name: "Literature", value: "Literature" },
    { name: "Philosophy", value: "Philosophy" },
    { name: "Natural Science", value: "Natural Science" },
    { name: "Social Science", value: "Social Science" },
    { name: "Untagged", value: "Untagged" },
  ];

  return (
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
            className={`deck__edit__bar ${showListTerm ? "" : "off"} `}
          ></div>
          <div className="deck__edit__detail">
            <div className="deck__edit__number">2</div>
            <p>List of terms</p>
          </div>
        </div>
      </div>
      {!showListTerm ? (
        <div className="deck__edit__details">
          <h3>Deck Details</h3>
          <div className="deck__edit__form">
            <div className="deck__edit__form__left">
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
              <div className="deck__edit__color">
                <p>Color Tag</p>
                <div className="deck__edit__color--box">
                  <div className="deck__edit__color--circel"></div>
                  <div className="circle"></div>
                  <div className="circle"></div>
                  <div className="circle"></div>
                  <div className="circle"></div>
                </div>
              </div>
            </div>
            <div className="deck__edit__form__right">
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
        <div className="deck__edit__terms">
          <h3>List of Terms</h3>
          <div className="deck__edit__terms--container">
            <div className="deck__edit__terms--input">
              <label htmlFor="">Term</label>
              <input type="text" className="term" />
            </div>
            <div className="deck__edit__terms--input">
              <label htmlFor="">Explanation</label>
              <input type="text" className="term" />
            </div>
            <div className="deck__edit__terms--input">
              <input type="file" className="term" />
            </div>
          </div>

          <div className="deck__edit__terms--container">
            <div className="deck__edit__terms--input">
              <label htmlFor="">Term</label>
              <input type="text" className="term" />
            </div>
            <div className="deck__edit__terms--input">
              <label htmlFor="">Explanation</label>
              <input type="text" className="term" />
            </div>
            <div className="deck__edit__terms--input">
              <input type="file" className="term" />
            </div>
          </div>
          <div className="deck__edit__terms--add">
            <img src={circleAdd} alt="" />
          </div>
        </div>
      )}

      <div className="button__footer">
        <button className="button__footer__cancel">Cancel</button>
        {showListTerm ? (
          <button onClick={handleSubmit} className="button__footer__save">
            Save Changes
          </button>
        ) : (
          <button onClick={handleNext} className="button__footer__save">
            Next{" "}
          </button>
        )}
      </div>
    </div>
  );
};

export default EditDeck;
