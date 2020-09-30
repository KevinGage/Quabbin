import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import NavbarComponent from './components/NavbarComponent/NavbarComponent';
import Records from './components/Records/Records';
import RawData from './components/RawData/RawData';
import NotFound from './components/NotFound/NotFound';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavbarComponent />
        <Switch>
          <Route exact path="/">
            <Records />
          </Route>
          <Route path="/data">
            <RawData />
          </Route>
          <Route path="*">
            <NotFound />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
