import React from "react";
import { useSelector } from "react-redux";
import "./account.scss";

const Account = () => {
  const username = useSelector((state) => state.login.username);
  const email = useSelector((state) => state.login.email);
  return (
    <div className="account">
      <span>Account Details</span>

      <div className="account__username">
        <span className="account__username--span">Name</span>
        <div className="account__username--name">
          <p>{username}</p>
        </div>

        <div className="account__email">
          <div className="account__email--title">
            <span>Email Addres</span>
            <p>Your email address is {email} </p>
          </div>
          <button className="account__change">Change</button>
        </div>

        <div className="account__pass">
          <div className="account__pass--title">
            <p>Password</p>
          </div>
          <button className="account__change">Change</button>
        </div>
      </div>
      <button className="account__buton">Save Changes</button>
    </div>
  );
};

export default Account;
