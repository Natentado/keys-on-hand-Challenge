import HeaderAndFooter from "../../components/Header&Footer";
import { MovieDescriptions, MoviePContainer, MoviePMain } from "./style";
import { TbArrowBackUp } from "react-icons/tb";
import { useHistory } from "react-router-dom";

function MoviePage({ movie }) {
  const history = useHistory();

  const backPreviousPage = () => {
    history.push("/");
  };

  return (
    <MoviePContainer>
      <HeaderAndFooter />

      <MoviePMain>
        <TbArrowBackUp onClick={backPreviousPage} />

        <MovieDescriptions>
          <img src={movie.Poster} alt="Poster do filme" />
          <div>
            <h2>{movie.Title}</h2>

            <div>
              <span>
                <p>{movie.Type.toUpperCase()}</p>
                {movie.Year} - {movie.Country}
              </span>

              <ul>
                <li>
                  Cast: <br />
                  <p>{movie.Actors}</p>
                </li>

                <li>
                  Director: <br />
                  <p>{movie.Director}</p>
                </li>

                <li>
                  Genre: <br />
                  <p>{movie.Genre}</p>
                </li>

                <li>
                  Runtime: <br />
                  <p>{movie.Runtime}</p>
                </li>
              </ul>

              <p>
                <span>PLOT:</span> {movie.Plot}
              </p>
            </div>
          </div>
        </MovieDescriptions>
      </MoviePMain>

      <HeaderAndFooter />
    </MoviePContainer>
  );
}

export default MoviePage;
