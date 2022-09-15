import { GiHouseKeys } from "react-icons/gi";
import { TbSearch } from "react-icons/tb";
import { Header, InputContainer, Logo } from "./style";

function HeaderComp({ setMovieInput }) {
  const handleInput = (e) => {
    setMovieInput(e.target.value);
  };

  return (
    <Header>
      <Logo>
        <div>
          <GiHouseKeys />
          <h2>Chaves na mão</h2>
        </div>
        <h3>Movie</h3>
      </Logo>
      <InputContainer>
        <TbSearch />
        <input
          placeholder="Procurar um filme ou série"
          onKeyUp={(e) => handleInput(e)}
        ></input>
      </InputContainer>
    </Header>
  );
}

export default HeaderComp;
