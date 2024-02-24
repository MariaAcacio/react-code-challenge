import { Link } from "react-router-dom";
import { useFetchPokeList } from "../../../hooks/useFetchPokeList";
const List = () => {
  const { pokemonList, isLoading, hasError } = useFetchPokeList();

  return (
    <div>
      <h1>Pokemon List</h1>
      <ul>
        {pokemonList.map((item) => (
          <li key={item.id}>
            <Link to={`/pokemon/${item.id}`}>{item.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default List;
