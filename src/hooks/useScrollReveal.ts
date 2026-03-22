'use client';

import { useEffect, useRef, useState } from 'react';

interface UseScrollRevealOptions {
  /** IntersectionObserver threshold (0-1). Default 0.15 */
  threshold?: number;
  /** Only trigger once. Default true */
  once?: boolean;
}

/**
 * Returns a ref to attach to the target element and a boolean indicating
 * whether the element has entered the viewport.
 *
 * ```tsx
 * const [ref, isVisible] = useScrollReveal();
 * return <div ref={ref} className={isVisible ? 'visible' : ''}>...</div>;
 * ```
 */
export function useScrollReveal<T extends HTMLElement = HTMLDivElement>(
  options: UseScrollRevealOptions = {},
): [React.RefObject<T | null>, boolean] {
  const { threshold = 0.15, once = true } = options;
  const ref = useRef<T | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          if (once) observer.unobserve(el);
        } else if (!once) {
          setIsVisible(false);
        }
      },
      { threshold },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold, once]);

  return [ref, isVisible];
}
