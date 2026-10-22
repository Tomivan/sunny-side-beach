import { Header } from "./components/layout/header/header.component";
import HomePage  from "./home/page";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.page}>
      <Header />
      <HomePage />
    </div>
  );
}
