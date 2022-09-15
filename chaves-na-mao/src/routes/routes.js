import { useState } from "react";
import { Route, Switch } from "react-router-dom";
import HomePage from "../pages/HomePage";
import MoviePage from "../pages/MoviePage";

function Routes() {
  const [movie, setMovie] = useState(null);

  return (
    <Switch>
      <Route exact path="/">
        <HomePage movie={movie} setMovie={setMovie} />
      </Route>
      <Route path="/movies/:id">
        <MoviePage movie={movie} />
      </Route>
    </Switch>
  );
}

export default Routes;
