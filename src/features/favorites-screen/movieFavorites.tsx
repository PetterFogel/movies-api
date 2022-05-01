import { useContext, useEffect, useState } from "react"
import MovieContext from "../../context/movieContext"
import { MovieItem } from "../movies-screen/movieItem";

export const MovieFavorites = () => {
    const [isEmpty, setIsEmpty] = useState(false);
    const { favoritesList } = useContext(MovieContext);


    useEffect(() => {
        if (favoritesList.length <= 0) {
            setIsEmpty(true);
        }
    }, [favoritesList.length]);

    return (
        <section>
            {isEmpty && <p className="empty-msg">Please add a movie to your favorite list.</p>}
            <div className="movie-list-container">
                {favoritesList.map((movie) => (
                    <MovieItem {...movie} key={movie.id} />
                ))}
            </div>
        </section>
    )   
}