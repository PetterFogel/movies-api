import axios from "axios";
import { useState } from "react";
import { createContext } from "react";
import { Movie } from "../models/movie";

const API_KEY: string = "46eda78843a870bbbc6d78ac7c1be16d";

interface TypeContextObj {
  movieList: Movie[];
  searchedMovie: Movie[];
  specificMovie: Movie;
  favoritesList: Movie[];
  isLoading: boolean;
  error: null;
  disabled: boolean;
  fetchMovies: (category: string) => void;
  searchMovie: (title: string) => void;
  fetchSpecificMovie: (id: string) => void;
  addToFavorites: (movie: Movie) => void;
  removeFromFavorites: (movie: Movie) => void;
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
  favoritesList: [],
  isLoading: false,
  error: null,
  disabled: false,
  fetchMovies: (category: string) => {},
  searchMovie: (title: string) => {},
  fetchSpecificMovie: (id: string) => {},
  addToFavorites: (movie: Movie) => {},
  removeFromFavorites: (movie: Movie) => {},
});

export function MovieContextProvider(props: any) {
  const [movies, setMovies] = useState([]);
  const [searchMovie, setSearchMovie] = useState([]);
  const [favoritesList, setFavoritesList] = useState<Movie[]>(
    JSON.parse(localStorage.getItem("Movies") || "[]")
  );
  const [specificMovie, setSpecificMovie] = useState<Movie>({
    id: "",
    title: "",
    poster_path: "",
    vote_average: "",
  });
  const [isFetching, setIsFetching] = useState(false);
  const [errorMsg, setErrorMsg] = useState(null);
  const [disabled, setDisabled] = useState(false);

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
    setDisabled(false);
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
        const movieObj: Movie = {
          id: data.id,
          title: data.title,
          poster_path: data.poster_path,
          vote_average: data.vote_average,
          overview: data.overview,
          release_date: data.release_date,
          genres: data.genres,
        };
        for (const favorite of favoritesList) {
          if (movieId === favorite.id.toString()) {
            setDisabled(true);
          }
        }
        setSpecificMovie(movieObj);
      } catch (error) {
        console.log(error);
      }
      setIsFetching(false);
    }, 1000);
  }

  function addToFavoritesHandler(movie: Movie) {
    const newFavoritesList = [...favoritesList, movie];
    setFavoritesList(newFavoritesList);
    localStorage.setItem("Movies", JSON.stringify(newFavoritesList));
    setDisabled(false);
  }

  function removeFromFavoritesHandler(movie: Movie) {
    const newFavoritesList = favoritesList.filter(
      (favorite) => favorite.id !== movie.id
    );
    setFavoritesList(newFavoritesList);
    localStorage.setItem("Movies", JSON.stringify(newFavoritesList));
  }

  const context: TypeContextObj = {
    movieList: movies,
    searchedMovie: searchMovie,
    specificMovie: specificMovie,
    favoritesList: favoritesList,
    isLoading: isFetching,
    error: errorMsg,
    disabled: disabled,
    fetchMovies: fetchMoviesHandler,
    searchMovie: searchMovieHandler,
    fetchSpecificMovie: fetchSpecificMovieHandler,
    addToFavorites: addToFavoritesHandler,
    removeFromFavorites: removeFromFavoritesHandler,
  };

  return (
    <MovieContext.Provider value={context}>
      {props.children}
    </MovieContext.Provider>
  );
}

export default MovieContext;
