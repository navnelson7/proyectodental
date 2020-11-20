import React, { Fragment } from 'react'
import NavbarDesktop from './components/Navbar/NavbarDesktop'
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Home from './components/Home';

function App() {
  return (
    <Fragment>
      <Router>
        <NavbarDesktop />
        <Switch>
          <Route path="/">
           <Home/>
          </Route>
        </Switch>
    </Router>
    </Fragment >
  )
}

export default App
