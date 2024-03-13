import { useState } from "react";
import { useDispatch } from "react-redux";
import { saveFirebaseUsers } from "src/db/firebase.api";
import { useSelectUser } from "src/modules/framework-exercise/store/slice/userSlice";
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
        /*  if we used dictionary, we can use hasOwnProperty method for better performance instead of maping the whole array */
        const isRepeated = userList.find((item) => item.name === currentName);
        if (currentName === "" || isRepeated) {
          return;
        }
        // await saveFirebaseUsers({ id: generateId(), name: currentName });
        // dispatch(setUser({ id: generateId(), name: currentName }));

        /* it's better to create an obj for the user once, and pass it to the saveFirebaseUsers() and dispatch(),
        otherwise, we will have a different id reference between firebase and our local store, this may causes
        possible issues in future if the user don't reload the page and try to save the pokemon with a different id that doesn't exists in firebase */
        const userObj = {
          id: generateId(),
          name: currentName,
        };
        await saveFirebaseUsers(userObj);
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
          onChange={handleInputChange} // we don't need to explicity pass the event to the function on this cases
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
