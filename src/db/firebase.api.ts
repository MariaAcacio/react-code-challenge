import "firebase/firestore";
import { initializeApp } from "firebase/app";
import {
  getFirestore,
  collection,
  getDocs,
  updateDoc,
  doc,
  setDoc,
} from "firebase/firestore/lite";
import { buildDictionary } from "src/utils/functions";
import { FavoritePokemonType, UserObjectType } from "src/types/docTypes";

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

export async function getFirebaseData(collectionName: string) {
  const dataColllection = collection(db, collectionName);
  try {
    const dataSnapshot = await getDocs(dataColllection);
    const dictionary = buildDictionary(
      dataSnapshot.docs.map((doc) => doc.data()),
      "name"
    );
    return dictionary;
  } catch (e) {
    console.log("error getting the data", e);
  }
}
export async function saveFirebaseData(
  data: FavoritePokemonType | UserObjectType,
  collectionName: string
) {
  const dataDoc = doc(db, collectionName, data.name);

  try {
    await setDoc(dataDoc, data);
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
