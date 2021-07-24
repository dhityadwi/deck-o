import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./editCard.scss";
import { FiPlusCircle } from "react-icons/fi";
import Card from "../../Card/Card";
import { Link, useHistory, useParams, useLocation } from "react-router-dom";
import Bar from "../../Bar";

import { getCardsByDeckId } from "../../../redux/action/cardAction";

const NewCard = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const location = useLocation();
  const { id } = useParams();
  const { createdDeck } = useSelector((state) => state.deck);
  const { cardsByDeckId, loading } = useSelector((state) => state.card);

  const [cardForm, setCardForm] = useState([]);

  const card = {
    indeks: "",
    term: "",
    explanation: "",
    explanation1: "",
    explanation2: "",
    explanation3: "",
    image: "",
    imageName: "",
  };
  // const dataEdit = useSelector((state) => state?.card.cardsByDeckId);
  // console.log(dataEdit && dataEdit[0][0].term);
  // console.log(dataEdit && dataEdit[0][1][0].explane1);

  const handleSubmit = () => {
    cardForm.map((item, index) => {
      let formdata = new FormData();

      if (item.image === "") {
        formdata.append("decksId", createdDeck._id);
        formdata.append("term", item.term);
        formdata.append("explanation1", item.explanation);
        formdata.append("explanation2", item.explanation1);
        formdata.append("explanation3", item.explanation2);
        formdata.append("explanation4", item.explanation3);
      } else {
        formdata.append("image", item.image, item.imageName);
        formdata.append("decksId", createdDeck._id);
        formdata.append("term", item.term);
        formdata.append("explanation1", item.explanation);
        formdata.append("explanation2", item.explanation1);
        formdata.append("explanation3", item.explanation2);
        formdata.append("explanation4", item.explanation3);
      }

      // dispatch(createCard(formdata, cardForm.length));
    });
    history.push("/home");
  };

  const addCard = () => {
    setCardForm([...location.state.editCardData, card]);
  };

  const UpdateTerm = (index, text) => {
    const newTerm = [...cardForm];
    newTerm[index].indeks = index;
    newTerm[index].term = text;

    setCardForm(newTerm);
  };

  const UpdateExplanation = (index, text) => {
    const newExplanation = [...cardForm];
    newExplanation[index].indeks = index;
    newExplanation[index].explanation = text;

    setCardForm(newExplanation);
  };

  const UpdateExplanation1 = (index, text) => {
    const newExplanation = [...cardForm];
    newExplanation[index].indeks = index;
    newExplanation[index].explanation1 = text;

    setCardForm(newExplanation);
  };

  const UpdateExplanation2 = (index, text) => {
    const newExplanation = [...cardForm];
    newExplanation[index].indeks = index;
    newExplanation[index].explanation2 = text;

    setCardForm(newExplanation);
  };

  const UpdateExplanation3 = (index, text) => {
    const newExplanation = [...cardForm];
    newExplanation[index].indeks = index;
    newExplanation[index].explanation3 = text;

    setCardForm(newExplanation);
  };

  const UpdateImage = (index, uri, name) => {
    const newImage = [...cardForm];
    newImage[index].indeks = index;
    newImage[index].image = uri;
    newImage[index].imageName = name;

    setCardForm(newImage);
  };

  const deleteCard = (index) => {
    const temp = cardForm.slice();
    temp.splice(index, 1);
    setCardForm(temp);
  };

  const deleteImage = (index) => {
    const newImage = [...cardForm];
    newImage[index].image = null;
    newImage[index].imageName = "";
    setCardForm(newImage);
  };

  useEffect(() => {
    dispatch(getCardsByDeckId(id));
  }, []);

  return (
    <div>
      {loading ? (
        "Loading..."
      ) : (
        <div className="newCard-container" style={{ marginTop: "120px" }}>
          <Bar />
          <h2 style={{ marginTop: "50px" }}>List of Card</h2>
          {location.state.editCardData &&
          location.state.editCardData.length === 0
            ? "Card for this deck is still empty. Lets create new one"
            : location.state.editCardData.map((item, index) => {
                return (
                  <Card
                    key={index}
                    index={index}
                    termValue={item[0].term}
                    expValue={item[1][0].explane1}
                    expValue1={item[1][1].explane2}
                    expValue2={item[1][2].explane3}
                    expValue3={item[1][3].explane4}
                    image={item[0].imageExplanation}
                    onChangeTerm={(e) => {
                      UpdateTerm(index, e.target.value);
                    }}
                    onChangeExp={(e) =>
                      UpdateExplanation(index, e.target.value)
                    }
                    onChangeExp1={(e) =>
                      UpdateExplanation1(index, e.target.value)
                    }
                    onChangeExp2={(e) =>
                      UpdateExplanation2(index, e.target.value)
                    }
                    onChangeExp3={(e) =>
                      UpdateExplanation3(index, e.target.value)
                    }
                    onChangeImg={(e) => {
                      UpdateImage(
                        index,
                        e.target.files[0],
                        e.target.files[0].name
                      );
                    }}
                    handleDeleteCard={() => deleteCard(index)}
                    handleDeleteImg={() => deleteImage(index)}
                  />
                );
              })}

          <div className="add-card">
            <FiPlusCircle
              size="40"
              color="white"
              style={{
                margin: "auto",
                background: "#F4AA27",
                borderRadius: "50%",
              }}
              onClick={addCard}
            />
          </div>
          <div className="button-footer">
            <Link to={`/home`}>
              <button onClick={handleSubmit}>Cancel </button>
            </Link>
            <button onClick={handleSubmit}>Save </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default NewCard;
