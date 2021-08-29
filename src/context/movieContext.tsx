import axios from "axios";
import { useState } from "react";
import { createContext } from "react";

const API_KEY: string = "46eda78843a870bbbc6d78ac7c1be16d";

const MovieContext = createContext({
    movieList: [],
    searchedMovie: [],
    isLoading: false,
    error: null,
    fetchMovies: (value: string) => {},
    searchMovie: (value: string) => {}
})

export function MovieContextProvider(props: any) {
    const [movies, setMovies] = useState([]);
    const [searchMovie, setSearchMovie] = useState([]);
    const [isFetching, setIsFetching] = useState(false);
    const [errorMsg, setErrorMsg] = useState(null);

    async function fetchMoviesHandler(category: string) {
      setMovies([]);
      setIsFetching(true);
      setTimeout( async () => {
        try {
            const response = await axios.get(
              `https://api.themoviedb.org/3/movie/${category}?api_key=${API_KEY}&language=en-US&page=1`
            );
            const data = response.data.results;
            console.log(data);
            setMovies(data);
          } catch (error) {
            console.log(error.message);
          }
          setIsFetching(false);
        }, 1000)
      }
    
      async function searchMovieHandler(movieTitle: string) {
        setSearchMovie([]);
        setErrorMsg(null);
        setIsFetching(true);
        setTimeout( async () => {
          try {
            const response = await axios.get(
              `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&language=en-US&page=1&include_adult=false&query=${movieTitle}`
            );
            const data = response.data.results;
            console.log(data);
            if (data.length <= 0) {
              throw Error(`Movie "${movieTitle}" was not found... :(`)
            }
            setErrorMsg(null);
            setSearchMovie(data);
          } catch (error) {
            console.log(error.message);
            setSearchMovie([]);
            setErrorMsg(error.message);
          }
          setIsFetching(false);
        }, 1000)
      }

    const context = {
        movieList: movies,
        searchedMovie: searchMovie,
        isLoading: isFetching,
        error: errorMsg,
        fetchMovies: fetchMoviesHandler,
        searchMovie: searchMovieHandler
    }

    return (
        <MovieContext.Provider value={context}>
            {props.children}
        </MovieContext.Provider>
    );
}

export default MovieContext;