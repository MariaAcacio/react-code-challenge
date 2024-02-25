import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

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
          id: +pokemon.url.split("/")[6],
        }));
      },
    }),
    getPokemonById: builder.query<BasePokemonType, string>({
      query: (id) => `pokemon/${id}`,
    }),
  }),
});

export const { useGetPokemonByIdQuery, useGetPokemonsQuery } = pokemonApi;
