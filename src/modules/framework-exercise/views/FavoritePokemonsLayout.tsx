import { useEffect, useState } from "react";
import { useSelectUser } from "src/hooks/useSelectUser";
import { useNavigate } from "react-router-dom";
import { ROUTES } from "src/utils/routes";
import { UserButtons } from "src/components/UserButtons";
import { useSelectFavPokemon } from "src/hooks/useSelectFavPokemon";
import { PokemonsGrid } from "src/components/PokemonsGrid";

export const FavoritePokemonsLayout = () => {
  const { userList, ...user } = useSelectUser();
  const favoritePokemons = useSelectFavPokemon();
  const [pokeList, setPokeList] = useState([]);
  const navigateTo = useNavigate();

  useEffect(() => {
    if (user.name === "") {
      navigateTo(ROUTES.POKEMON);
    }
    // good, but there are some other options to improve this by using dictionaries
    // as well as storing the data in a different way to avoid duplicating data
    setPokeList(favoritePokemons.filter((item) => item.userName === user.name));
  }, [user.name]);

  return (
    <>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          gap: "10px",
        }}
      >
        <h2 className="mt-5">favorite pokemons</h2>
        <UserButtons />
      </div>
      <PokemonsGrid pokeList={pokeList} />
    </>
  );
};
