"use client";
import { Card, Col, Row } from "antd";
import Meta from "antd/es/card/Meta";
import styles from "../styles/Page.module.css";
import { Pokemon } from "../types/pokemon.type";
const POKE_API_IMAGES = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork';

interface PokemonGridProps {
  pokemonData: Pokemon[];
}

export default function PokemonGrid({ pokemonData }: PokemonGridProps) {
  return (
    <div className={styles.container}>
      <Row gutter={[16, 16]}>
        {pokemonData.map((pokemon, index) => (
          <Col xs={24} sm={12} md={8} lg={6} key={index}>
            <Card
              hoverable
              size="small"
              cover={
                <img
                  alt={pokemon.name}
                  src={`${POKE_API_IMAGES}/${pokemon.id}.png`}
                />
              }
            >
              <Meta title={pokemon.name.toUpperCase()} />
              <div className={styles.cardContent}>
                <p><strong>Type:</strong> {pokemon.types.join(", ")}</p>
                <p><strong>Abilities:</strong> {pokemon.abilities.join(", ")}</p>
              </div>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
}
