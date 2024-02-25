import { Link } from "react-router-dom";
import { PokemonType } from "src/types/docTypes";

export const List = ({ pokemonList }: { pokemonList?: PokemonType[] }) => {
  return (
    <div>
      <h1>Pokemon List</h1>
      <ul>
        {pokemonList?.map((item) => (
          <li key={item.id}>
            <Link to={`/pokemon/${item.id}`}>{item.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default List;
