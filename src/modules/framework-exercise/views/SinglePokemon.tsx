import { useDispatch } from "react-redux";
import { setfavoritePokemons } from "../store/slice/pokemonSlice";
import { useSelectFavPokemon } from "src/modules/framework-exercise/store/slice/pokemonSlice";
import {
  getNamesFromArray,
  getUsersWithThisPokemon,
} from "src/utils/functions";
import {
  saveFirebasePokemon,
  updateFirebasePokemon,
} from "src/db/firebase.api";
import { useSelectUser } from "src/modules/framework-exercise/store/slice/userSlice";
import { useState } from "react";
import { MapList } from "src/components/MapList";
import "src/css/SinglePokemonStyles.css";

export const SinglePokemon = ({ pokemonInfo }) => {
  const [isShinySprite, setIsShinySprite] = useState(false);
  const favoritePokemon = useSelectFavPokemon();
  const userInfo = useSelectUser();
  const dispatch = useDispatch();
  const isAlreadyFavorite =
    !!favoritePokemon[pokemonInfo.name]?.userIds?.[userInfo.id];

  const selectedSprite = isShinySprite
    ? pokemonInfo.sprites.front_shiny
    : pokemonInfo.sprites.front_default;

  const handleSavePokemon = async () => {
    const favPokemonSavedInfo = {
      userIds: getUsersWithThisPokemon(
        favoritePokemon[pokemonInfo.name]?.userIds,
        userInfo.id
      ),
      name: pokemonInfo.name,
      id: pokemonInfo.id,
      sprite: selectedSprite,
      types: getNamesFromArray(pokemonInfo.types, "type"),
      abilities: getNamesFromArray(pokemonInfo.abilities, "ability"),
    };
    const isPokemonInDb = !!favoritePokemon[pokemonInfo.name];
    try {
      await (isPokemonInDb
        ? updateFirebasePokemon(favPokemonSavedInfo)
        : saveFirebasePokemon(favPokemonSavedInfo));
      dispatch(
        setfavoritePokemons({
          ...favoritePokemon,
          [pokemonInfo.name]: favPokemonSavedInfo,
        })
      );
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
          <img className="w-100 " src={selectedSprite} alt={pokemonInfo.name} />
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
