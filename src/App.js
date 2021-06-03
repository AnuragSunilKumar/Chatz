
/* eslint-disable import/no-unresolved */

import React from 'react'
import { Switch } from 'react-router';
import PrivateRoute from './Components/PrivateRoute'
import 'rsuite/dist/styles/rsuite-default.css';
import Signin from './Pages/Signin';
import Home from './Pages/Home';
import './styles/main.scss';
import PublicRoute from './Components/PublicRoute';

function App() {
  return (
    <Switch>
      <PublicRoute path ="/signin">
        <Signin />
      </PublicRoute>
      <PrivateRoute path ="/">
        <Home />
      </PrivateRoute>
    </Switch>

  );
}

export default App;
