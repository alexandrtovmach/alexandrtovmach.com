import { motion } from 'motion/react';

const MonitorLeft: React.FC = () => {
  return (
    <motion.svg
      className="absolute bottom-32 -ml-21 w-20 overflow-visible"
      viewBox="0 0 300 260"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      initial={{ y: -2000 }}
      animate={{ y: 0 }}
      transition={{ delay: 0.5, type: 'tween' }}
    >
      <rect
        x="5"
        y="5"
        width="290"
        height="190"
        fill="#4A4A4A"
        stroke="#090909"
        stroke-width="10"
      />
      <rect x="110" y="200" width="80" height="60" fill="#090909" />
      <motion.g initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 2, type: 'tween' }}>
        <rect x="210" y="10" width="80" height="180" fill="#292929" />
        <rect x="214" y="14" width="70" height="5" fill="#D9D9D9" />
        <rect x="214" y="23" width="70" height="5" fill="#D9D9D9" />
        <rect x="214" y="32" width="70" height="5" fill="#D9D9D9" />
        <rect x="214" y="41" width="70" height="5" fill="#D9D9D9" />
        <rect x="214" y="50" width="62" height="5" fill="#D9D9D9" />
        <rect x="214" y="59" width="56" height="5" fill="#D9D9D9" />
        <rect x="214" y="68" width="52" height="5" fill="#D9D9D9" />
        <rect x="24" y="95" width="140" height="5" fill="#D9D9D9" />
        <rect x="24" y="104" width="116" height="5" fill="#D9D9D9" />
        <rect x="24" y="113" width="62" height="5" fill="#D9D9D9" />
        <rect x="24" y="122" width="56" height="5" fill="#D9D9D9" />
        <rect x="24" y="131" width="52" height="5" fill="#D9D9D9" />
        <rect x="25" y="45" width="170" height="44" fill="#D9D9D9" />
      </motion.g>
    </motion.svg>
  );
};

export default MonitorLeft;
