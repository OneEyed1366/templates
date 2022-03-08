import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/dist/query/react';

interface PokemonInterface {
  name: string,
  power: number,
}

export const pokemonApi = createApi({
  reducerPath: 'pokemonApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://pokeapi.co/api/v2',
  }),
  endpoints: (build) => ({
    getPokemonByName: build.query<PokemonInterface, string>({
      query: (name) => `/pokemon/${name}`
    }),
  }),
});

export const { useGetPokemonByNameQuery } = pokemonApi;
