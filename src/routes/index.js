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
import ReadyToTest from '../Pages/ReadyToTest';
import ChooseDeck from '../Pages/ChoseDeck';
import TrueOrFalse from '../Pages/MakeTest/TrueOrFalse';
import Multiple from '../Pages/MakeTest/Multiple';
import TestResult from '../Pages/TestResult/Result';
import StudyPage from '../Pages/StudyPage/StudyPage';
import NewCardPage from '../Pages/NewCardPage/NewCardPage';
import EditYourCards from '../Pages/YourDeckPage/EditYourCards';
const Routes = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={LandingPage}></Route>
        <Route exact path="/home/detail" component={DetailCard}></Route>
        <Route exact path="/home" component={HomePage}></Route>
        <Route exact path="/study/:id" component={StudyPage}></Route>
        <Route exact path="/detail/:id" component={DetailCard}></Route>

        <Route exact path="/your-decks" component={YourDeckPage}></Route>
        <Route exact path="/new-deck" component={NewDeck}></Route>
        <Route exact path="/new-card" component={NewCardPage}></Route>
        <Route exact path="/profile" component={ProfilePage}></Route>
        <Route exact path="/home/profile/my-deck" component={MyDeck}></Route>
        <Route exact path="/home/profile" component={ProfilePage}></Route>
        <Route exact path="/home/your-decks" component={YourDeckPage}></Route>
        {/* <Route
          exact
          path="/your-decks/edit/:id"
          component={EditYourDeck}
        ></Route> */}
        <Route exact path="/home/new-deck" component={NewDeck}></Route>
        <Route exact path="/home" component={HomePage}></Route>
        <Route exact path="/" component={LandingPage}></Route>
        <Route exact path="/home/detail" component={DetailCard}></Route>
        <Route exact path="/home/test" component={ReadyToTest}></Route>
        <Route
          exact
          path="/home/test/choose-deck"
          component={ChooseDeck}
        ></Route>
        <Route
          exact
          path="/home/test/true-or-false"
          component={TrueOrFalse}
        ></Route>
        <Route exact path="/home/test/multiple" component={Multiple}></Route>
        <Route exact path="/home/test/result" component={TestResult}></Route>
        <Route
          exact
          path="/detail/edit-deck/:id"
          component={EditYourDeck}
        ></Route>
        <Route
          exact
          path="/detail/edit-cards/:id"
          component={EditYourCards}
        ></Route>
      </Switch>
    </Router>
  );
};

export default Routes;
