import { useState } from "react";
import { useDispatch } from "react-redux";
import { setfavoritePokemons } from "../store/slice/pokemonSlice";
import { useSelectFavPokemon } from "src/modules/framework-exercise/store/slice/pokemonSlice";
import { useSelectUser } from "src/modules/framework-exercise/store/slice/userSlice";
import { updateFirebasePokemon, saveFirebaseData } from "src/db/firebase.api";
import { MapList } from "src/components/MapList";
import { FavoritePokemonType } from "src/types/docTypes";
import {
  capitalizeFirstLetter,
  getNamesFromArray,
  getUsersWithThisPokemon,
} from "src/utils/functions";
import "src/css/SinglePokemonStyles.css";
import {
  CollectionNamesEnum,
  AttributeSingularNames,
} from "src/utils/constants";
import { SinglePokemonType } from "src/types/docTypes";

export const SinglePokemon = ({
  pokemonInfo,
}: {
  pokemonInfo: SinglePokemonType;
}) => {
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
    const favPokemonSavedInfo: FavoritePokemonType = {
      userIds: getUsersWithThisPokemon(
        favoritePokemon[pokemonInfo.name]?.userIds,
        userInfo.id
      ),
      name: pokemonInfo.name,
      id: pokemonInfo.id,
      sprite: selectedSprite,
      types: getNamesFromArray(pokemonInfo.types, AttributeSingularNames.TYPE),
      abilities: getNamesFromArray(
        pokemonInfo.abilities,
        AttributeSingularNames.ABILITY
      ),
    };
    const isPokemonInDb = !!favoritePokemon[pokemonInfo.name];
    try {
      await (isPokemonInDb
        ? updateFirebasePokemon(favPokemonSavedInfo)
        : saveFirebaseData(favPokemonSavedInfo, CollectionNamesEnum.POKEMONS));
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
          <h2 className="titleStyles">
            {capitalizeFirstLetter(pokemonInfo.name)}
          </h2>
          <MapList
            title="Abilities"
            list={pokemonInfo?.abilities}
            attribute={AttributeSingularNames.ABILITY}
          />
          <MapList
            title="Type"
            list={pokemonInfo?.types}
            attribute={AttributeSingularNames.TYPE}
          />
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
