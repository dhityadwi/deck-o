import React from "react";
import Category from "./Category";
import Account from "./Account";

const ProfileDetail = (props) => {
  switch (props.click) {
    case 2:
      return <Category />;
    default:
      return <Account />;
  }
};

export default ProfileDetail;
