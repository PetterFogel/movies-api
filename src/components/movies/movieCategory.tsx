import { useEffect } from "react";
import { useContext } from "react";
import { useState } from "react";
import MovieItem from "./movieItem";
import MovieContext from "../../context/movieContext";
import "../../styles/movieCategory.css";
import "../../styles/Global.css";

function MovieCategory() {
  const { movieList, isLoading, error, fetchMovies } = useContext(MovieContext);
  const [filter, setFilter] = useState("popular");

  useEffect(() => {
    fetchMovies(filter);

  }, [filter]);

  function sortingHandler(category: string) {
    setFilter(category);
  }

  return (
    <section>
      <div className="category-btn-holder">
        <button
          className="category-btn"
          onClick={() => sortingHandler("popular")}
        >
          Popular
        </button>
        <button
          className="category-btn"
          onClick={() => sortingHandler("top_rated")}
        >
          Top Rated
        </button>
        <button
          className="category-btn"
          onClick={() => sortingHandler("upcoming")}
        >
          Upcoming
        </button>
      </div>

      {isLoading && <p className="loading">Loading...</p>}
      {!error && (
        <div className="movie-list-container">
          {movieList.map((movie: any) => (
            <MovieItem {...movie} key={movie.id} />
            ))}
        </div>
      )}
      {error && <p className="error-msg">Something went wrong... :(</p>}
    </section>
  );
}

export default MovieCategory;
