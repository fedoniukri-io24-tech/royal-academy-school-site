'use client';

import { motion } from 'framer-motion';
import type { ReactNode } from 'react';

interface SectionRevealProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  axis?: 'y' | 'x';
  distance?: number;
}

export function SectionReveal({
  children,
  className,
  delay = 0,
  axis = 'y',
  distance = 32,
}: SectionRevealProps) {
  const initial = axis === 'y' ? { opacity: 0, y: distance } : { opacity: 0, x: -distance };

  return (
    <motion.div
      className={className}
      initial={initial}
      whileInView={{ opacity: 1, y: 0, x: 0 }}
      transition={{ duration: 0.55, delay }}
      viewport={{ once: true, amount: 0.12 }}
    >
      {children}
    </motion.div>
  );
}
