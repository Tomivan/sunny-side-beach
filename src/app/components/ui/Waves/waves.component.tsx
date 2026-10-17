import styles from './styles.module.css';

export interface WaveLayer {
  fill: string;
  duration: number;
  height: string;
  opacity?: number;
  reverse?: boolean;
}

interface WavesProps {
  layers: WaveLayer[];
  className?: string;
}

const WAVE_PATH = 'M0,40 C240,80 480,0 720,40 C960,80 1200,0 1440,40 L1440,100 L0,100 Z';

export function wavesInto(fill: string, accent = '#76B8B5'): WaveLayer[] {
  return [
    { fill: accent, opacity: 0.45, duration: 26, height: '100%' },
    { fill: '#FFFCF5', opacity: 0.35, duration: 18, height: '78%', reverse: true },
    { fill, duration: 32, height: '58%' },
  ];
}

export function Waves({ layers, className = '' }: WavesProps) {
  return (
    <div aria-hidden="true" className={[styles.waves, className].join(' ')}>
      {layers.map((layer, i) => (
        <div
          key={i}
          className={[styles.layer, layer.reverse ? styles.layerReverse : ''].join(' ')}
          style={{
            height: layer.height,
            animationDuration: `${layer.duration}s`,
            opacity: layer.opacity ?? 1,
          }}
        >
          {[0, 1].map((k) => (
            <svg
              key={k}
              viewBox="0 0 1440 100"
              preserveAspectRatio="none"
              className={styles.svg}
            >
              <path d={WAVE_PATH} fill={layer.fill} />
            </svg>
          ))}
        </div>
      ))}
    </div>
  );
}