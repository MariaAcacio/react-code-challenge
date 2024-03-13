import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getFirebaseUsers } from "src/db/firebase.api";
import { useSelectUser } from "src/modules/framework-exercise/store/slice/userSlice";
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

  const buttonStyle = {
    backgroundColor: "#6fa6ff",
    borderRadius: "25px",
    border: "1px solid #3462AE",
    padding: "3px",
    fontSize: "1.2rem",
    fontWeight: "bold",
    color: "#1b335a",
  };

  return (
    <div className="p-5">
      {userList?.map((item) => (
        <button
          className="mx-1 px-4 "
          style={buttonStyle}
          key={item.id}
          onClick={() => dispatch(setUser({ id: item.id, name: item.name }))}
        >
          {item.name}
        </button>
      ))}
    </div>
  );
};
