import { FC, useContext } from "react"
import MovieContext from "../../context/movieContext"
import { MovieItem } from "../movies-screen/movieItem";

export const MovieFavorites: FC = () => {
    const { favoritesList } = useContext(MovieContext);

    return (
        <section>
            {favoritesList.length <= 0 && <p className="empty-msg">Please add a movie to your favorite list.</p>}
            <div className="movie-list-container">
                {favoritesList.map((movie) => (
                    <MovieItem movie={movie} key={movie.id} />
                ))}
            </div>
        </section>
    )   
}