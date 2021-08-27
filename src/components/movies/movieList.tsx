import { useEffect } from "react";
import { useContext } from "react";
import MovieItem from "./movieItem";
import MovieContext from "../../context/movieContext";
import "../../styles/movieList.css";

function MovieList() {
  const { topRatedMovies, isLoading, fetchMovies } = useContext(MovieContext);

  useEffect(() => {
    fetchMovies();
  }, []);

  return (
    <div>
      {isLoading ? (
        <p className="loading">Loading...</p>
      ) : (
        <div className="list-container">
          {topRatedMovies.map((movie: any) => (
            <MovieItem {...movie} key={movie.id} />
          ))}
        </div>
      )}
    </div>
  );
}

export default MovieList;
