import { AlertTriangleIcon, CheckCircle2Icon, InfoIcon, XCircleIcon } from 'lucide-react';
import styles from './styles.module.css';

type NoticeTone = 'info' | 'warning' | 'error' | 'success';

interface NoticeProps {
  tone?: NoticeTone;
  title?: string;
  children: React.ReactNode;
  className?: string;
}

const tones: Record<NoticeTone, { wrap: string; icon: React.ElementType }> = {
  info: { wrap: styles.toneInfo, icon: InfoIcon },
  warning: { wrap: styles.toneWarning, icon: AlertTriangleIcon },
  error: { wrap: styles.toneError, icon: XCircleIcon },
  success: { wrap: styles.toneSuccess, icon: CheckCircle2Icon },
};

export function Notice({ tone = 'info', title, children, className = '' }: NoticeProps) {
  const { wrap, icon: Icon } = tones[tone];
  return (
    <div
      role={tone === 'error' ? 'alert' : 'status'}
      className={[styles.notice, wrap, className].join(' ')}
    >
      <Icon className={styles.icon} aria-hidden="true" />
      <div>
        {title && <p className={styles.title}>{title}</p>}
        <div className={title ? styles.bodyWithTitle : ''}>{children}</div>
      </div>
    </div>
  );
}