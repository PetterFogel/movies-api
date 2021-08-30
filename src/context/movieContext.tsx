import axios from "axios";
import { useState } from "react";
import { createContext } from "react";
import { Movie } from "../models/movie";

const API_KEY: string = "46eda78843a870bbbc6d78ac7c1be16d";

interface TypeContextObj {
  movieList: Movie[];
  searchedMovie: Movie[];
  specificMovie: Movie;
  isLoading: boolean;
  error: null;
  fetchMovies: (value: string) => void;
  searchMovie: (value: string) => void;
  fetchSpecificMovie: (id: string) => void;
}

const MovieContext = createContext<TypeContextObj>({
  movieList: [],
  searchedMovie: [],
  specificMovie: {
    id: "",
    title: "",
    poster_path: "",
    vote_average: "",
  },
  isLoading: false,
  error: null,
  fetchMovies: (value: string) => {},
  searchMovie: (value: string) => {},
  fetchSpecificMovie: (id: string) => {},
});

export function MovieContextProvider(props: any) {
  const [movies, setMovies] = useState([]);
  const [searchMovie, setSearchMovie] = useState([]);
  const [specificMovie, setSpecificMovie] = useState<Movie>({
    id: "",
    title: "",
    poster_path: "",
    vote_average: "",
  });
  const [isFetching, setIsFetching] = useState(false);
  const [errorMsg, setErrorMsg] = useState(null);

  async function fetchMoviesHandler(category: string) {
    setMovies([]);
    setErrorMsg(null);
    setIsFetching(true);
    setTimeout(async () => {
      try {
        const response = await axios.get(
          `https://api.themoviedb.org/3/movie/${category}?api_key=${API_KEY}&language=en-US&page=1`
        );
        const data = response.data.results;
        console.log(data);
        if (data.length <= 0) {
          throw Error("Something went wrong... :(");
        }
        setMovies(data);
      } catch (error) {
        console.log(error.message);
        setErrorMsg(error.message);
      }
      setIsFetching(false);
    }, 1000);
  }

  async function searchMovieHandler(movieTitle: string) {
    setSearchMovie([]);
    setErrorMsg(null);
    setIsFetching(true);
    setTimeout(async () => {
      try {
        const response = await axios.get(
          `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&language=en-US&page=1&include_adult=false&query=${movieTitle}`
        );
        const data = response.data.results;
        console.log(data);
        if (data.length <= 0) {
          throw Error(`Movie "${movieTitle}" was not found... :(`);
        }
        setSearchMovie(data);
      } catch (error) {
        console.log(error.message);
        setSearchMovie([]);
        setErrorMsg(error.message);
      }
      setIsFetching(false);
    }, 1000);
  }

  async function fetchSpecificMovieHandler(movieId: string) {
    setSpecificMovie({
      id: "",
      title: "",
      poster_path: "",
      vote_average: "",
    });
    setIsFetching(true);
    setTimeout(async () => {
      try {
        const response = await axios.get(
          `https://api.themoviedb.org/3/movie/${movieId}?api_key=${API_KEY}&language=en-US`
        );
        const data = response.data;
        console.log(data);
        const movieObj: Movie = {
          id: data.id,
          title: data.title,
          poster_path: data.poster_path,
          vote_average: data.vote_average,
          overview: data.overview,
          release_date: data.release_date,
          genres: data.genres,
        };
        setSpecificMovie(movieObj);
      } catch (error) {
        console.log(error);
      }
      setIsFetching(false);
    }, 1000);
  }

  const context: TypeContextObj = {
    movieList: movies,
    searchedMovie: searchMovie,
    specificMovie: specificMovie,
    isLoading: isFetching,
    error: errorMsg,
    fetchMovies: fetchMoviesHandler,
    searchMovie: searchMovieHandler,
    fetchSpecificMovie: fetchSpecificMovieHandler,
  };

  return (
    <MovieContext.Provider value={context}>
      {props.children}
    </MovieContext.Provider>
  );
}

export default MovieContext;
