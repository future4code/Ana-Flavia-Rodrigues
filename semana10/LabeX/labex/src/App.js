import React from 'react';
import styled from 'styled-components'
import HomePage from './components/HomePage/HomePage';
import LoginPage from './components/HomePage/LoginPage/LoginPage';
import AplicationFormPage from './components/AplicationFormPage/AplicationFormPage';
import CreateTripePage from './components/CreateTripePage/CreateTripePage';
import ListTripsPage from './components/ListTripsPage/ListTripsPage';
import RouterPage from './components/RouterPage/RouterPage'; 
import TripDetailsPage from './components/TripDetailsPage/TripDetailsPage';


function App() {
  return (
    <AppContainer >
      <HomePage>
        <LoginPage/>
      </HomePage>
      <AplicationFormPage/>
      <CreateTripePage/>
      <ListTripsPage/>
      <RouterPage/>
      <TripDetailsPage/>
    </AppContainer>
  );
}

export default App;
const AppContainer = styled.div`
display: flex;
flex-direction: column;

`