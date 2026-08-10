'use client';

import { useEffect, useRef } from 'react';
import { useInView, animate, useReducedMotion } from 'framer-motion';

interface CounterProps {
  from?: number;
  to: number;
  suffix?: string;
  prefix?: string;
  duration?: number;
  className?: string;
}

export default function AnimatedCounter({
  from = 0,
  to = 400,
  suffix = '+',
  prefix = '',
  duration = 2.2,
  className = '',
}: CounterProps) {
  const nodeRef = useRef<HTMLSpanElement>(null);
  const inView = useInView(nodeRef, { once: true, margin: '-20px' });
  const shouldReduceMotion = useReducedMotion();

  useEffect(() => {
    const node = nodeRef.current;
    if (!node) return;

    if (shouldReduceMotion) {
      node.textContent = `${prefix}${to}${suffix}`;
      return;
    }

    if (inView) {
      const controls = animate(from, to, {
        duration,
        ease: [0.16, 1, 0.3, 1], // Smooth cubic bezier easing
        onUpdate(value) {
          node.textContent = `${prefix}${Math.floor(value)}${suffix}`;
        },
      });
      return () => controls.stop();
    }
  }, [inView, from, to, duration, prefix, suffix, shouldReduceMotion]);

  return (
    <span ref={nodeRef} className={className}>
      {prefix}{from}{suffix}
    </span>
  );
}
