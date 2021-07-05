import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import HomePage from "../Pages/Homepage/HomePage";
import YourDeckPage from "../Pages/YourDeckPage/YourDeckPage";
import NewDeck from "../Pages/NewDeck/NewDeck";
import EditYourDeck from "../Pages/YourDeckPage/EditYourDeck";
import LandingPage from "../Pages/LandingPage";
import ProfilePage from "../Pages/ProfilePage";

const Routes = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/profile" component={ProfilePage}></Route>
        <Route exact path="/your-decks" component={YourDeckPage}></Route>
        <Route exact path="/your-decks/edit" component={EditYourDeck}></Route>
        <Route exact path="/new-deck" component={NewDeck}></Route>
        <Route exact path="/home" component={HomePage}></Route>
        <Route exact path="/" component={LandingPage}></Route>
      </Switch>
    </Router>
  );
};

export default Routes;
