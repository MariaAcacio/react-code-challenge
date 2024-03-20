import { useState } from "react";
import { useDispatch } from "react-redux";
import { saveFirebaseData } from "src/db/firebase.api";
import { useSelectUser } from "src/modules/framework-exercise/store/slice/userSlice";
import { setUser } from "src/modules/framework-exercise/store/slice/userSlice";
import { generateId } from "src/utils/functions";

export const UserInput = () => {
  const [currentName, setCurrentName] = useState("");
  const { userList, ...user } = useSelectUser();
  const dispatch = useDispatch();

  const handleInputChange = async (evnt) => {
    const newlyAddedName = evnt.target.value;
    setCurrentName(newlyAddedName);
    try {
      if (evnt.key === "Enter") {
        const isRepeated = userList.hasOwnProperty(newlyAddedName);
        if (currentName === "" || isRepeated) {
          return;
        }

        const userObj = {
          id: generateId(),
          name: currentName,
        };
        await saveFirebaseData(userObj, "users");
        dispatch(setUser(userObj));
      }
    } catch (error) {
      console.error("Error saving data:", error);
    }
  };

  return (
    <>
      {user.name === "" ? (
        <input
          type="text"
          value={currentName}
          onChange={handleInputChange}
          onKeyDown={handleInputChange}
          placeholder="Enter your name"
          style={{ padding: "5px", marginTop: "50px" }}
        />
      ) : (
        <h1
          onClick={() => dispatch(setUser({ id: 0, name: "" }))}
          style={{ padding: "5px", marginTop: "50px", cursor: "pointer" }}
          className="pointer-event"
        >
          Welcome {user.name}
        </h1>
      )}
    </>
  );
};
