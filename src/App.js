import React from 'react';
import { Router, Route, Redirect, useParams } from 'react-router-dom';
import { createBrowserHistory } from 'history';

const defaultHistory = createBrowserHistory();

function App({ history = defaultHistory }) {
  return (
    <Router history={history}>
      <Route exact="/">
        <Redirect to="/account" />
      </Route>
      <Route path="/account/:id?">
        <Greeting>Welcome!!</Greeting>
      </Route>
    </Router>
  );
}

function Greeting({ children }) {
  const { id } = useParams();
  return <h1>{`${children} - ${id || ''}`}</h1>;
}

export default App;
