import React, { useEffect, useState } from 'react';
import GoogleLogin from 'react-google-login';
import ModalLogin from 'react-modal';

import '../../assets/styles/Login.scss';
import ReactFacebookLogin from 'react-facebook-login';
import fb from '../../assets/img/fb.png';
import { useDispatch, useSelector } from 'react-redux';
import jwt_decode from 'jwt-decode';
import { isLogin } from '../../redux/action/loginAction';
import { useHistory } from 'react-router-dom';
import { loginUser } from '../../service/userService';
import Register from './Register';

ModalLogin.setAppElement('#root');

const Login = () => {
  const [loginModal, setLoginModal] = useState(false);

  const [inputPass, setInputPass] = useState('');
  const [inputEmail, setInputEmail] = useState('');

  const [validationLog, setValidationLog] = useState(false);
  const dispatch = useDispatch();

  const historyHome = useHistory();

  // modal LOGIN
  const openModal = () => {
    setLoginModal(true);
  };
  const closedeModal = () => {
    setLoginModal(false);
  };

  // hadle INPUT

  const handleChangeInputPass = (event) => {
    setInputPass(event.target.value);
  };
  const handleChangeInputEmail = (event) => {
    setInputEmail(event.target.value);
  };

  // handle SUBMIT LOGIN
  const handleLogin = (event) => {
    event.preventDefault();
    const store = window.localStorage;

    loginUser(inputEmail, inputPass)
      .then((response) => {
        const { token } = response;

        console.log(response);

        const decode = jwt_decode(token);
        store.setItem('token', JSON.stringify(token));

        const { statusCode } = response;
        dispatch(
          isLogin(inputEmail, decode.username, decode.id, token, statusCode)
        );
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const { loginStat } = useSelector((state) => state.login);
  useEffect(() => {
    if (loginStat === 200) {
      setLoginModal(false);
      historyHome.push('/home');
    } else if (loginStat === '') {
      setValidationLog(false);
    } else {
      setValidationLog(true);
    }
  }, [loginStat, historyHome]);

  // console.log(loginStat, "status");

  return (
    <div>
      <strong onClick={openModal}>Login</strong>
      <ModalLogin isOpen={loginModal} onRequestClose={closedeModal}>
        <div className="login__app">
          <h1>Login in to your account</h1>
          <div className="login__app__log">
            <GoogleLogin
              buttonText="Sign in with Google"
              className="login__app__goog"
            />
            <ReactFacebookLogin className="login__app__fb" />
            <img src={fb} alt="fb" />
          </div>
          <p>or</p>
          <form onSubmit={handleLogin}>
            <input
              placeholder="Email"
              type="email"
              value={inputEmail}
              onChange={handleChangeInputEmail}
            />

            <input
              value={inputPass}
              onChange={handleChangeInputPass}
              type="password"
              placeholder="Password"
            />

            {validationLog && (
              <p>Email not registered, Please create an account first.</p>
            )}
            {/* {validationLogWrongPass && (
              <p>Wrong Email or Password.</p>
            )} */}

            <a href="/#">
              <p className="login__app__title">Forgot Password</p>
            </a>

            <button className="login__app__button" type="submit">
              Login
            </button>
            <p>
              Don't have an account?{' '}
              <a
                href="/#"
                // onClick={() => {
                //   setLoginModal(false);
                //   setRegModal(true);
                // }}
              >
                <span>
                  <Register />
                </span>
              </a>{' '}
            </p>
          </form>
        </div>
      </ModalLogin>
    </div>
  );
};

export default Login;
