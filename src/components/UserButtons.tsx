import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getFirebaseData } from "src/db/firebase.api";
import { useSelectUser } from "src/modules/framework-exercise/store/slice/userSlice";
import {
  setUser,
  setUserList,
} from "src/modules/framework-exercise/store/slice/userSlice";
import { capitalizeFirstLetter } from "src/utils/functions";
import { CollectionNamesEnum } from "src/utils/constants";

export const UserButtons = () => {
  const { userList } = useSelectUser();
  const dispatch = useDispatch();
  const userListArray = Object.values(userList);

  useEffect(() => {
    const fetchUsers = async () => {
      const fetchedUsers = await getFirebaseData(CollectionNamesEnum.USERS);
      dispatch(setUserList(fetchedUsers));
    };
    if (userListArray.length === 0) {
      fetchUsers();
    }
  }, []);

  return (
    <div className=" grid grid-cols-2 md:grid-cols-3 gap-4">
      {userListArray?.map((item) => (
        <button
          className=" rounded-4 p-2 font-bold  bg-amber-300 mr-3 w-40 mb-3 hover:bg-blue-2 hover:text-white  hover:transition-transform hover:scale-110 "
          key={item.id}
          onClick={() => dispatch(setUser({ id: item.id, name: item.name }))}
        >
          {capitalizeFirstLetter(item.name)}
        </button>
      ))}
    </div>
  );
};
