import React from "react";
import { withRouter } from "react-router-dom";
import assets from "../../assets";
import { ButtonLabel } from "../../Components/Button";
import Header from "../../Components/Header/Header";
import "./index.scss";

const ReadyToTest = ({ history }) => {
  return (
    <div className=" h-100">
      <Header />
      <div className="d-flex justify-content-center align-items-center flex-column" style={{ height: "100vh" }}>
        <img src={assets.ReadyToTest} />
        <h5 className="mt-3 text-bold">Ready to ace your test?</h5>
        <p className="text-bold f-12">Let’s get started</p>
        <div style={{ width: "10%" }}>
          <ButtonLabel onClick={() => history.push("/home/test/choose-deck")} title="Take a test" className={"w-100 pb-2 pt-2 border-bottom-purple"} backgroundColor={"#c78ef7"} color="#fff" />
        </div>
      </div>
    </div>
  );
};

export default withRouter(ReadyToTest);
