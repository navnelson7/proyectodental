import React, { Fragment } from 'react'
import NavbarDesktop from './components/Navbar/NavbarDesktop'
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Home from './components/Home';
import CardsPacientes from './components/Pacientes/CardsPacientes';
import ProfilePacientes from './components/Pacientes/CardsPacientes/ProfilePacientes';

function App() {
  return (
    <Fragment>
      <Router>
        <NavbarDesktop />
        <Switch>
        <Route path="/paciente/:id">
           <ProfilePacientes/>
          </Route>
        <Route path="/pacientes">
           <CardsPacientes/>
          </Route>
          <Route path="/">
           <Home/>
          </Route>
        </Switch>
    </Router>
    </Fragment >
  )
}

export default App
