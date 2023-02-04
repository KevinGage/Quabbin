import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import NavbarComponent from "./components/NavbarComponent/NavbarComponent";
import Records from "./components/Records/Records";
import RawData from "./components/RawData/RawData";
import Stats from "./components/Stats/Stats";
import NotFound from "./components/NotFound/NotFound";
import About from "./components/About/About";
import data from "./data/data.json";
import stringToOunces from "./util/ToOz";

function App() {
  const fish = data.fishermen
    .flatMap((fm) => {
      return fm.Fish.map((f, i) => {
        const speciesName = data.species.find((s) => s.code === f.Species).name;
        return {
          ...f,
          Id: fm.Name + i,
          Name: fm.Name,
          SpeciesCode: f.Species,
          Species: speciesName,
          Oz: stringToOunces(f.Weight),
        };
      });
    })
    .sort((a, b) => {
      return b.Oz - a.Oz;
    });

  return (
    <div className="App">
      <BrowserRouter>
        <NavbarComponent />
        <Switch>
          <Route exact path="/">
            <Records fish={fish} />
          </Route>
          <Route exact path="/stats">
            <Stats fish={fish} />
          </Route>
          <Route path="/data">
            <RawData fish={fish} />
          </Route>
          <Route path="/about">
            <About />
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
