import React, { Fragment, lazy, Suspense } from "react";
import NavbarDesktop from "./components/Navbar/NavbarDesktop";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// IMPORTS LAZY
const Home = lazy(() => import("./components/Home"));
const ProfilePacientes = lazy(() =>
  import("./components/Home/CardsPacientes/ProfilePacientes")
);
const Pacientes = lazy(() => import("./components/Pacientes"));

function App() {
  return (
    <Fragment>
      <Router>
        <NavbarDesktop />
        <Switch>
          <Route path="/paciente/:id">
            <Suspense fallback={<p>Cargando...</p>}>
              <ProfilePacientes />
            </Suspense>
          </Route>
          <Route path="/pacientes">
            <Suspense fallback={<p>Cargando...</p>}>
              <Pacientes />
            </Suspense>
          </Route>
          <Route path="/">
            <Suspense fallback={<p>Cargando...</p>}>
              <Home />
            </Suspense>
          </Route>
        </Switch>
      </Router>
    </Fragment>
  );
}

export default App;
