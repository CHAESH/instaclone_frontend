import React from "react";
import { Route, Switch } from "react-router-dom";
import PropTypes from "prop-types";
import Auth from "../Routes/Auth/index";
import Feed from "../Routes/Feed";
import Direct from "../Routes/Direct";
import Explore from "../Routes/Explore";
import Notification from "../Routes/Notification";
import Search from "../Routes/Search";
import Profile from "../Routes/Profile";

const LoggedInRoutes = () => (
  <Switch>
    <Route exact path="/" component={Feed} />
    <Route path="/direct" component={Direct} />
    <Route path="/explore" component={Explore} />
    <Route path="/notification" component={Notification} />
    <Route path="/search" component={Search} />
    <Route path="/:username" component={Profile} />
  </Switch>
);
const LoggedOutRoutes = () => (
  <Switch>
    <Route exact path="/" component={Auth} />
  </Switch>
);

const LogRouter = ({ isLoggedIn }) =>
  isLoggedIn ? <LoggedInRoutes /> : <LoggedOutRoutes />;

LogRouter.propTypes = {
  isLoggedIn: PropTypes.bool.isRequired,
};

export default LogRouter;
