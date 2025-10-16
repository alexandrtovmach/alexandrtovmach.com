import { motion, type Variants } from 'motion/react';

const backMotion: Variants = {
  rest: {
    width: 300,
    x: 0,
    rotate: 0,
    scale: 1,
  },
  hover: {
    width: [300, 80, 300, 80, 300],
    x: [0, 240, 0, -20, 0],
    rotate: [0, 10, 0, -10, 0],
    scale: [1, 1, 0.8, 1, 1],
    opacity: [1, 1, 0.95, 1, 1],
    transition: { duration: 1, repeat: Infinity, ease: 'linear' },
  },
};
const bottomMotion: Variants = {
  rest: {
    rotate: 0,
    scale: 1,
  },
  hover: {
    rotate: [0, 4, 0, -4, 0],
    scale: [0.95, 0.95, 1, 0.95, 0.95],
    transition: { duration: 1, repeat: Infinity, ease: 'linear' },
  },
};

const Chair: React.FC = () => {
  return (
    <motion.svg
      width="400"
      height="525"
      viewBox="0 0 300 525"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      initial="rest"
      whileHover="hover"
      animate="rest"
    >
      <motion.rect
        variants={bottomMotion}
        width="300"
        height="80"
        y="320"
        rx="40"
        fill="#090909"
      />
      <motion.rect
        variants={backMotion}
        height="400"
        rx="40"
        fill="#090909"
      />
      <motion.path
        d="M161.334 472.973L246 496.221L238.475 525L146 499.608L53.5254 525L46 496.221L132.258 472.536V400H161.334V472.973Z"
        fill="#D9D9D9"
      ></motion.path>
    </motion.svg>
  );
};

export default Chair;
