import "../styles/main.css";
import { Switch, Route } from "react-router-dom";
import { MovieCategory } from "../features/movies-screen/movieCategory";
import { MovieFavorites } from "../features/favorites-screen/movieFavorites";
import { SearchMovie } from "../features/search-screen/searchMovie";
import { MovieDetails } from "../features/movies-screen/movieDetails";

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
