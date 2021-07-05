import React, { Fragment, useState } from "react";
import ProfileDetail from "./ProfileDetail";
import "./profileNav.scss";

const ProfileNav = () => {
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

  return (
    <Fragment>
      <div className="profile">
        <div>
          <div>
            <img />
          </div>
          <div>
            <h3></h3>
          </div>
        </div>
        <div className="profile__menu">
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
          <strong
            onClick={category}
            className={
              menuAktif.category
                ? "profile__button--inactive"
                : "profile__button--active"
            }
          >
            Category
          </strong>
          <strong>Logout</strong>
        </div>
      </div>
      <ProfileDetail click={click} />
    </Fragment>
  );
};

export default ProfileNav;
