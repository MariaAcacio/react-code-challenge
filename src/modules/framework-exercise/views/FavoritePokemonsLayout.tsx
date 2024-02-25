import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { getFirebasePokemons } from "src/db/firebase.api";
import { setUser } from "../store/slice/userSlice";
import { useSelectUser } from "src/hooks/useSelectUser";

export const FavoritePokemonsLayout = () => {
  const { userList, ...user } = useSelectUser();
  const [pokeList, setPokeList] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchData = async () => {
      const firebaseData = await getFirebasePokemons();
      setPokeList(firebaseData.filter((item) => item.userName === user.name));
    };
    fetchData();
  }, [user.name]);

  return (
    <>
      <div>
        favorite pokemons
        {userList.map((item) => (
          <button
            key={item.id}
            onClick={() => dispatch(setUser({ id: item.id, name: item.name }))}
          >
            {item.name}
          </button>
        ))}
      </div>

      <div>
        {pokeList.map((item) => (
          <div key={item.id}>
            <h2>{item.name}</h2>
            {/* <img src={item.defaultSprite} alt={item.name} />
            <img src={item.shinySprite} alt={item.name} /> */}
            {/* <h3>Abilities</h3>
            {item.abilities.map((ability, ind) => (
              <p key={ind}>{ability}</p>
            ))}
            <h3>Type</h3>
            {item.types.map((type, ind) => (
              <p key={ind}>{type}</p>
            ))} */}
          </div>
        ))}
      </div>
    </>
  );
};
