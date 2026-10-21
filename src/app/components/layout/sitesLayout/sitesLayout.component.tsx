import { Outlet } from 'react-router-dom';
import { Header } from '../header/header.component';
import { Footer } from '../footer/footer.component';
import { ScrollManager } from '../scrollManager/scrollManager.component';
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