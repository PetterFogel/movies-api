import axios from "axios";
import { useState } from "react";
import { createContext } from "react";


const MovieContext = createContext({
    topRatedMovies: [],
    isLoading: false,
    fetchMovies: () => {},
    searchMovie: (value: string) => {}
})

export function MovieContextProvider(props: any) {
    const [movies, setMovies] = useState([]);
    const [isFetching, setIsFetching] = useState(false);

    async function fetchMoviesHandler() {
      setIsFetching(true);
        try {
          const response = await axios.get(
            "https://api.themoviedb.org/3/movie/popular?api_key=46eda78843a870bbbc6d78ac7c1be16d&language=en-US&page=1"
          );
          const data = response.data.results;
          console.log(data);
          setMovies(data);
        } catch (error) {
          console.error(error);
        }
        setIsFetching(false);
      }
    
      async function searchMovieHandler(movieTitle: string) {
        setIsFetching(true);
        try {
          const response = await axios.get(
            `https://api.themoviedb.org/3/search/movie?api_key=46eda78843a870bbbc6d78ac7c1be16d&language=en-US&page=1&include_adult=false&query=${movieTitle}`
          );
          const data = response.data.results;
          console.log(data);
          setMovies(data);
        } catch (error) {
          console.error(error);
        }
        setIsFetching(false);
      }

    const context = {
        topRatedMovies: movies,
        isLoading: isFetching,
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