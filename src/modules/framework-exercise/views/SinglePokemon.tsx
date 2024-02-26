import { useDispatch } from "react-redux";
import { setfavoritePokemons } from "../store/slice/pokemonSlice";
import { useSelectFavPokemon } from "src/hooks/useSelectFavPokemon";
import {
  getNamesFromArray,
  isPokemonAlreadyFavorite,
} from "src/utils/functions";
import { saveFirebasePokemon } from "src/db/firebase.api";
import { useSelectUser } from "src/hooks/useSelectUser";
import { useState } from "react";
import { MapList } from "src/components/MapList";
import "src/css/SinglePokemonStyles.css";

export const SinglePokemon = ({ pokemonInfo }) => {
  const [isShinySprite, setIsShinySprite] = useState(false);
  const favoritePokemon = useSelectFavPokemon();
  const userInfo = useSelectUser();
  const dispatch = useDispatch();

  const isAlreadyFavorite = isPokemonAlreadyFavorite({
    pokemonList: favoritePokemon,
    pokemonId: pokemonInfo.id,
    userName: userInfo.name,
  });

  const handleSavePokemon = async () => {
    const selectedSprite = isShinySprite
      ? pokemonInfo.sprites.front_shiny
      : pokemonInfo.sprites.front_default;
    const favPokemonSavedInfo = {
      userId: userInfo.id,
      userName: userInfo.name,
      name: pokemonInfo.name,
      id: pokemonInfo.id,
      sprite: selectedSprite,
      types: getNamesFromArray(pokemonInfo.types, "types"),
      abilities: getNamesFromArray(pokemonInfo.abilities, "abilities"),
    };
    try {
      if (!isAlreadyFavorite) {
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
    <div style={{ marginTop: "80px" }}>
      <div className="contentStyles">
        <div
          className=" contentImg"
          onClick={() => setIsShinySprite(!isShinySprite)}
        >
          <img
            className="w-100 "
            src={
              isShinySprite
                ? pokemonInfo.sprites?.front_shiny
                : pokemonInfo.sprites?.front_default
            }
            alt={pokemonInfo.name}
          />
        </div>
        <div className="descriptionStyles">
          <h2 className="titleStyles">{pokemonInfo.name}</h2>
          <MapList
            title="Abilities"
            list={pokemonInfo?.abilities}
            attribute="ability"
          />
          <MapList title="Type" list={pokemonInfo?.types} attribute="type" />
        </div>
      </div>
      <div className="btnWrapper">
        <button
          onClick={handleSavePokemon}
          disabled={isAlreadyFavorite || userInfo.name === ""}
          className="btnStyles "
        >
          {isAlreadyFavorite ? "Pokémon Saved" : "Save the Pokémon"}
        </button>
      </div>
    </div>
  );
};
