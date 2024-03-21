import "src/css/PokemonsGridStyles.css";
import { ThCell } from "./ThCell";
import { capitalizeFirstLetter } from "src/utils/functions";
import { MapListForGrid } from "./MapListForGrid";
import { AttributeNamesEnum } from "src/utils/constants";
import { FavoritePokemonType } from "src/types/docTypes";

export const PokemonsGrid = ({
  pokeList,
}: {
  pokeList: FavoritePokemonType[];
}) => {
  const tableTitles = ["Picture", "Name", "Ability", "Type"];
  const hasPokemons = pokeList.length > 0;
  return (
    <table
      style={{
        borderCollapse: "collapse",
        width: "100%",
        border: "2px solid black",
        borderRadius: "5px",
        marginTop: "40px",
        marginBottom: "40px",
      }}
    >
      <thead>
        <tr>
          {tableTitles.map((title, index) => (
            <ThCell key={index} title={title} />
          ))}
        </tr>
      </thead>
      <tbody>
        {hasPokemons ? (
          pokeList.map((item) => (
            <tr key={item.id}>
              <td className="flex justify-center tdStyle ">
                <img
                  src={item.sprite}
                  alt={item.name}
                  style={{ width: "100px" }}
                />
              </td>
              <td className="tdStyle">{capitalizeFirstLetter(item.name)}</td>
              <td className="tdStyle">
                <MapListForGrid
                  list={item}
                  attribute={AttributeNamesEnum.ABILITIES}
                />
              </td>
              <td className="tdStyle">
                <MapListForGrid
                  list={item}
                  attribute={AttributeNamesEnum.TYPES}
                />
              </td>
            </tr>
          ))
        ) : (
          <tr>
            <td className="noPokemons">No pokemons to show</td>
          </tr>
        )}
      </tbody>
    </table>
  );
};
