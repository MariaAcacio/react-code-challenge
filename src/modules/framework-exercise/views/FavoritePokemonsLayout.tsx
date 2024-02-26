import { useEffect, useState } from "react";
import { getFirebasePokemons } from "src/db/firebase.api";
import { useSelectUser } from "src/hooks/useSelectUser";
import { useNavigate } from "react-router-dom";
import { ROUTES } from "src/utils/routes";
import { UserButtons } from "src/components/UserButtons";

export const FavoritePokemonsLayout = () => {
  const { userList, ...user } = useSelectUser();
  const [pokeList, setPokeList] = useState([]);
  const navigateTo = useNavigate();

  useEffect(() => {
    if (user.name === "") {
      navigateTo(ROUTES.POKEMON);
    }
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
        <UserButtons />
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
