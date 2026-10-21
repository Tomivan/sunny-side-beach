"use client";

import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { scrollToId } from '../../../utils/scroll';

export function ScrollManager() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const timer = window.setTimeout(() => scrollToId(hash.slice(1)), 60);
      return () => window.clearTimeout(timer);
    }
    window.scrollTo(0, 0);
    return undefined;
  }, [pathname, hash]);

  return null;
}