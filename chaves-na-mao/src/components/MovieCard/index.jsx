import { useHistory } from "react-router-dom";
import { CardContainer, Main } from "./style";

function MovieCard({ movie }) {
  const history = useHistory();

  return (
    <Main>
      {movie && <span>{movie.Title}</span>}
      <CardContainer>
        <img src={movie.Poster} alt="Poster do filme" />
        <div>
          <button onClick={() => history.push(`/movies/${movie.imdbID}`)}>
            Detalhes
          </button>
        </div>
      </CardContainer>
    </Main>
  );
}

export default MovieCard;
