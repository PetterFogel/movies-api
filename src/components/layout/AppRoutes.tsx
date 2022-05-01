import "../../styles/main.css";
import MovieCategory from "../movies/movieCategory";
import { Switch, Route } from "react-router-dom";
import SearchMovie from "../movies/searchMovie";
import MovieDetails from "../movies/movieDetails";
import MovieFavorites from "../movies/movieFavorites";

export const AppRoutes = () => {
  return (
    <main>
      <Switch>
        <Route path="/" exact>
          <MovieCategory />
        </Route>
        <Route path="/favorites">
          <MovieFavorites />
        </Route>
        <Route path="/search-movie">
          <SearchMovie />
        </Route>
        <Route path="/movie-details/:id">
          <MovieDetails />
        </Route>
      </Switch>
    </main>
  );
}
