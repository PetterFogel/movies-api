/** @format */

import { FC, useEffect } from "react";
import { useContext } from "react";
import { useState } from "react";
import { MovieList } from "./MovieList";
import { MovieCategoryPanel } from "./MovieCategoryPanel";
import MovieContext from "../../context/movieContext";
import "../../styles/Global.css";

export const MoviesScreen: FC = () => {
  const { movieList, isLoading, error, fetchMovies } = useContext(MovieContext);
  const [category, setCategory] = useState("popular");

  useEffect(() => {
    fetchMovies(category);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [category]);

  const categoryHandler = (category: string) => {
    setCategory(category);
  };

  if (error) return <p className="error-msg">Something went wrong... :(</p>;

  return (
    <section>
      <MovieCategoryPanel
        category={category}
        onCategoryClick={categoryHandler}
      />
      {isLoading ? (
        <p className="loading">Loading...</p>
      ) : (
        <MovieList movies={movieList} />
      )}
    </section>
  );
};
