import React, { useState } from 'react';
import './newcard.scss';
import { FiCheck, FiPlusCircle } from 'react-icons/fi';

import Card from '../Card/Card';

const NewCard = () => {
  const [image, setImage] = useState('');
  const [cardForm, setCardForm] = useState([]);
  const card = {
    indeks: '',
    term: '',
    explanation: '',
    image: null,
  };

  console.log(cardForm);

  const addCard = () => {
    const temp = cardForm.slice();
    temp.push(card);
    setCardForm(temp);
  };

  const UpdateTerm = (index, text) => {
    const temp = cardForm.slice();
    temp[index].term = text;
    temp[index].indeks = index;
    console.log('TEMPNYA', temp);
    setCardForm(temp);
  };

  const UpdateExplanation = (index, text) => {
    const temp = cardForm.slice();
    temp[index].explanation = text;
    setCardForm(temp);
  };

  const deleteForm = (index) => {
    const temp = cardForm.slice();
    temp.splice(index, 1);
    setCardForm(temp);
  };

  return (
    <div>
      {/* {cardForm.map((item, index) => (
                            <Card
                                onCameraPress={() => {
                                    setSelected(index)
                                    setVisible(true)
                                }
                                }
                                deleteImage={() => deleteImage(index)}
                                image={cardForm[index].image}
                                key={index}
                                deleteForm={() => {
                                    setSelected(index)
                                    showModal2()
                                }}
                                termValue={cardForm[index].term}
                                explanationValue={cardForm[index].explanation}
                                showClose={cardForm.length > 1 ? true : false}
                                onChangeTerm={text => {
                                    UpdateTerm(index, text)
                                }}
                                onChangeExp={text => {
                                    UpdateExplanation(index, text)
                                }}
                            />))}
 */}

      {cardForm.length === 0
        ? 'Card for this deck is still empty. Lets create new one'
        : cardForm.map((item, index) => (
            <Card
              key={index}
              termValue={cardForm[index].term}
              expValue={cardForm[index].explanation}
              onChangeTerm={(e) => {
                UpdateTerm(index, e.target.value);
                console.log(e.target.value);
              }}
              onChangeExp={(e) => UpdateExplanation(index, e.target.value)}
            />
          ))}
      {/* <Card /> */}
      <div className="add-card">
        <FiPlusCircle
          size="40"
          color="white"
          style={{
            margin: 'auto',
            background: '#F4AA27',
            borderRadius: '50%',
          }}
          onClick={addCard}
        />
      </div>
    </div>
  );
};

export default NewCard;
