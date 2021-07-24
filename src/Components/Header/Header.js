import Dropdown from 'react-bootstrap/Dropdown';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useHistory } from 'react-router-dom';
import deko from '../../assets/image/logo.png';
import './header.scss';
import user from '../../assets/image/user.svg';
import folder from '../../assets/image/folder.svg';
import logout from '../../assets/image/logout.svg';
import { useEffect } from 'react';
import { profileAsync } from '../../redux/action/profileAction';

const Header = () => {
  const username = useSelector((state) => state.profile.username);

  const historyLanding = useHistory();
  const dispatch = useDispatch();

  const hanldeLogout = () => {
    historyLanding.push('/');
    const store = window.localStorage;
    store.clear();

    window.location.reload();
  };

  useEffect(() => {
    dispatch(profileAsync());
  }, []);

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
          <li>All Decks</li>
        </Link>
        <Link to="/home/test">
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
            <Link to="/profile">
              <Dropdown.Item value="account" href="/profile">
                <img
                  src={user}
                  alt="user"
                  className="nav__profile__drop--icon"
                />
                Account
              </Dropdown.Item>
            </Link>

            <Link to="/profile">
              <Dropdown.Item value="mydeck" href="/profile">
                <img
                  src={folder}
                  alt="folder"
                  className="nav__profile__drop--icon"
                />
                My Deck
              </Dropdown.Item>
            </Link>

            <Dropdown.Divider />
            <Dropdown.Item value="logout" onClick={hanldeLogout}>
              <img
                src={logout}
                alt="logout"
                className="nav__profile__drop--icon"
              />
              Logout
            </Dropdown.Item>
          </div>
        </Dropdown.Menu>
      </Dropdown>
    </nav>
  );
};

export default Header;
