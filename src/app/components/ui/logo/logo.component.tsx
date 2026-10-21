import Image from 'next/image';
import LogoImage from '../../../../../public/assets/images/logo.png';
import styles from './styles.module.css';

interface LogoProps {
  className?: string;
  variant?: 'blend' | 'badge';
}

export function Logo({ className = styles.defaultSize, variant = 'blend' }: LogoProps) {
  const surface =
    variant === 'badge'
      ? styles.surfaceBadge
      : styles.surfaceBlend;
  return (
    <span className={[styles.root, surface, className].join(' ')}>
      <Image
        src={LogoImage}
        alt="Sunny Side"
        className={styles.image}
        width={60}
        height={60}
        draggable={false}
      />
    </span>
  );
}