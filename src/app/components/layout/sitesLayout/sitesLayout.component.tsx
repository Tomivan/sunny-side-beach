import { Outlet } from 'react-router-dom';
import { Header } from './Header';
import { Footer } from './Footer';
import { ScrollManager } from './ScrollManager';
import styles from './styles.module.css';

export function SiteLayout() {
  return (
    <div className={`paper-texture ${styles.layout}`}>
      <a href="#main" className={styles.skipLink}>
        Skip to content
      </a>
      <ScrollManager />
      <Header />
      <main id="main" className={styles.main}>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}