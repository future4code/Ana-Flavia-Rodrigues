import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import HomePage from '../screens/HomePage/HomePage'
import AplicationFormPage from '../screens/AplicationFormPage/AplicationFormPage';
import CreateTripePage from '../screens/CreateTripePage/CreateTripePage';
import ListTripsPage from '../screens/ListTripsPage/ListTripsPage';
import LoginPage from '../screens/LoginPage/LoginPage';
import RouterPage from '../screens/RouterPage/RouterPage';
import TripDetailsPage from '../screens/TripDetailsPage/TripDetailsPage';

const Router = () => {
  return(
    <BrowserRouter>
        <Switch>
            <Route exact path="/">
                <HomePage/>
            </Route>
            <Route exact path="/formulario">
                <AplicationFormPage/>
            </Route>
            <Route exact path="/viagens">
                <CreateTripePage/>
            </Route>
            <Route exact path="/lista_viagens">
                <ListTripsPage/>
            </Route> 
            <Route exact path="/login">
                <LoginPage/>
            </Route>
            <Route exact path="/roteiro">
                <RouterPage/>
            </Route>
            <Route exact path="/detalhes">
                <TripDetailsPage/>
            </Route>
            <Route>
                <div>Página não encontrada (404) :(</div>
            </Route>
        </Switch>
    </BrowserRouter>
  );
}
export default Router;