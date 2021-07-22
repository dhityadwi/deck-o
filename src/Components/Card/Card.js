import React, { useState } from 'react';
import { FiCamera, FiX } from 'react-icons/fi';
import './card.scss';

const Card = ({
  termValue,
  expValue,
  expValue1,
  expValue2,
  expValue3,
  onChangeTerm,
  onChangeExp,
  onChangeExp1,
  onChangeExp2,
  onChangeExp3,
  onChangeImg,
  image,
  index,
  handleDeleteCard,
  handleDeleteImg,
}) => {
  return (
    <div className="main-container">
      <div className="close-x">
        <FiX
          size={20}
          style={{
            color: 'white',
            background: '#898B8F',
            borderRadius: '50%',
          }}
          onClick={handleDeleteCard}
        />
      </div>
      <div className="box-container">
        <div className="correct-input">
          <label htmlFor="">Term</label>
          <input
            type="text"
            className="term"
            defaultValue={termValue}
            onChange={onChangeTerm}
          />
        </div>
        <div className="correct-input">
          <label htmlFor="">Explanation</label>
          <input
            type="text"
            className="term"
            defaultValue={expValue}
            onChange={onChangeExp}
          />
        </div>
        <div className="correct-input">
          <label for={`file-upload-${index}`} className="image-upload">
            <FiCamera
              size="30"
              style={{
                alignItems: 'center',
              }}
            />
          </label>
          <input
            id={`file-upload-${index}`}
            type="file"
            accept="image/*"
            onChange={onChangeImg}
          />
        </div>
      </div>
      <div className="box-container">
        <div className="wrong-input">
          <label htmlFor="">Wrong Explanation 1</label>
          <input
            type="text"
            className="term"
            defaultValue={expValue1}
            onChange={onChangeExp1}
          />
          <label htmlFor="">Wrong Explanation 2</label>
          <input
            type="text"
            className="term"
            defaultValue={expValue2}
            onChange={onChangeExp2}
          />
          <label htmlFor="">Wrong Explanation 3</label>
          <input
            type="text"
            className="term"
            defaultValue={expValue3}
            onChange={onChangeExp3}
          />
        </div>
        {image !== null ? (
          <div className="preview-image">
            <div className="image">
              <div className="close-img">
                <FiX
                  size={20}
                  style={{
                    color: 'white',
                    background: '#898B8F',
                    borderRadius: '50%',
                  }}
                  onClick={handleDeleteImg}
                />
              </div>
              <img src={URL.createObjectURL(image)} alt={'test'} />
            </div>
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default Card;
