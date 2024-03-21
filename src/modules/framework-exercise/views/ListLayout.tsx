import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useGetPokemonsQuery } from "src/apis/pokemon.api";
import { useSelectUser } from "src/hooks/useSelectUser";
import { List } from "./List";
import { ROUTES } from "src/utils/routes";
import { UserInput } from "src/components/UserInput";
import { UserButtons } from "src/components/UserButtons";
import { getFirebaseData } from "src/db/firebase.api";
import { setfavoritePokemons } from "../store/slice/pokemonSlice";
import { CollectionNamesEnum } from "src/utils/constants";

export const ListLayout = () => {
  const { data, isLoading, isError } = useGetPokemonsQuery("");
  const { userList, ...user } = useSelectUser();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchData = async () => {
      const firebasePokemons = await getFirebaseData(
        CollectionNamesEnum.POKEMONS
      );
      dispatch(setfavoritePokemons(firebasePokemons));
    };
    fetchData();
  }, [user.name]);

  const isNoUser = user.name === "";

  return (
    <div className="flex flex-col justify-center items-center gap-3 mb-9">
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
        className={`px-4 p-2 mt-5 ${
          isNoUser ? "bg-white text-sky-100 " : "bg-blue-1 text-amber-300"
        }  size-5 font-bold rounded-full w-auto h-auto hover:bg-blue-3 hover:transition-transform hover:scale-110`}
        onClick={() => navigate(ROUTES.FAVORITES)}
        disabled={isNoUser}
      >
        See favorite pokémons
      </button>
    </div>
  );
};
