import { useState } from "react";
import { useDispatch } from "react-redux";
import { useGetPokemonsQuery } from "src/apis/pokemon.api";
import { setUser } from "src/modules/framework-exercise/store/slice/userSlice";
import { useSelectUser } from "src/hooks/useSelectUser";
import { List } from "./List";
import { generateId } from "src/utils/functions";

export const ListLayout = () => {
  const { data, isLoading, isError } = useGetPokemonsQuery("");
  const [currentName, setCurrentName] = useState("");
  const { userList, ...user } = useSelectUser();
  const dispatch = useDispatch();

  const handleInputChange = (evnt) => {
    setCurrentName(evnt.target.value);
    if (evnt.key === "Enter") {
      dispatch(setUser({ id: generateId(), name: currentName }));
    }
  };

  return (
    <>
      {user.name === "" ? (
        <input
          type="text"
          value={currentName}
          onChange={(evnt) => handleInputChange(evnt)}
          onKeyDown={(evnt) => handleInputChange(evnt)}
          placeholder="Enter your name"
        />
      ) : (
        <div
          onClick={() => dispatch(setUser({ id: 0, name: "" }))}
          style={{ cursor: "pointer" }}
        >
          Welcome {user.name}
        </div>
      )}

      <div>
        {userList?.map((item) => (
          <button
            key={item.id}
            onClick={() => dispatch(setUser({ id: item.id, name: item.name }))}
          >
            {item.name}
          </button>
        ))}
      </div>

      {isLoading ? (
        <div>Loading...</div>
      ) : isError ? (
        <div>Something went wrong!</div>
      ) : (
        <List pokemonList={data} />
      )}
    </>
  );
};
