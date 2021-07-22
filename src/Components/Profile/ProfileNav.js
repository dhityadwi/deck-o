import React, { useState } from "react";
import ProfileDetail from "./ProfileDetail";
import "./profileNav.scss";
import user from "../../assets/image/user.svg";
import folder from "../../assets/image/folder.svg";
import logout from "../../assets/image/logout.svg";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { FiCamera } from "react-icons/fi";
import { Spinner } from "reactstrap";
// import prof from "../../assets/img/user.png";

const ProfileNav = () => {
  const username = useSelector((state) => state.profile.username);

  const historyLanding = useHistory();

  const [menuAktif, setMenuAktif] = useState({
    account: true,
    category: false,
    logout: false,
  });

  const [click, setClick] = useState(1);

  const category = (event) => {
    setMenuAktif({
      account: false,
      category: true,
      logout: false,
    });
    setClick(2);
  };

  const account = (event) => {
    setMenuAktif({
      account: true,
      category: false,
      logout: false,
    });
    setClick(1);
  };

  const hanldeLogout = () => {
    historyLanding.push("/");
    const store = window.localStorage;
    store.clear();

    window.location.reload();
  };

  const { loadingProf } = useSelector((state) => state.profile);

  return (
    <div className="containerNav">
      <div className="profile">
        <div className="profile__nav">
          <div className="profile__image">
            <img
              src="https://s3.eu-central-1.amazonaws.com/bootstrapbaymisc/blog/24_days_bootstrap/fox.jpg"
              alt="profile"
            />
            <FiCamera
              size="15"
              style={{
                alignItems: "center",
                color: "gray",
                marginTop: "57px",
                cursor: "pointer",
              }}
            />
          </div>
        </div>
        <div className="profile__username">
          {loadingProf ? (
            <Spinner
              color="warning"
              style={{ margin: "5% 45%", width: "2rem", height: "2rem" }}
            />
          ) : (
            <p>{username}</p>
          )}
        </div>
        <div className="profile__menu">
          <div className="profile__menu--pilih">
            <img src={user} alt="user" />
            <strong
              onClick={account}
              className={
                menuAktif.account
                  ? "profile__button--inactive"
                  : "profile__button--active"
              }
            >
              Account
            </strong>
          </div>

          <div className="profile__menu--pilih">
            <img src={folder} alt="folder" />
            <strong
              onClick={category}
              className={
                menuAktif.category
                  ? "profile__button--inactive"
                  : "profile__button--active"
              }
            >
              My Deck
            </strong>
          </div>

          <div className="profile__menu--pilih--log">
            <img src={logout} alt="logout" />
            <strong
              onClick={hanldeLogout}
              className={
                menuAktif.logout
                  ? "profile__button--inactive"
                  : "profile__button--active"
              }
            >
              Logout
            </strong>
          </div>
        </div>
      </div>
      <ProfileDetail click={click} />
    </div>
  );
};

export default ProfileNav;
