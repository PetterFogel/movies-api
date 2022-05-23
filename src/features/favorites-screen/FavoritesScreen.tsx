/** @format */

import { FC, useContext } from "react";
import MovieContext from "../../context/movieContext";
import { MovieItems } from "../movies-screen/MovieItems";

export const FavoritesScreen: FC = () => {
  const { favoritesList } = useContext(MovieContext);

  return (
    <section>
      {favoritesList.length <= 0 && (
        <p className="empty-msg">Please add a movie to your favorite list.</p>
      )}
      <div className="movie-list-container">
        {favoritesList.map((movie) => (
          <MovieItems movie={movie} key={movie.id} />
        ))}
      </div>
    </section>
  );
};
