import { FC } from "react";
import { Switch, Route } from "react-router-dom";
import { MovieFavorites } from "../features/favorites-screen/movieFavorites";
import { SearchMovie } from "../features/search-screen/searchMovie";
import { MovieDetails } from "../features/movies-screen/movieDetails";
import { MoviesScreen } from "../features/movies-screen/MoviesScreen";
import "../styles/main.css";

export const AppRoutes: FC = () => {
  return (
    <main>
      <Switch>
        <Route path="/" exact>
          <MoviesScreen />
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
