/** @format */

import { FC, useEffect } from "react";
import { useContext } from "react";
import { useState } from "react";
import { checkPickedCateGoryHandler } from "../../common/functions/checkPickedCategoryHandler/checkPickedCategoryHandler";
import { MovieList } from "./MovieList";
import MovieContext from "../../context/movieContext";
import "../../styles/movieCategory.css";
import "../../styles/Global.css";

export const MoviesScreen: FC = () => {
  const { movieList, isLoading, error, fetchMovies } = useContext(MovieContext);
  const [filter, setFilter] = useState("popular");

  useEffect(() => {
    fetchMovies(filter);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [filter]);

  const sortingHandler = (category: string) => {
    setFilter(category);
  };

  if (error) return <p className="error-msg">Something went wrong... :(</p>;

  return (
    <section>
      <div className="category-btn-holder">
        <button
          className="category-btn"
          style={{ background: checkPickedCateGoryHandler(filter, "popular") }}
          onClick={() => sortingHandler("popular")}
        >
          Popular
        </button>
        <button
          className="category-btn"
          style={{
            background: checkPickedCateGoryHandler(filter, "top_rated"),
          }}
          onClick={() => sortingHandler("top_rated")}
        >
          Top Rated
        </button>
        <button
          className="category-btn"
          style={{ background: checkPickedCateGoryHandler(filter, "upcoming") }}
          onClick={() => sortingHandler("upcoming")}
        >
          Upcoming
        </button>
      </div>

      {isLoading ? (
        <p className="loading">Loading...</p>
      ) : (
        <MovieList movies={movieList} />
      )}
    </section>
  );
};
