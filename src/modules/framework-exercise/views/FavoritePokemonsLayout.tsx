import { useEffect, useState } from "react";
import { useSelectUser } from "src/modules/framework-exercise/store/slice/userSlice";
import { useNavigate } from "react-router-dom";
import { ROUTES } from "src/utils/routes";
import { UserButtons } from "src/components/UserButtons";
import { useSelectFavPokemon } from "src/modules/framework-exercise/store/slice/pokemonSlice";
import { PokemonsGrid } from "src/components/PokemonsGrid";
import { FavoritePokemonType } from "src/types/docTypes";

export const FavoritePokemonsLayout = () => {
  const user = useSelectUser();
  const favoritePokemons = useSelectFavPokemon();
  const [pokeList, setPokeList] = useState<FavoritePokemonType[]>([]);
  const navigateTo = useNavigate();

  useEffect(() => {
    if (user.name === "") {
      navigateTo(ROUTES.POKEMON);
    }

    const userFavPokemons = Object.values(favoritePokemons).filter(
      (item) => item.userIds?.[user.id]
    );
    setPokeList(userFavPokemons);
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
        <h2 className="my-5 font-bold text-4xl  w-auto">favorite pokemons</h2>
        <UserButtons />
      </div>
      <PokemonsGrid pokeList={pokeList} />
    </>
  );
};
