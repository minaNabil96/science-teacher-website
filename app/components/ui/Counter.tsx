'use client';

import {useEffect, useState} from 'react';
import {motion, useInView} from 'framer-motion';
import {useRef} from 'react';

export default function Counter({to, suffix = ''}: {to: number; suffix?: string}) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, {once: true});
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!inView) return;
    let frame = 0;
    const total = 70;
    const timer = setInterval(() => {
      frame++;
      setValue(Math.round((frame / total) * to));
      if (frame >= total) clearInterval(timer);
    }, 24);
    return () => clearInterval(timer);
  }, [inView, to]);

  return (
    <motion.span ref={ref} initial={{opacity: 0}} animate={inView ? {opacity: 1} : {}}>
      {value.toLocaleString()}
      {suffix}
    </motion.span>
  );
}
