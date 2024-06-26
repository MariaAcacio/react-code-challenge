import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { extractNumber } from "src/utils/functions";
import { SinglePokemonType } from "src/types/docTypes";

type BasePokemonType = {
  name: string;
  url: string;
};

type ResponsePokemonType = {
  results: BasePokemonType[];
};

export const pokemonApi = createApi({
  reducerPath: "pokemonApi",
  baseQuery: fetchBaseQuery({ baseUrl: "https://pokeapi.co/api/v2/" }),
  endpoints: (builder) => ({
    getPokemons: builder.query({
      query: () => "pokemon",
      transformResponse: (response: ResponsePokemonType) => {
        return response.results.map((pokemon: BasePokemonType) => ({
          name: pokemon.name,
          id: extractNumber(pokemon.url),
        }));
      },
    }),
    getPokemonById: builder.query<SinglePokemonType, string>({
      query: (id) => `pokemon/${id}`,
    }),
  }),
});

export const { useGetPokemonByIdQuery, useGetPokemonsQuery } = pokemonApi;
