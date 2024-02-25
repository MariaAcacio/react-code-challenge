import firebase from "firebase/app";
import "firebase/firestore";
import { initializeApp } from "firebase/app";
import {
  getFirestore,
  collection,
  getDocs,
  addDoc,
} from "firebase/firestore/lite";

const firebaseConfig = {
  apiKey: "AIzaSyDf65SSRenl4mXiZKSVPa4V4z8ilmzac80",
  authDomain: "react-code-challenge-e6855.firebaseapp.com",
  projectId: "react-code-challenge-e6855",
  storageBucket: "react-code-challenge-e6855.appspot.com",
  messagingSenderId: "257890254076",
  appId: "1:257890254076:web:82029e3c6e129217926b79",
};

// Initialize Firebase

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export async function getFirebasePokemons() {
  const pokemonColllection = collection(db, "pokemons");
  const pokemonSnapshot = await getDocs(pokemonColllection);
  const pokemonSavedList = pokemonSnapshot.docs.map((doc) => doc.data());

  return pokemonSavedList;
}

export async function saveFirebasePokemon(pokemon) {
  const pokemonCollection = collection(db, "pokemons");

  try {
    const docRef = await addDoc(pokemonCollection, pokemon);
    console.log({ docRef });
  } catch (e) {
    console.log("error adding the document", e);
  }
}
