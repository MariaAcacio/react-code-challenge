import { useDispatch } from "react-redux";
import { setfavoritePokemons } from "../store/slice/pokemonSlice";
import { useSelectFavPokemon } from "src/hooks/useSelectFavPokemon";
import { getAbilitiesNames, getTypesNames } from "src/utils/functions";
import { saveFirebasePokemon } from "src/db/firebase.api";
import { useSelectUser } from "src/hooks/useSelectUser";

export const SinglePokemon = ({ pokemonInfo }) => {
  const favoritePokemon = useSelectFavPokemon();
  const userInfo = useSelectUser();
  const dispatch = useDispatch();

  const handleSavePokemon = async () => {
    const favPokemonSavedInfo = {
      userId: userInfo.id,
      userName: userInfo.name,
      name: pokemonInfo.name,
      id: pokemonInfo.id,
      defaultSprite: pokemonInfo.sprites.front_default,
      shinySprite: pokemonInfo.sprites.front_shiny,
      types: getTypesNames(pokemonInfo.types),
      abilities: getAbilitiesNames(pokemonInfo.abilities),
    };
    try {
      if (!favoritePokemon.find((item) => item.id === favPokemonSavedInfo.id)) {
        await saveFirebasePokemon(favPokemonSavedInfo);
        dispatch(
          setfavoritePokemons([...favoritePokemon, favPokemonSavedInfo])
        );
      }
    } catch (error) {
      console.error("Error saving data:", error);
    }
  };

  return (
    <div className="bg-light">
      <h2>{pokemonInfo.name}</h2>
      <div className="rounded-5 bg-primary w-100">
        <img src={pokemonInfo.sprites?.front_default} alt={pokemonInfo.name} />
      </div>
      <img src={pokemonInfo.sprites?.front_shiny} alt={pokemonInfo.name} />
      <h3>Abilities</h3>
      {pokemonInfo?.abilities?.map((item, ind) => (
        <p key={ind}>{item.ability.name}</p>
      ))}
      <h3>Type</h3>
      {pokemonInfo?.types?.map((item, ind) => (
        <p key={ind}>{item.type.name}</p>
      ))}

      <button onClick={handleSavePokemon}>Save the Pokémon</button>
    </div>
  );
};
