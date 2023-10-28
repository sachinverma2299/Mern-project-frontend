import React from 'react';
import {BrowserRouter as Router,Route} from 'react-router-dom'
import Users from './user/pages/Users';
import NewPlaces from './places/pages/NewPlaces';

const App= () => {
  return(
  <div>
    <h1>hi there</h1>
    <Router>
      <Route path='/places/new' exact>
        <NewPlaces></NewPlaces>
      </Route>
      <Route path='/' exact>
        <Users></Users>
      </Route>
    </Router>
  </div>
  )
}

export default App;
