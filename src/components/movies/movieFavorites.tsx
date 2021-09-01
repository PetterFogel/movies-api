import { useContext } from "react"
import MovieContext from "../../context/movieContext"
import MovieItem from "./movieItem";

function MovieFavorites() {
    const { favoritesList } = useContext(MovieContext);

    return (
        <section>
            <div className="movie-list-container">
                {favoritesList.map((movie) => (
                    <MovieItem {...movie} key={movie.id} />
                ))}
            </div>
        </section>
    )   
}

export default MovieFavorites