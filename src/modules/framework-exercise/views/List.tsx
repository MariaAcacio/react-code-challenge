import { Link } from "react-router-dom";
import { PokemonType } from "src/types/docTypes";
import { capitalizeFirstLetter } from "src/utils/functions";
import { ROUTES } from "src/utils/routes";

export const List = ({ pokemonList }: { pokemonList?: PokemonType[] }) => {
  return (
    <div className="flex flex-col justify-center items-center">
      <h3 className="font-bold text-xl my-5">Pokemon List</h3>
      <ul className="grid grid-cols-2 md:grid-cols-4 gap-8">
        {pokemonList?.map((item) => (
          <li key={item.id} className="text-primary">
            <Link
              className="text-blue-2 font-bold hover:text-purple-900"
              to={`${ROUTES.POKEMON}/${item.id}`}
            >
              {capitalizeFirstLetter(item.name)}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default List;
