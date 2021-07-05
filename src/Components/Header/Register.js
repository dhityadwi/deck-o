import React, { useEffect, useState } from "react";
import ModalReg from "react-modal";
import GoogleLogin from "react-google-login";
import { regisUser } from "../../service/userService";
import { isRegis } from "../../redux/action/regisAction";
import ReactFacebookLogin from "react-facebook-login";
import fb from "../../assets/img/fb.png";
import "../../assets/styles/Register.scss";
import { useDispatch, useSelector } from "react-redux";
import Login from "./Login";

const Register = () => {
  const [regModal, setRegModal] = useState(false);

  const [inputUsername, setInputUsername] = useState("");
  const [inputPass, setInputPass] = useState("");
  const [inputEmail, setInputEmail] = useState("");

  const [validationReg, setValidationReg] = useState(false);

  const dispatch = useDispatch();

  const openModalReg = () => {
    setRegModal(true);
  };

  const closedeModalReg = () => {
    setRegModal(false);
  };

  const handleChangeInputUsername = (event) => {
    setInputUsername(event.target.value);
  };

  const handleChangeInputPass = (event) => {
    setInputPass(event.target.value);
  };
  const handleChangeInputEmail = (event) => {
    setInputEmail(event.target.value);
  };

  const handleReg = (event) => {
    event.preventDefault();

    regisUser(inputUsername, inputEmail, inputPass)
      .then((response) => {
        console.log(response, "response");

        const { status } = response;

        dispatch(isRegis(inputUsername, inputEmail, inputPass, status));
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const { regisStat } = useSelector((state) => state.register);
  useEffect(() => {
    if (regisStat === 200) {
      <Login />;
    } else if (regisStat === "") {
      setValidationReg(false);
    } else {
      setValidationReg(true);
    }
  }, [regisStat]);

  // console.log(regStat, "status");
  // console.log(validationReg, "validation");

  return (
    <div>
      <strong onClick={openModalReg}>Sign Up</strong>
      <ModalReg isOpen={regModal} onRequestClose={closedeModalReg}>
        <div className="reg__app">
          <h1>Sign up to get started</h1>
          <div className="reg__app__log">
            <GoogleLogin
              buttonText="Sign up with Google"
              className="reg__app__goog"
            />
            <ReactFacebookLogin />
            <img src={fb} alt="fb" />
          </div>
          <p>or</p>
          <form onSubmit={handleReg}>
            <input
              placeholder="Username"
              value={inputUsername}
              onChange={handleChangeInputUsername}
            />

            <input
              placeholder="Email"
              value={inputEmail}
              type="email"
              onChange={handleChangeInputEmail}
            />

            <input
              value={inputPass}
              onChange={handleChangeInputPass}
              type="password"
              placeholder="Password"
            />

            {validationReg && <p>Email already registered.</p>}

            <div className="reg__app__check">
              <input className="reg__app__check--box" type="checkbox" />
              <a href="/#">
                <p className="reg__app__title">
                  I agree whiteboard's term & condition
                </p>
              </a>
            </div>

            <button type="submit" className="reg__app__button">
              Create Account
            </button>
            <p>
              Have an account?{" "}
              <span>
                <Login />
              </span>
            </p>
          </form>
        </div>
      </ModalReg>
    </div>
  );
};

export default Register;
