import React, { useState } from 'react';
import { FiCamera } from 'react-icons/fi';
import './card.scss';

const NewCard = ({ termValue, expValue, onChangeTerm, onChangeExp }) => {
  const [image, setImage] = useState(null);

  const handleImage = (e) => {
    setImage(URL.createObjectURL(e.target.files[0]));
  };

  console.log(image);

  return (
    <div className="terms">
      <div className="terms-container">
        <div className="prev-input">
          <div className="term-input">
            <label htmlFor="">Term</label>
            <input
              type="text"
              className="term"
              value={termValue}
              onChange={onChangeTerm}
            />
          </div>
          <div className="term-input">
            <label htmlFor="">Explanation</label>
            <input
              type="text"
              className="term"
              value={expValue}
              onChange={onChangeExp}
            />
          </div>
          <div className="term-input">
            <label for="file-upload" className="image-upload">
              <FiCamera
                size="30"
                style={{
                  alignItems: 'center',
                }}
              />
            </label>
            <input
              id="file-upload"
              type="file"
              accept="image/*"
              onChange={handleImage}
            />
          </div>
        </div>
        {image !== null ? (
          <div className="prev-image">
            <img src={image} alt="" />
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default NewCard;
