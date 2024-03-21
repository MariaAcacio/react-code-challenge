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
    <div className="flex justify-center mb-8">
      {user.name === "" ? (
        <input
          type="text"
          value={currentName}
          onChange={handleInputChange}
          onKeyDown={handleOnKeyDown}
          placeholder="Enter your name"
          className="p-3  mt-9 border-2 border-blue-2 rounded-4 w-60 md:mt-20 md:w-96"
        />
      ) : (
        <h1
          onClick={() => dispatch(setUser({ id: 0, name: "" }))}
          className="cursor-pointer mt-12 font-bold text-4xl p-2 md:mt-20 md:text-6xl"
        >
          Welcome {capitalizeFirstLetter(user.name)}
        </h1>
      )}
    </div>
  );
};
