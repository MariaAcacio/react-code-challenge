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

export const ListLayout = () => {
  const { data, isLoading, isError } = useGetPokemonsQuery("");
  const { userList, ...user } = useSelectUser();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchData = async () => {
      const firebasePokemons = await getFirebaseData("pokemons");
      dispatch(setfavoritePokemons(firebasePokemons));
    };
    fetchData();
  }, [user.name]);

  const isNoUser = user.name === "";

  const favoriteBtnStyle = {
    backgroundColor: isNoUser ? "white" : "#FFCC01",
    borderRadius: "25px",
    border: "1px solid #3462AE",
    padding: "3px",
    fontSize: "1.2rem",
    fontWeight: "bold",
    color: isNoUser ? "#c5d4ed" : "#2b5393",
  };

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
        className="px-4 p-2 mt-5"
        style={favoriteBtnStyle}
        onClick={() => navigate(ROUTES.FAVORITES)}
        disabled={isNoUser}
      >
        See favorite pokémons
      </button>
    </>
  );
};
