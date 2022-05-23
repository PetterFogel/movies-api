/** @format */

import { FC } from "react";
import { Switch, Route } from "react-router-dom";
import { SearchMovie } from "../features/search-screen/SearchMovie";
import { MoviesScreen } from "../features/movies-screen/MoviesScreen";
import { MovieFavorites } from "../features/favorites-screen/MovieFavorites";
import { MovieDetails } from "../features/movies-screen/MovieDetails";
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
};
