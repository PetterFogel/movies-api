import "../../styles/main.css";
import MovieCategory from "../movies/movieCategory";
import { Switch, Route } from "react-router-dom";
import SearchMovie from "../movies/searchMovie";

function Movies() {
  return (
    <main>
      <Switch>
        <Route path="/" exact>
          <MovieCategory />
        </Route>
        <Route path="/search-movie">
          <SearchMovie />
        </Route>
      </Switch>
    </main>
  );
}

export default Movies;
