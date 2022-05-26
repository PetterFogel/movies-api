/** @format */

import { useContext, FormEvent, ChangeEvent, useState, FC } from "react";
import { Movie } from "../../models/movie";
import { MovieItem } from "../movies-screen/MovieItem";
import MovieContext from "../../context/movieContext";
import "../../styles/Global.css";
import "../../styles/searchMovie.css";
import { SearchForm } from "./SearchForm";

export const SearchScreen: FC = () => {
  const { searchedMovie, isLoading, error } = useContext(MovieContext);

  return (
    <section>
      <SearchForm />
      {isLoading && <p className="loading">Loading...</p>}
      {error && <p className="error-msg">{error}</p>}
      <div className="movie-list-container">
        {searchedMovie.map((movie: Movie) => (
          <MovieItem movie={movie} key={movie.id} />
        ))}
      </div>
    </section>
  );
};
