import { motion, AnimatePresence } from 'framer-motion';
import { cn } from '@/lib/utils';

type Props = {
  className?: string;
  Open?: boolean;
};

export const MenuHamburguer = ({ className, Open }: Props) => {
  const svgFillColor = Open ? '#FFFFFF' : '#E2AD67';

  return (
    <AnimatePresence>
      <motion.svg
        className={cn(className)}
        whileHover={{ scale: 1.2 }}
        initial={{ scale: 0 }}
        animate={{ scale: 1, transition: { type: 'spring', stiffness: 200, damping: 20 } }}
        width="60"
        height="60"
        viewBox="0 0 60 60"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle cx="30" cy="30" r="30" fill={svgFillColor} />
        <mask id="mask0_2001_3292" maskUnits="userSpaceOnUse" x="23" y="26" width="14" height="8">
          <rect x="23" y="26" width="14" height="8" fill="#D9D9D9" />
        </mask>
        <g mask="url(#mask0_2001_3292)">
          <motion.rect
            x="23"
            y={Open ? '30' : '26'}
            width="20"
            height="2"
            fill="#171212"
            initial={{ rotate: 0 }}
            animate={{ rotate: Open ? 45 : 0 }}
          />
          <motion.rect
            x="17"
            y="32"
            width="20"
            height="2"
            fill="#171212"
            initial={{ rotate: 0 }}
            animate={{ rotate: Open ? -45 : 0 }}
          />
        </g>
      </motion.svg>
    </AnimatePresence>
  );
};
