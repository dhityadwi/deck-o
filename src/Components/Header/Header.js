import Dropdown from "react-bootstrap/Dropdown";
import { useSelector } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import deko from "../../assets/img/decko.svg";
import "./header.scss";

const Header = () => {
  const username = useSelector((state) => state.login.username);

  const historyLanding = useHistory();

  const hanldeLogout = () => {
    historyLanding.push("/");
    const store = window.localStorage;
    store.clear();

    window.location.reload();
  };

  return (
    <nav className="nav">
      <label className="nav__icon">
        <img src={deko} alt="logo"></img>
      </label>

      <ul className="nav__link">
        <Link to="/home">
          <li>Home</li>
        </Link>
        <Link to="/your-decks">
          <li>Your Decks</li>
        </Link>
        <Link to="/your-decks">
          <li>Take Test</li>
        </Link>
      </ul>
      <Link to="/new-deck">
        <button className="nav__btn">+ New Decks</button>
      </Link>

      <Dropdown className="nav__profile">
        <Dropdown.Toggle className="nav__profile__down" id="dropdown-basic">
          <img
            src="https://s3.eu-central-1.amazonaws.com/bootstrapbaymisc/blog/24_days_bootstrap/fox.jpg"
            alt="profile"
          />
        </Dropdown.Toggle>

        {/* <Dropdown.Menu className="nav__profile__menu">
          {["Account", "Category", "Logout"].map((item) => (
            <div key={`default-${item}`} className="your__deck__drop__check">
              <Dropdown.Item value={item}>{item}</Dropdown.Item>
            </div>
          ))}
        </Dropdown.Menu> */}

        <Dropdown.Menu className="nav__profile__menu">
          <div className="nav__profile__drop">
            <h4>Hy! {username} </h4>
            <Dropdown.Item value="account" href="/profile">
              Account
            </Dropdown.Item>
            <Dropdown.Item value="category">Category</Dropdown.Item>
            <Dropdown.Divider />
            <Dropdown.Item value="logout" onClick={hanldeLogout}>
              Logout
            </Dropdown.Item>
          </div>
        </Dropdown.Menu>
      </Dropdown>
    </nav>
  );
};

export default Header;
