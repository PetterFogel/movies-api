import { useContext } from "react";
import { FormEvent, useState } from "react";
import { ChangeEvent } from "react";
import MovieContext from "../../context/movieContext";
import MovieItem from "./movieItem";

function SearchMovie() {
  const { searchedMovie, isLoading, error, searchMovie } = useContext(MovieContext);
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
      {error && <p className="loading">{error}</p> }
      <div className="movie-list-container">
        {searchedMovie.map((movie: any) => (
          <MovieItem {...movie} key={movie.id} />
        ))}
        </div>
    </section>
  );
}

export default SearchMovie;