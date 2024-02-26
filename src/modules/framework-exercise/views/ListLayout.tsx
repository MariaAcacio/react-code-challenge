import { useGetPokemonsQuery } from "src/apis/pokemon.api";
import { useSelectUser } from "src/hooks/useSelectUser";
import { List } from "./List";
import { useNavigate } from "react-router-dom";
import { ROUTES } from "src/utils/routes";
import { UserInput } from "src/components/UserInput";
import { UserButtons } from "src/components/UserButtons";

export const ListLayout = () => {
  const { data, isLoading, isError } = useGetPokemonsQuery("");
  const { userList, ...user } = useSelectUser();
  const navigate = useNavigate();

  return (
    <>
      <UserInput />
      <UserButtons />

      {isLoading ? (
        <div>Loading...</div>
      ) : isError ? (
        <div>Something went wrong!</div>
      ) : (
        <List pokemonList={data} />
      )}

      <button
        className="bg-body-secondary text-black p-3 rounded-5 mt-5 pointer-event"
        onClick={() => navigate(ROUTES.FAVORITES)}
        disabled={user.name === ""}
      >
        See favorite pokémons
      </button>
    </>
  );
};
