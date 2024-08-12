"use client";

import { useEffect, useState } from "react";
import PokemonGrid from "../components/PokemonGrid";
import { Pokemon } from "../types/pokemon.type";
import { fetchPokemons } from "../apis/pokemon-api";
import Paginator from "../components/Paginator";

const ITEMS_PER_PAGE = 12;

export default function PokemonFetcher() {
  const [pokemonData, setPokemonData] = useState<Pokemon[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<null | string>(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalItems, setTotalItems] = useState(0);

  useEffect(() => {
    const getPokemons = async () => {
      try {
        const { data, total } = await fetchPokemons(currentPage, ITEMS_PER_PAGE);
        setPokemonData(data);
        setTotalItems(total);
      } catch (err) {
        setError("Error fetching Pokémon data");
      } finally {
        setLoading(false);
      }
    };

    getPokemons();
  }, [currentPage]);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div>
      <PokemonGrid pokemonData={pokemonData} />
      <Paginator
        currentPage={currentPage}
        totalItems={totalItems}
        pageSize={ITEMS_PER_PAGE}
        onPageChange={handlePageChange}
      />
    </div>
  );
}
