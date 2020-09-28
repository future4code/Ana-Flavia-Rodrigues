import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import HomePage from '../screens/HomePage/HomePage'
import AplicationFormPage from '../screens/AplicationFormPage/AplicationFormPage';
import CreateTripePage from '../screens/CreateTripPage/CreateTripPage';
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
            <Route exact path="/application-form">
                <AplicationFormPage/>
            </Route>
            <Route exact path="/trips/create">
                <CreateTripePage/>
            </Route>
            <Route exact path="/trips/list">
                <ListTripsPage/>
            </Route> 
            <Route exact path="/login">
                <LoginPage/>
            </Route>
            <Route exact path="/router">
                <RouterPage/>
            </Route>
            <Route exact path="/trips/details">
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