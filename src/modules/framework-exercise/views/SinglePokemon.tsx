import { useDispatch } from "react-redux";
import { setfavoritePokemons } from "../store/slice/pokemonSlice";
import { useSelectFavPokemon } from "src/hooks/useSelectFavPokemon";
import { getNamesFromArray, isPokemonAlreadyFavorite } from "src/utils/functions";
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

  // good job, works for this implementation but there are another options
  const isAlreadyFavorite = isPokemonAlreadyFavorite({
    pokemonList: favoritePokemon,
    pokemonId: pokemonInfo.id,
    userName: userInfo.name,
  });

  const selectedSprite = isShinySprite
    ? pokemonInfo.sprites.front_shiny
    : pokemonInfo.sprites.front_default;

  const handleSavePokemon = async () => {
    /*
      this object seems that for each pokemon, it will save a different instance with the same data except for the userName
      wich will duplicate innecesary data, it should be better to save the pokemon once and add an array of usersIds that have saved it, or even better, save for each user, an array of pokemonIds
     */
    const favPokemonSavedInfo = {
      userId: userInfo.id,
      userName: userInfo.name, // this would be better as an array of userIds to avoid duplicating data
      name: pokemonInfo.name,
      id: pokemonInfo.id,
      sprite: selectedSprite,
      types: getNamesFromArray(pokemonInfo.types, "type"),
      abilities: getNamesFromArray(pokemonInfo.abilities, "ability"),
    };
    try {
      if (!isAlreadyFavorite) {
        await saveFirebasePokemon(favPokemonSavedInfo);
        dispatch(setfavoritePokemons([...favoritePokemon, favPokemonSavedInfo]));
      }
    } catch (error) {
      console.error("Error saving data:", error);
    }
  };

  return (
    <div style={{ marginTop: "80px" }}>
      <div className="contentStyles">
        <div className=" contentImg" onClick={() => setIsShinySprite(!isShinySprite)}>
          {/* we can use selectedSprite in order to have a cleaner code */}
          <img className="w-100 " src={selectedSprite} alt={pokemonInfo.name} />
        </div>
        <div className="descriptionStyles">
          <h2 className="titleStyles">{pokemonInfo.name}</h2>
          <MapList title="Abilities" list={pokemonInfo?.abilities} attribute="ability" />
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
