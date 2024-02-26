import { useState } from "react";
import { useDispatch } from "react-redux";
import { saveFirebaseUsers } from "src/db/firebase.api";
import { useSelectUser } from "src/hooks/useSelectUser";
import { setUser } from "src/modules/framework-exercise/store/slice/userSlice";
import { generateId } from "src/utils/functions";

export const UserInput = () => {
  const [currentName, setCurrentName] = useState("");
  const { userList, ...user } = useSelectUser();
  const dispatch = useDispatch();

  const handleInputChange = async (evnt) => {
    setCurrentName(evnt.target.value);
    try {
      if (evnt.key === "Enter") {
        const isRepeated = userList.find((item) => item.name === currentName);
        if (currentName === "" || isRepeated) {
          return;
        }
        await saveFirebaseUsers({ id: generateId(), name: currentName });
        dispatch(setUser({ id: generateId(), name: currentName }));
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
          onChange={(evnt) => handleInputChange(evnt)}
          onKeyDown={(evnt) => handleInputChange(evnt)}
          placeholder="Enter your name"
        />
      ) : (
        <h1
          onClick={() => dispatch(setUser({ id: 0, name: "" }))}
          style={{ cursor: "pointer" }}
          className="pointer-event"
        >
          Welcome {user.name}
        </h1>
      )}
    </>
  );
};
