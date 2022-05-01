import { useEffect } from "react";
import { useContext } from "react";
import { useState } from "react";
import MovieItem from "./movieItem";
import MovieContext from "../../context/movieContext";
import "../../styles/movieCategory.css";
import "../../styles/Global.css";

export const MovieCategory = () => {
  const { movieList, isLoading, error, fetchMovies } = useContext(MovieContext);
  const [filter, setFilter] = useState("popular");
  const [popular, setPopular] = useState(false);
  const [toprated, setToprated] = useState(false);
  const [upcoming, setUpcoming] = useState(false);
  // const [active, setActive] = useState(false);

  useEffect(() => {
    fetchMovies(filter);

    if (filter === "popular") {
      setPopular(true);
      setToprated(false);
      setUpcoming(false);
    } 
    if (filter === "top_rated") {
      setPopular(false);
      setToprated(true);
      setUpcoming(false);
    } 
    if (filter === "upcoming") {
      setPopular(false);
      setToprated(false);
      setUpcoming(true);
    } 

  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [filter]);

  function sortingHandler(category: string) {
    setFilter(category);
  }

  return (
    <section>
      <div className="category-btn-holder">
        <button
          className="category-btn"
          style={{ background: popular ? "#222" : "#111" }}
          onClick={() => sortingHandler("popular")}
        >
          Popular
        </button>
        <button
          className="category-btn"
          style={{ background: toprated ? "#222" : "#111" }}
          onClick={() => sortingHandler("top_rated")}
        >
          Top Rated
        </button>
        <button
          className="category-btn"
          style={{ background: upcoming ? "#222" : "#111" }}
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
