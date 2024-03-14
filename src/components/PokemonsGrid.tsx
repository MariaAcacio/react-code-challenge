import "src/css/PokemonsGridStyles.css";
import { ThCell } from "./ThCell";

export const PokemonsGrid = ({ pokeList }) => {
  const tableTitles = ["Picture", "Name", "Ability", "Type"];
  const hasPokemons = pokeList.length > 0;
  return (
    <table
      style={{
        borderCollapse: "collapse",
        width: "100%",
        border: "2px solid black",
        borderRadius: "5px",
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
              <td className="tdStyle">
                <img
                  src={item.sprite}
                  alt={item.name}
                  style={{ width: "100px" }}
                />
              </td>
              <td className="tdStyle">{item.name}</td>
              <td className="tdStyle">
                {item.abilities.map((ability, ind) => (
                  <p key={ind}>{ability}</p>
                ))}
              </td>
              <td className="tdStyle">
                {item.types.map((type, ind) => (
                  <p key={ind}>{type}</p>
                ))}
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
