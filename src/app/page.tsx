"use client"
import PokemonFetcher from "./hooks/PokemonFetcher";
import { Layout } from "antd";
import styles from "./styles/Page.module.css";
import AppHeader from "./components/Header";

export default function Home() {
  return (
    <Layout style={{ minHeight: '100vh' }}>
      <AppHeader />
      <PokemonFetcher />
    </Layout>
  );
}
