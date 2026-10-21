import styles from './styles.module.css';

const RAY_ANGLES = Array.from({ length: 18 }, (_, i) => i * 20);

export function Sun({ className = '' }: { className?: string }) {
  return (
    <svg viewBox="0 0 200 200" className={className} aria-hidden="true">
      <g className={styles.rays}>
        {RAY_ANGLES.map((angle) => (
          <rect
            key={angle}
            x="97"
            y={angle % 40 === 0 ? 6 : 14}
            width="6"
            height={angle % 40 === 0 ? 34 : 24}
            rx="3"
            fill="currentColor"
            transform={`rotate(${angle} 100 100)`}
          />
        ))}
      </g>
      <circle cx="100" cy="100" r="46" fill="currentColor" className={styles.core} />
    </svg>
  );
}