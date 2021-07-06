import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import HomePage from '../Pages/Homepage/HomePage';
import YourDeckPage from '../Pages/YourDeckPage/YourDeckPage';
import NewDeck from '../Pages/NewDeck/NewDeck';
import EditYourDeck from '../Pages/YourDeckPage/EditYourDeck';
import ProfilePage from '../Pages/ProfilePage';
import MyDeck from '../Components/Profile/MyDeck';
import LandingPage from '../Pages/LandingPage/LandingPage';
import DetailCard from '../containers/pages/DetailCard/';

const Routes = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/home/profile/my-deck" component={MyDeck}></Route>
        <Route exact path="/home/profile" component={ProfilePage}></Route>
        <Route exact path="/home/your-decks" component={YourDeckPage}></Route>
        <Route
          exact
          path="/home/your-decks/edit"
          component={EditYourDeck}
        ></Route>
        <Route exact path="/home/new-deck" component={NewDeck}></Route>
        <Route exact path="/home" component={HomePage}></Route>
        <Route exact path="/" component={LandingPage}></Route>
        <Route exact path="/home/detail" component={DetailCard}></Route>
      </Switch>
    </Router>
  );
};

export default Routes;
