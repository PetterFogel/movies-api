/** @format */

import { useContext, FormEvent, ChangeEvent, useState, FC } from "react";
import { Movie } from "../../models/movie";
import { MovieItem } from "../movies-screen/MovieItem";
import MovieContext from "../../context/movieContext";
import "../../styles/Global.css";
import "../../styles/searchMovie.css";

export const SearchMovie: FC = () => {
  const { searchedMovie, isLoading, error, searchMovie } =
    useContext(MovieContext);
  const [inputValue, setInputValue] = useState("");

  function onChangeHandler(e: ChangeEvent<HTMLInputElement>) {
    setInputValue(e.target.value);
  }

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    searchMovie(inputValue);
    setInputValue("");
  }

  return (
    <section>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Search Movie..."
          value={inputValue}
          onChange={onChangeHandler}
        />
        <button className="search-btn-icon">
          <i className="fas fa-search"></i>
        </button>
      </form>
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