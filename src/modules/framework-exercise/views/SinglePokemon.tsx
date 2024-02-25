import { useDispatch } from "react-redux";
import { setfavoritePokemons } from "../store/slice/pokemonSlice";
import { useSelectFavPokemon } from "src/hooks/useSelectFavPokemon";
import { getAbilitiesNames, getTypesNames } from "src/utils/functions";

export const SinglePokemon = ({ pokemonInfo }) => {
  const favoritePokemon = useSelectFavPokemon();
  const dispatch = useDispatch();
  console.log({ pokemonInfo });

  const handleSavePokemon = () => {
    console.log("Save the Pokémon");
    const favPokemonSavedInfo = {
      name: pokemonInfo.name,
      id: pokemonInfo.id,
      defaultSprite: pokemonInfo.sprites.front_default,
      shinySprite: pokemonInfo.sprites.front_shiny,
      types: getTypesNames(pokemonInfo.types),
      abilities: getAbilitiesNames(pokemonInfo.abilities),
    };
    if (!favoritePokemon.find((item) => item.id === favPokemonSavedInfo.id)) {
      dispatch(setfavoritePokemons([...favoritePokemon, favPokemonSavedInfo]));
    }
  };
  console.log({ favoritePokemon });

  return (
    <div>
      <h2>{pokemonInfo.name}</h2>
      <img src={pokemonInfo.sprites?.front_default} alt={pokemonInfo.name} />
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
