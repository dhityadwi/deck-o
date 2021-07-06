import React from "react";
import MyDeck from "./MyDeck";
import Account from "./Account";

const ProfileDetail = (props) => {
  switch (props.click) {
    case 2:
      return <MyDeck />;
    default:
      return <Account />;
  }
};

export default ProfileDetail;
