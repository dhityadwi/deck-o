import React, { Fragment, useState } from "react";
import ProfileDetail from "./ProfileDetail";
import "./profileNav.scss";
import user from "../../assets/image/user.svg";
import folder from "../../assets/image/folder.svg";
import logout from "../../assets/image/logout.svg";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

const ProfileNav = () => {
  const username = useSelector((state) => state.login.username);

  const historyLanding = useHistory();

  const [menuAktif, setMenuAktif] = useState({
    account: true,
    category: false,
  });

  const [click, setClick] = useState(1);

  const category = (event) => {
    setMenuAktif({
      account: false,
      category: true,
    });
    setClick(2);
  };

  const account = (event) => {
    setMenuAktif({
      account: true,
      category: false,
    });
    setClick(1);
  };

  const hanldeLogout = () => {
    historyLanding.push("/");
    const store = window.localStorage;
    store.clear();

    window.location.reload();
  };

  return (
    <div className="containerNav">
      <div className="profile">
        <div className="profile__nav">
          <div className="profile__image">
            <img
              src="https://s3.eu-central-1.amazonaws.com/bootstrapbaymisc/blog/24_days_bootstrap/fox.jpg"
              alt="profile"
            />
          </div>
          <div className="profile__username">
            <h3>{username}</h3>
          </div>
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

          <div className="profile__menu--pilih">
            <img src={logout} alt="logout" />
            <strong onClick={hanldeLogout}>Logout</strong>
          </div>
        </div>
      </div>
      <ProfileDetail click={click} />
    </div>
  );
};

export default ProfileNav;
