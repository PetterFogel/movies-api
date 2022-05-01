import { useHistory } from "react-router-dom";
import { Movie } from "../../models/movie";
import "../../styles/movieItem.css";
import MovieCard from "../ui/movieCard";

export const MovieItem = (props: Movie) => {
  const history = useHistory();
  const moviePoster = `https://image.tmdb.org/t/p/w1280/${props.poster_path}`;

    function handleClick() {
        history.push(`movie-details/${props.id}`)
    }

  return (
    <MovieCard>
        <img 
          src={moviePoster} 
          alt={props.title} 
          className="image-holder"
          onClick={handleClick}
        />
        <div className="movie-info" onClick={handleClick}>
          <p className="title">{props.title}</p>
          <p className="rating">{props.vote_average}</p>
        </div>
    </MovieCard>
  );
}
