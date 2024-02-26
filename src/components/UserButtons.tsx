import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getFirebaseUsers } from "src/db/firebase.api";
import { useSelectUser } from "src/hooks/useSelectUser";
import {
  setUser,
  setUserList,
} from "src/modules/framework-exercise/store/slice/userSlice";

export const UserButtons = () => {
  const { userList } = useSelectUser();
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchUsers = async () => {
      const fetchedUsers = await getFirebaseUsers();
      dispatch(setUserList(fetchedUsers));
    };
    if (userList.length === 0) {
      fetchUsers();
    }
  }, []);

  return (
    <div>
      {userList?.map((item) => (
        <button
          className="mx-1"
          key={item.id}
          onClick={() => dispatch(setUser({ id: item.id, name: item.name }))}
        >
          {item.name}
        </button>
      ))}
    </div>
  );
};
