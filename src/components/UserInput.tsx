import { useState } from "react";
import { useDispatch } from "react-redux";
import { saveFirebaseData } from "src/db/firebase.api";
import { useSelectUser } from "src/modules/framework-exercise/store/slice/userSlice";
import { setUser } from "src/modules/framework-exercise/store/slice/userSlice";
import { capitalizeFirstLetter, generateId } from "src/utils/functions";
import { CollectionNamesEnum } from "src/utils/constants";

export const UserInput = () => {
  const [currentName, setCurrentName] = useState("");
  const { userList, ...user } = useSelectUser();
  const dispatch = useDispatch();

  const handleInputChange = (evnt: React.ChangeEvent<HTMLInputElement>) => {
    const newlyAddedName = evnt.target.value;
    setCurrentName(newlyAddedName.toLowerCase());
  };

  const handleOnKeyDown = async (
    evnt: React.KeyboardEvent<HTMLInputElement>
  ) => {
    try {
      if (evnt.key === "Enter") {
        const isRepeated = userList.hasOwnProperty(currentName);
        if (currentName === "" || isRepeated) {
          return;
        }
        const userObj = {
          id: generateId(),
          name: currentName,
        };
        await saveFirebaseData(userObj, CollectionNamesEnum.USERS);
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
          onKeyDown={handleOnKeyDown}
          placeholder="Enter your name"
          style={{ padding: "5px", marginTop: "50px" }}
        />
      ) : (
        <h1
          onClick={() => dispatch(setUser({ id: 0, name: "" }))}
          style={{ padding: "5px", marginTop: "50px", cursor: "pointer" }}
          className="pointer-event"
        >
          Welcome {capitalizeFirstLetter(user.name)}
        </h1>
      )}
    </>
  );
};
