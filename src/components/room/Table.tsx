import { motion } from 'motion/react';

const Table: React.FC = () => {
  return (
    <motion.svg
      className="absolute bottom-0 w-64 overflow-visible"
      viewBox="0 0 800 400"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      initial={{ y: -200 }}
      animate={{ y: 0 }}
    >
      <motion.rect x={60} y={40} width={40} height={360} fill="#D9D9D9" />
      <motion.rect x={700} y={40} width={40} height={360} fill="#D9D9D9" />
      <motion.rect width={800} height={40} fill="#dfcb5b" animate={{ rotate: [0, 5, 0],  }} transition={{ duration: 0.2 }}/>
    </motion.svg>
  );
};

export default Table;
