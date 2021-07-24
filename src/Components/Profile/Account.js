import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './account.scss';
import ModalChangePass from 'react-modal';
import ModalChangeEmail from 'react-modal';
import ModalAlert from 'react-modal';
import ModalAlertPass from 'react-modal';
import { error } from 'jquery';
import { profileAsync } from '../../redux/action/profileAction';
import { putProfileAsync } from '../../redux/action/editProfileAction';
import { passwordAsyn } from '../../redux/action/passwordAction';
import { Spinner } from 'reactstrap';

const Account = () => {
  const username = useSelector((state) => state.profile.username);
  const email = useSelector((state) => state.profile.email);
  const { loading, error } = useSelector((state) => state.editProfile);
  const { loadings, errors } = useSelector((state) => state.password);
  const dispatch = useDispatch();
  //modal
  const [changePassModal, setChangesPassModal] = useState(false);
  const [changeEmailModal, setChangesEmailModal] = useState(false);
  const [changeAlertModal, setChangesAlertModal] = useState(false);
  const [changeAlertModalPass, setChangesAlertModalPass] = useState(false);

  const [passCurrent, setPassCurrent] = useState('');
  const [passNew, setPassNew] = useState('');

  const [newEmail, setNewEmail] = useState('');

  const [newUser, setNewUser] = useState('');

  // Modal Pass
  const openModalPass = () => {
    setChangesPassModal(true);
  };
  const closeModalPass = () => {
    setChangesPassModal(false);
  };
  // Handle Pass
  const handleChangeCurrentPass = (event) => {
    setPassCurrent(event.target.value);
  };
  const handleNewPass = (event) => {
    setPassNew(event.target.value);
  };
  const handleChangePass = (event) => {
    event.preventDefault();

    dispatch(passwordAsyn(passCurrent, passNew));
  };

  // Modal Email
  const openModalEmail = () => {
    setChangesEmailModal(true);
  };
  const closeModalEmail = () => {
    setChangesEmailModal(false);
  };
  // Handle Email
  const handleNewEmail = (event) => {
    setNewEmail(event.target.value);
  };
  const handleChangeProfile = (event) => {
    event.preventDefault();

    dispatch(putProfileAsync(newUser, newEmail));
  };

  // Modal Alert
  const openModalAlert = () => {
    setChangesAlertModal(true);
  };
  const closeModalAlert = () => {
    setChangesAlertModal(false);
  };
  const openModalAlertPass = () => {
    setChangesAlertModalPass(true);
  };
  const closeModalAlertPass = () => {
    setChangesAlertModalPass(false);
  };

  // Handle NewUsername
  const handleNewUser = (event) => {
    setNewUser(event.target.value);
  };

  useEffect(() => {
    dispatch(profileAsync());
  }, []);
  // console.log(username, "username");

  const { changePassStat } = useSelector((state) => state.password);
  useEffect(() => {
    if (changePassStat === 200) {
      setChangesPassModal(false);
      setChangesAlertModalPass(true);
    }
  }, [changePassStat]);

  const { editProfStat } = useSelector((state) => state.editProfile);
  useEffect(() => {
    if (editProfStat === 200) {
      setChangesEmailModal(false);
      setChangesAlertModal(true);
    }
  }, [editProfStat]);

  const { loadingProf } = useSelector((state) => state.profile);

  return (
    <div className="account">
      <span>Account Details</span>
      <div className="account__username">
        <span className="account__username--span">Name</span>
        <div className="account__username__container">
          <div className="account__username--box">
            <div className="account__username--name">
              {loadingProf ? (
                <Spinner
                  color="warning"
                  style={{
                    margin: '5% 10%',
                    width: '1.5rem',
                    height: '1.5rem',
                  }}
                />
              ) : (
                <p>{username}</p>
              )}
            </div>
          </div>
        </div>

        <ModalAlert
          isOpen={changeAlertModal}
          onRequestClose={closeModalAlert}
          className="modalAlert"
        >
          <div className="modalAlert__cont">
            {/* <span onClick={this.onCloseModal}>X</span> */}
            <h3>Change success!</h3>
            <p>Please refresh your page after edit your profile</p>
            <div className="modalAlert__btn">
              <button className="modalAlert__no" onClick={closeModalAlert}>
                Close
              </button>
            </div>
          </div>
        </ModalAlert>

        <ModalAlertPass
          isOpen={changeAlertModalPass}
          onRequestClose={closeModalAlertPass}
          className="modalAlert"
        >
          <div className="modalAlert__cont">
            {/* <span onClick={this.onCloseModal}>X</span> */}
            <h3>Change success!</h3>
            <p>Please logout and login again</p>
            <div className="modalAlert__btn">
              <button
                className="modalAlert__no"
                onClick={() => {
                  closeModalAlertPass();
                  window.location.reload();
                }}
              >
                Close
              </button>
            </div>
          </div>
        </ModalAlertPass>

        <div className="account__email">
          <div className="account__email--title">
            <span>Email Addres</span>
            {loadingProf ? (
              <Spinner
                color="warning"
                style={{
                  margin: '5% 25%',
                  width: '1.5rem',
                  height: '1.5rem',
                }}
              />
            ) : (
              <p>
                Your email address is{' '}
                <span style={{ fontWeight: 'bolder' }}>{email}</span>
              </p>
            )}
          </div>
          <ModalChangeEmail
            isOpen={changeEmailModal}
            onRequestClose={closeModalEmail}
            className="modalChange"
          >
            <div className="containerChange">
              <span onClick={closeModalEmail}>X</span>
              <h4>Change My Profile</h4>

              {/* <img
                src="https://s3.eu-central-1.amazonaws.com/bootstrapbaymisc/blog/24_days_bootstrap/fox.jpg"
                alt="profile"
              />
              <p>Change profile photo</p> */}
              <form
                className="containerChange__email"
                onSubmit={handleChangeProfile}
              >
                <p>Username</p>
                <input
                  placeholder="New Username"
                  type="Text"
                  value={newUser}
                  onChange={handleNewUser}
                />
                <p>Email</p>
                <input
                  placeholder="New Email"
                  type="Email"
                  value={newEmail}
                  onChange={handleNewEmail}
                />

                {error && (
                  <div className="error-message">
                    Email or Username already used.
                  </div>
                )}
                {loading && <div className="single5"></div>}
                {!loading && (
                  <button className="containerChange__btn" type="submit">
                    Confirm
                  </button>
                )}
              </form>
            </div>
          </ModalChangeEmail>
          <button className="account__change" onClick={openModalEmail}>
            Change
          </button>
        </div>

        <div className="account__pass">
          <div className="account__pass--title">
            <p>Password</p>
          </div>

          <ModalChangePass
            isOpen={changePassModal}
            onRequestClose={closeModalPass}
            className="modalChange"
          >
            <div className="containerChange">
              <span onClick={closeModalPass}>X</span>
              <h4>Change My Password</h4>
              <form
                className="containerChange__pass"
                onSubmit={handleChangePass}
              >
                <p>Current Password</p>
                <input
                  placeholder="Current Password"
                  type="password"
                  value={passCurrent}
                  onChange={handleChangeCurrentPass}
                />
                <p>New Password</p>
                <input
                  placeholder="New Password"
                  type="password"
                  value={passNew}
                  onChange={handleNewPass}
                />

                {errors && (
                  <div className="error-message">
                    The current password is not the same.
                  </div>
                )}
                {loadings && <div className="single5"></div>}
                {!loadings && (
                  <button className="containerChange__btn" type="submit">
                    Confirm
                  </button>
                )}
              </form>
            </div>
          </ModalChangePass>

          <button className="account__change" onClick={openModalPass}>
            Change
          </button>
        </div>
      </div>
      {/* <button className="account__buton">Save Changes</button> */}
    </div>
  );
};

export default Account;
