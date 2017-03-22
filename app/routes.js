import React from 'react';
import { Router, Route, browserHistory, IndexRedirect } from 'react-router';

import Home from './components/Home'


export default () => (
  <Router history={browserHistory}>
    <Route path="/" component={Home} />
  </Router>
);
