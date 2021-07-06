import { faPencilAlt, faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { Component } from "react";
import "react-circular-progressbar/dist/styles.css";
import { ButtonLabel } from "../../../Components/Button";
import { CardProgress } from "../../../Components/Card";
import DetailPage from "../../../Components/YourDecks/DetailPage/DetailPage";
import ScoredDetail from "../../../Components/ScoredDetail";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
    };
  }

  componentDidMount() {
    this.setState({ loading: true });
    setTimeout(() => {
      this.setState({ loading: false });
    }, 3000);
  }

  render() {
    return (
      <DetailPage>
        {/* navbar */}
        <div>
          <div className="row  mb-3">
            <div className="col-lg-10 col-md-12 mx-auto">
              <div className="container-fluid">
                <nav aria-label="breadcrumb">
                  <ol className="breadcrumb" style={{ backgroundColor: "#fff" }}>
                    <li className="breadcrumb-item">
                      <a href="/" style={{ color: "#898B8F" }}>
                        All Decks
                      </a>
                    </li>
                    <li className="breadcrumb-item">
                      <a href="/" style={{ color: "#898B8F" }}>
                        Computer Science
                      </a>
                    </li>
                    <li className="breadcrumb-item active" aria-current="page" style={{ color: "#000" }}>
                      Machine Learning
                    </li>
                  </ol>
                </nav>

                <div className="card" style={{ backgroundColor: "#6884F5", borderRadius: 10 }}>
                  <div className="card-body d-flex flex-direction-row justify-content-between align-items-center">
                    <div>
                      <h3 style={{ color: "#fff" }}>Machine Learning</h3>
                      <p style={{ color: "#fff" }} className={"mb-0"}>
                        138 Items
                      </p>
                    </div>
                    <div>
                      <FontAwesomeIcon color={"#fff"} icon={faTrash} className="mr-4" />
                      <FontAwesomeIcon color={"#fff"} icon={faPencilAlt} />
                    </div>
                  </div>
                </div>

                <div className="row">
                  <div className="col-lg-6 col-md-6 col-sm-12 col-12">
                    <div className="d-flex flex-direction-row mt-4 align-items-center">
                      <h5 className="pr-2">on</h5>
                      <ButtonLabel title="Computer Science" backgroundColor={"#FBF7FF"} />
                    </div>
                    <div className="mt-2">
                      <p className="pr-2 text-mute" style={{ color: "#898B8F" }}>
                        All terms and examples related to machine learning
                      </p>
                      <div className="border mt-2" />
                      <h4 className="mt-3">Your Progress</h4>
                      <p className="pr-2" style={{ color: "#898B8F" }}>
                        Your progress is based on the time you studied, or so called preview, the deck.
                      </p>

                      <CardProgress label="Not studied" progress={138} />
                      <CardProgress label="Need To Recall" progress={0} />
                      <CardProgress label="Mastered" progress={0} />
                    </div>
                  </div>
                  <div className="col-lg-5 col-md-5  col-sm-12 col-12 ml-auto">
                    <div className="card mt-4" style={{ borderRadius: 10 }}>
                      <div className="card-body">
                        <h4 className="mt-3">Your Test Result</h4>
                        <p className="pr-2" style={{ color: "#898B8F" }}>
                          You haven’t took any test for this deck.
                        </p>

                        <ScoredDetail score={60} />
                        <ButtonLabel title="Take a test" className={"w-100 pb-2 pt-2 border-bottom-purple"} backgroundColor={"#FBF7FF"} />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </DetailPage>
    );
  }
}

export default Home;
