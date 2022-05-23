/** @format */

import { FC } from "react";
import { Switch, Route } from "react-router-dom";
import { FavoritesScreen } from "../features/favorites-screen/FavoritesScreen";
import { MovieItemDetails } from "../features/movies-screen/MovieItemDetails";
import { MoviesScreen } from "../features/movies-screen/MoviesScreen";
import { SearchScreen } from "../features/search-screen/SearchScreen";
import "../styles/main.css";

export const AppRoutes: FC = () => {
  return (
    <main>
      <Switch>
        <Route path="/" exact>
          <MoviesScreen />
        </Route>
        <Route path="/favorites">
          <FavoritesScreen />
        </Route>
        <Route path="/search-movie">
          <SearchScreen />
        </Route>
        <Route path="/movie-details/:id">
          <MovieItemDetails />
        </Route>
      </Switch>
    </main>
  );
};
