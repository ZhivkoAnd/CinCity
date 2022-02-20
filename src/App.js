import React from 'react';
import './App.css';
import MovieList from './components/MovieList'
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Watchlist from './components/Watchlist';
import Login from './components/ui/Login'
import Signup from './components/ui/Signup'
import PrivateRoute from './components/PrivateRoute'



function App() {

  return (
    <>
    <BrowserRouter>
    <Switch>
    <Route exact path = '/' component = {MovieList}></Route>
    {/* <Route exact path = '/action' component = {MovieList}></Route> */}
    <PrivateRoute exact path = '/watchlist' component = {Watchlist}></PrivateRoute>
    <Route exact path = '/login' component = {Login}></Route>
    <Route exact path = '/signup' component = {Signup}></Route>
    </Switch>
    </BrowserRouter>

    {/* <Route
  path='/dashboard'
  render={(props) => (
    <Dashboard {...props} isAuthed={true} />
  )}
/> */}
    </>
  );
}

export default App;
