import React, { useEffect, useState } from 'react';
import GoogleLogin from 'react-google-login';
import ModalLogin from 'react-modal';
import '../../assets/styles/Login.scss';
import ReactFacebookLogin from 'react-facebook-login';
import fb from '../../assets/img/fb.png';
import { useDispatch, useSelector } from 'react-redux';
import { isLogin, loginAsync } from '../../redux/action/loginAction';
import { useHistory } from 'react-router-dom';
import Register from './Register';

ModalLogin.setAppElement('#root');

const Login = () => {
  const [loginModal, setLoginModal] = useState(false);

  const [inputPass, setInputPass] = useState('');
  const [inputEmail, setInputEmail] = useState('');

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
    dispatch(loginAsync(inputEmail, inputPass));
  };

  const { loading, error } = useSelector((state) => state.login);

  const { loginStat } = useSelector((state) => state.login);

  useEffect(() => {
    if (loginStat === 200) {
      setLoginModal(false);
      historyHome.push('/home');
    }
  }, [loginStat, historyHome]);

  // console.log(loginStat, "status");

  return (
    <div>
      <strong onClick={openModal}>Login</strong>
      <ModalLogin
        isOpen={loginModal}
        onRequestClose={closedeModal}
        className="modalLogin"
      >
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

            <a href="/#">
              <p className="login__app__title">Forgot Password</p>
            </a>

            {loading && <div class="single4"></div>}
            {error && (
              <div className="error-message">Wrong Email or Password.</div>
            )}
            {!loading && (
              <button className="login__app__button" type="submit">
                Login
              </button>
            )}
            <p>
              Don't have an account?{' '}
              <span>
                <Register />
              </span>
            </p>
          </form>
        </div>
      </ModalLogin>
    </div>
  );
};

export default Login;
