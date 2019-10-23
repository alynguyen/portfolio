import React from 'react';
import { Route, Switch } from 'react-router-dom';
import MainPage from './pages/MainPage/MainPage';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  return (
    <>
      <Switch>
        <Route exact path='/' render={() =>
          <MainPage />
          }/>
      </Switch>
    </>
  );
}

export default App;
