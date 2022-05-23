/** @format */

import { FC } from "react";
import { Movie } from "../../models/movie";
import { MovieItem } from "./MovieItem";

type MovieListProps = {
  movies: Movie[];
};

export const MovieList: FC<MovieListProps> = ({ movies }) => {
  return (
    <div className="movie-list-container">
      {movies.map((movie: any) => (
        <MovieItem movie={movie} key={movie.id} />
      ))}
    </div>
  );
};
