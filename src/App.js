import React from 'react';
import {BrowserRouter as Router,Route} from 'react-router-dom'
import Users from './user/pages/Users';
import NewPlaces from './places/pages/NewPlaces';
import MainNavigation from './shared/components/Navigation/MainNavigation';
import UserPlaces from './places/pages/UserPlaces';
import UpdatePlace from './places/pages/UpdatePlace';

const App= () => {
  return(
  <div>
    <h1>hi there</h1>
    <Router>
      <MainNavigation></MainNavigation>
      <Route path='/places/new' exact>
        <NewPlaces></NewPlaces>
      </Route>
      <Route path='/:userId/places' exact>
        <UserPlaces></UserPlaces>
      </Route>
      <Route path = '/places/:placeId'>
        <UpdatePlace></UpdatePlace>
      </Route>
      <Route path='/' exact>
        <Users></Users>
      </Route>
    </Router>
  </div>
  )
}

export default App;
