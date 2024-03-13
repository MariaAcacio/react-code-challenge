import "firebase/firestore";
import { initializeApp } from "firebase/app";
import {
  getFirestore,
  collection,
  getDocs,
  addDoc,
  updateDoc,
  doc,
  setDoc,
} from "firebase/firestore/lite";
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
  const dictionary = buildDictionary(
    pokemonSnapshot.docs.map((doc) => doc.data()),
    "name"
  );

  return dictionary;
}

export async function saveFirebasePokemon(pokemon) {
  const pokemonDoc = doc(db, "pokemons", pokemon.name);
  try {
    await setDoc(pokemonDoc, pokemon);
  } catch (e) {
    console.log("error adding the document", e);
  }
}
export async function updateFirebasePokemon(pokemon) {
  const pokemonDoc = doc(db, "pokemons", pokemon.name);
  try {
    await updateDoc(pokemonDoc, { userIds: pokemon.userIds });
  } catch (e) {
    console.log("error adding the document", e);
  }
}

// Users
// this function doesn't have try/catch, so if it fails, the app may crash
export async function getFirebaseUsers() {
  const userColllection = collection(db, "users");
  try {
    const userSnapshot = await getDocs(userColllection);
    // same comment as above about the dictionaries
    const userSavedList = userSnapshot.docs.map((doc) => doc.data());
    return userSavedList;
  } catch (e) {
    console.log("error getting the users", e);
  }
}

export async function saveFirebaseUsers(userDetails) {
  const userCollection = collection(db, "users");

  try {
    await addDoc(userCollection, userDetails);
  } catch (e) {
    console.log("error adding the document", e);
  }
}
