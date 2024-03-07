import "firebase/firestore";
import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs, addDoc } from "firebase/firestore/lite";
import { buildDictionary } from "src/utils/functions";

const firebaseConfig = {
  apiKey: "AIzaSyDf65SSRenl4mXiZKSVPa4V4z8ilmzac80",
  authDomain: "react-code-challenge-e6855.firebaseapp.com",
  projectId: "react-code-challenge-e6855",
  storageBucket: "react-code-challenge-e6855.appspot.com",
  messagingSenderId: "257890254076",
  appId: "1:257890254076:web:82029e3c6e129217926b79",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// Pokemons
export async function getFirebasePokemons() {
  const pokemonColllection = collection(db, "pokemons");
  const pokemonSnapshot = await getDocs(pokemonColllection);
  /* would be a better idea for performance, to transform the array into a dictionary
  so will be faster to find the values in future queries */
  const dictionary = buildDictionary(
    pokemonSnapshot.docs.map((doc) => doc.data()),
    "name"
  );
  console.log(dictionary);
  const pokemonSavedList = pokemonSnapshot.docs.map((doc) => doc.data());
  return pokemonSavedList;
}

export async function saveFirebasePokemon(pokemon) {
  const pokemonCollection = collection(db, "pokemons");
  // here depending how are you storing the data, it's a better idea to direcly update the current pokemon document if exists by adding the new user to the array of users that have saved it or create a new document with the pokemon data and the array of users that have saved it instead of creating a new document for each user that saves the same pokemon
  try {
    await addDoc(pokemonCollection, pokemon);
  } catch (e) {
    console.log("error adding the document", e);
  }
}

// Users
// this function doesn't have try/catch, so if it fails, the app may crash
export async function getFirebaseUsers() {
  const userColllection = collection(db, "users");
  const userSnapshot = await getDocs(userColllection);
  // same comment as above about the dictionaries
  const userSavedList = userSnapshot.docs.map((doc) => doc.data());
  return userSavedList;
}

export async function saveFirebaseUsers(userDetails) {
  const userCollection = collection(db, "users");

  try {
    await addDoc(userCollection, userDetails);
  } catch (e) {
    console.log("error adding the document", e);
  }
}
