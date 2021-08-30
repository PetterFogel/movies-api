import { useContext } from "react";
import { useEffect } from "react";
import { useParams } from "react-router";
import MovieContext from "../../context/movieContext";
import "../../styles/movieDetails.css";

function MovieDetails() {
  const params = useParams<{ id: string }>();
  const { specificMovie, isLoading, fetchSpecificMovie } = useContext(MovieContext);
  const moviePoster = `https://image.tmdb.org/t/p/w1280/${specificMovie.poster_path}`;

  const genres = specificMovie.genres;

  useEffect(() => {
    fetchSpecificMovie(params.id);
  }, []);

  return (
    <section>
      {isLoading && <p className="loading">Loading...</p>}
      {!isLoading && (
        <div className="details-container">
          <div className="image-detail-holder">
            <img src={moviePoster} alt={specificMovie.title} />
          </div>
          <div className="movie-detail-holder">
            <div className="title-detail-holder">
              <h2 className="details-title">{specificMovie.title}</h2>
              <div className="rating-holder">
                <i className="fas fa-star rating-icon"></i>
                <p className="rating-title">{specificMovie.vote_average}</p>
              </div>
            </div>
            <div className="genre-holder">
              Genre:
              {genres?.map((genre: any) => (
                <p className="genre-title">{genre.name}</p>
              ))}
            </div>
            <div className="overview-holder">
              <p>{specificMovie.overview}</p>
            </div>
            <div className="add-btn-holder">
              <button className="add-btn">
                <p className="add-btn-icon">+</p>
                Add to Favorites
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

export default MovieDetails;
