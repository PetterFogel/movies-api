/** @format */

import { FC, useContext } from "react";
import { MovieItem } from "../movies-screen/MovieItem";
import MovieContext from "../../context/movieContext";

export const SearchList: FC = () => {
  const { searchedMovie } = useContext(MovieContext);

  return (
    <div className="movie-list-container">
      {searchedMovie.map((movie) => (
        <MovieItem movie={movie} key={movie.id} />
      ))}
    </div>
  );
};
