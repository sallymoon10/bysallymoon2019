/**
 *
 * App.js
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 *
 */

import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import HomePage from '../../containers/HomePage/Loadable';
import NotFoundPage from '../../containers/NotFoundPage/Loadable';

import DevWork from '../../containers/DevWork/Loadable';
import DesignWork from '../../containers/DesignWork/Loadable';
import Resume from '../../containers/Resume/Loadable';
import Contacts from '../../containers/Contacts/Loadable';


export default function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/devwork" component={DevWork} />
          <Route exact path="/designwork" component={DesignWork} />
          <Route exact path="/resumé" component={Resume} />
          <Route exact path="/contacts" component={Contacts} />
          <Route component={NotFoundPage} />
        </Switch>
      </Router>
    </div>
  );
}
