import { faArrowLeft, faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import { ProgressBar } from "react-bootstrap";
import { withRouter } from "react-router-dom";
import assets from "../../assets";
import { ButtonLabel } from "../../Components/Button";
import CardAnswer from "../../Components/CardAnswer";
import DetailPage from "../../Components/YourDecks/DetailPage/DetailPage";

const data = [
  {
    _id: 1,
    status: false,
    term: "What is the definition of a cost function of supervised learning problem?",
    explanation:
      "High bias is when the form of out hypothesis function h maps poorly to the trend of the data",
    explanationImage: assets.FormulaTwo,
  },
  {
    _id: 2,
    status: false,
    term: "What is underfitting?",
    explanation:
      "High bias is when the form of out hypothesis function h maps poorly to the trend of the data",
    explanationImage: assets.FormulaOne,
  },
  {
    _id: 3,
    status: false,
    term: "Does feature scaling speed up the implementation of the normal equation?",
    explanation:
      "There is no need to do feature scaling with the normal equation.",
    explanationImage: null,
  },
];
const TestResult = ({ history }) => {
  const [answer, setAnswer] = useState(null);
  return (
    <DetailPage>
      <div className="row  mb-3">
        <div className="col-lg-10 col-md-10 mx-auto">
          <div className="container-fluid">
            <div className="text-center mb-3">
              <div
                style={{ position: "absolute", right: 0 }}
                onClick={() => history.push("/home/test/choose-deck")}
              >
                <FontAwesomeIcon icon={faTimes} />
                <span className="ml-2">DONE</span>
              </div>
              <p className="mb-0 text-center">Machine Learning</p>
            </div>
            <div className="text-center">
              <img src={assets.ResultBad} width={200} />
              <h4 className="mb-0 mt-2" style={{ color: "#AB6FDC" }}>
                20%
              </h4>
              <p style={{ color: "#898B8F" }}>Youre Score</p>
              <h5 className="mt-3 text-bold">Ooh ooh, don’t forget to study</h5>
              <p className="text-bold f-12">
                You missed 16 out of 20 questions
              </p>

              <ButtonLabel
                title="Retake the test"
                color="#fff"
                className=" pt-2 pb-2 border-bottom-purple"
              />

              <div className="row">
                <div className="col-lg-4 col-md-6 col-sm-12 col-12">
                  <CardAnswer item={data[0]} />
                </div>
                <div className="col-lg-4 col-md-6 col-sm-12 col-12">
                  <CardAnswer item={data[1]} />
                </div>
                <div className="col-lg-4 col-md-6 col-sm-12 col-12">
                  <CardAnswer item={data[2]} />
                </div>
              </div>

              {/* <div>
                <CardAnswer item={data[0]} />
                <CardAnswer item={data[1]} />
                <CardAnswer item={data[2]} />
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </DetailPage>
  );
};

export default withRouter(TestResult);
