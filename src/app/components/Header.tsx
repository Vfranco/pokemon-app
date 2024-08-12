import { Layout } from "antd";
import styles from "../styles/Header.module.css";
const { Header } = Layout;

export default function AppHeader() {
  return (
    <Header className={styles.header}>
      <div className={styles.logo}>PokeApp</div>
    </Header>
  );
}
