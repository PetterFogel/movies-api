import "../../styles/movieItem.css";
import MovieCard from "../ui/movieCard";

function MovieItem(props: any) {

    const moviePoster = `https://image.tmdb.org/t/p/w1280/${props.poster_path}`;

    return(
        <MovieCard>
            <img src={moviePoster} alt={props.title} className="image-holder" />
            <div className="movie-info">
                <p className="title">{props.title}</p>
                <p className="rating">{props.vote_average}</p>
            </div>
        </MovieCard>
    );
}

export default MovieItem;