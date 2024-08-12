import axios from "axios";

export const fetchPokemons = async (page: number = 1, limit: number = 12) => {
  try {
    const offset = (page - 1) * limit;
    const response = await axios.get(`https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`);

    const pokemons = await Promise.all(
      response.data.results.map(async (pokemon: { name: string; url: string }) => {
        const details = await axios.get(pokemon.url);
        return {
          name: pokemon.name,
          url: pokemon.url,
          id: details.data.id,
          types: details.data.types.map((type: any) => type.type.name),
          abilities: details.data.abilities.map((ability: any) => ability.ability.name),
        };
      })
    );
    
    return {
      data: pokemons,
      total: response.data.count
    };
  } catch (error) {
    throw new Error("Error fetching Pokémon data");
  }
};
