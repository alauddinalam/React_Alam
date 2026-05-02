import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const transition = {
  duration: 0.72,
  ease: [0.22, 1, 0.36, 1],
};

export const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.16,
      delayChildren: 0.08,
    },
  },
};

export const fadeUpVariant = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition },
};

export const slideInLeftVariant = {
  hidden: { opacity: 0, x: -40 },
  visible: { opacity: 1, x: 0, transition },
};

export const slideInBottomVariant = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition },
};

export function ScrollReveal({ children, className = '', variants, threshold = 0.2, ...props }) {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold,
    rootMargin: '-80px',
  });

  return (
    <motion.section
      ref={ref}
      className={className}
      initial="hidden"
      animate={inView ? 'visible' : 'hidden'}
      variants={variants ?? fadeUpVariant}
      {...props}
    >
      {children}
    </motion.section>
  );
}
