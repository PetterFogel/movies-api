import { FC } from "react";
import { useHistory } from "react-router-dom";
import { MovieCard } from "../../common/components/movieCard";
import { Movie } from "../../models/movie";
import "../../styles/movieItem.css";

type MovieItemProps = {
  movie: Movie;
}

export const MovieItem: FC<MovieItemProps> = ({ movie }) => {
  const history = useHistory();
  const moviePoster = `https://image.tmdb.org/t/p/w1280/${movie.poster_path}`;

    const handleClick = () => {
        history.push(`movie-details/${movie.id}`)
    }

  return (
    <MovieCard>
        <img 
          src={moviePoster} 
          alt={movie.title} 
          className="image-holder"
          onClick={handleClick}
        />
        <div className="movie-info" onClick={handleClick}>
          <p className="title">{movie.title}</p>
          <p className="rating">{movie.vote_average}</p>
        </div>
    </MovieCard>
  );
}
