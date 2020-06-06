import React from "react";
import "./App.css";
import BaseLayout from "./Layouts/BaseLayout/BaseLayout";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import FilmsPage from "./pages/FilmsPage/FilmsPage";
import HomePage from "./pages/HomePage/HomePage";
import PeoplePage from "./pages/PeoplePage/PeoplePage";
import PlanetsPage from "./pages/PlanetsPage/PlanetsPage";
import FilmDetailsPage from "./pages/FilmDetailsPage/FilmDetailsPage"

function App() {
  return (
    <BrowserRouter>
      <BaseLayout>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/films" component={FilmsPage} />
          <Route path="/people" component={PeoplePage} />
          <Route path="/planets" component={PlanetsPage} />
          <Route path="/filmdetails" component={FilmDetailsPage} />
        </Switch>
      </BaseLayout>
    </BrowserRouter>
  );
}

export default App;
