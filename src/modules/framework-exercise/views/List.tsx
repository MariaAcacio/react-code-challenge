import { Link } from "react-router-dom";
import { PokemonType } from "src/types/docTypes";
import { ROUTES } from "src/utils/routes";

export const List = ({ pokemonList }: { pokemonList?: PokemonType[] }) => {
  return (
    <div>
      <h3>Pokemon List</h3>
      <ul>
        {pokemonList?.map((item) => (
          <li key={item.id} className="text-primary">
            <Link
              className="text-primary text-decoration-none fs-5"
              to={`${ROUTES.POKEMON}/${item.id}`}
            >
              {item.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default List;
