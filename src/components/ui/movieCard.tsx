import "../../styles/movieCard.css";

function MovieCard(props: any) {
    return (
        <div className="card-container">
            {props.children}
        </div>
    );
}

export default MovieCard;