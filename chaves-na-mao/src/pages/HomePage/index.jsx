import { useEffect, useState } from "react";
import HeaderComp from "../../components/Header";
import MovieCard from "../../components/MovieCard";
import { API, apiKey } from "../../services/api";
import { HomeContainer, MoviesContainer } from "./style";

function HomePage({ movie, setMovie }) {
  const [movieInput, setMovieInput] = useState("");

  useEffect(() => {
    if (movieInput.length > 0) {
      API.get(`${movieInput}&apikey=${apiKey}`).then((res) =>
        res.data.Response === "True" ? setMovie(res.data) : setMovie(null)
      );
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [movieInput]);

  return (
    <HomeContainer>
      <HeaderComp setMovieInput={setMovieInput}></HeaderComp>
      {movie && <h1>FILME CORRESPONDENTE:</h1>}
      <MoviesContainer>
        {movie && <MovieCard movie={movie}></MovieCard>}
      </MoviesContainer>
    </HomeContainer>
  );
}

export default HomePage;
