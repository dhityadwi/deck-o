import Collapse from "@kunukn/react-collapse";
import React, { useState } from "react";
import assets from "../../../assets";
import { Button, ButtonLabel } from "../../Button";
import { CloseIcon, MenuIcon } from "../../Icon";
import "./index.css";

const Navbar = (props) => {
  const { showSearchBox, searchWidth, toggleSearchBox, screenWidth } = props;
  const [isOpen, setIsOpen] = useState(false);
  const toggle = (value) => {
    setIsOpen(value);
    toggleSearchBox();
  };
  return (
    <div className="navbar navbar-light navbar-expand-md bg-purple shadow-sm  pb-0 pt-0">
      <div className="col-lg-10 col-md-12 col-sm-12 col-12 mx-auto">
        {/* </div> */}
        <nav className={`navbar navbar-light bg-purple d-flex align-items-center pl-0 pr-0 ${screenWidth > 668 ? "pb-0 pt-0" : ""}`}>
          <div className="mr-4">
            <img
              src={assets.Logo}
              // className="card-img-top image-bottom-radius"
              alt=""
              height={25}
              // width="70%"
            />
          </div>
          <div
            // style={{ position: "absolute", top: -5, bottom: 5, right: -15 }}
            className="d-block d-sm-block d-md-none d-lg-none ml-auto"
          >
            {isOpen ? <CloseIcon {...props} onClick={() => toggle(false)} /> : <MenuIcon {...props} onClick={() => toggle(true)} />}
          </div>

          {/* menu colapse */}
          <Collapse isOpen={screenWidth > 668 ? true : showSearchBox} transition="height 300ms cubic-bezier(.4, 0, .2, 1)" className={screenWidth < 668 ? "w-100" : ""}>
            <ul class="navbar-nav mr-auto">
              <ItemList {...props} active label={"Home"} />
              <ItemList {...props} label={"Your Decks"} />
              <ItemList {...props} label={"Take Test"} />
              <li class={`nav-item  mt-3 ${screenWidth < 668 ? "text-center w-100" : ""}`}>
                <Button title="Create Task" className={screenWidth > 668 ? "" : "pt-2 pb-2"} />
              </li>
              <li class={`nav-item  mt-3 ${screenWidth < 668 ? "text-center w-100" : ""}`}>
                <ButtonLabel title="Profile" color={"#fff"} className={screenWidth > 668 ? "d-md-none d-lg-none " : "pt-2 pb-2 "} />
              </li>
            </ul>
          </Collapse>
          {/* user Profile */}
          <div className={`ml-auto d-none d-sm-none d-md-block d-lg-block`}>
            <img
              src={assets.ProfileImage}
              // className="card-img-top image-bottom-radius"
              alt=""
              height={30}
              // width="70%"
            />
          </div>
        </nav>
      </div>
    </div>
  );
};

const ItemList = ({ screenWidth, label, uri = "/", active = false }) => {
  return (
    <li class={`nav-item ${screenWidth > 668 ? `${active ? "isactive" : "inactive"}` : "inactive text-center mt-3"} ml-4 mr-4`}>
      <a class="nav-link" href={uri}>
        {label}
      </a>
    </li>
  );
};

export default Navbar;
