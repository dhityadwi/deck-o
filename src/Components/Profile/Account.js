import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./account.scss";
import ModalChangePass from "react-modal";
import ModalChangeEmail from "react-modal";
import ModalChangeUser from "react-modal";
import { error } from "jquery";
import { profileAsync } from "../../redux/action/profileAction";
import { putProfileAsync } from "../../redux/action/editProfileAction";
import { passwordAsyn } from "../../redux/action/passwordAction";

const Account = () => {
  const username = useSelector((state) => state.profile.username);
  const email = useSelector((state) => state.profile.email);
  const { loading, error } = useSelector((state) => state.editProfile);
  const { loadings, errors } = useSelector((state) => state.password);
  const dispatch = useDispatch();

  const [changePassModal, setChangesPassModal] = useState(false);
  const [changeEmailModal, setChangesEmailModal] = useState(false);
  const [changeUserModal, setChangesUserModal] = useState(false);

  const [passCurrent, setPassCurrent] = useState("");
  const [passNew, setPassNew] = useState("");

  const [newEmail, setNewEmail] = useState("");

  const [newUser, setNewUser] = useState("");

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

  // Modal User
  const openModalUser = () => {
    setChangesUserModal(true);
  };
  const closeModalUser = () => {
    setChangesUserModal(false);
  };
  // Handle User
  const handleNewUser = (event) => {
    setNewUser(event.target.value);
  };

  useEffect(() => {
    dispatch(profileAsync());
  }, []);
  // console.log(username, "username");

  return (
    <div className="account">
      <span>Account Details</span>
      <div className="account__username">
        <span className="account__username--span">Name</span>
        <div className="account__username__container">
          <div className="account__username--box">
            <div className="account__username--name">
              <p>{username}</p>
            </div>
          </div>
        </div>

        <div className="account__email">
          <div className="account__email--title">
            <span>Email Addres</span>
            <p>
              Your email address is{" "}
              <span style={{ fontWeight: "bolder" }}>{email}</span>
            </p>
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
