import { motion, type Variants } from 'motion/react';
import { useState } from 'react';
import MScottCup from '@/assets/images/room/michael_scott_cup.png';

const cupVariants: Variants = {
  initial: { y: -2000 },
  animate: { y: 0, transition: { delay: 0.8, type: 'tween' } },
  active: {
    scale: 4,
    x: -150,
    y: -180,
  },
};

const Cup: React.FC = () => {
  const [isActive, setIsActive] = useState(false);

  return (
    <>
      <motion.img
        className="absolute w-64 bottom-64"
        src={MScottCup.src}
        alt="Michael Scott Cup"
        initial={{ display: 'none', opacity: 0 }}
        animate={isActive ? { display: 'block', opacity: 1 } : { display: 'none', opacity: 0 }}
        transition={isActive ? { delay: 0.5 } : { delay: 0 }}
      />
      <motion.svg
        className="absolute bottom-32 -mr-48 w-8 cursor-zoom-in"
        viewBox="0 0 110 90"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        initial="initial"
        animate={isActive ? 'active' : 'animate'}
        variants={cupVariants}
        onClick={() => setIsActive(!isActive)}
      >
        <rect
          x="0.5"
          y="0.5"
          width="70"
          height="90"
          rx="4.5"
          fill="white"
          stroke="white"
        />
        <motion.circle
          cx="70"
          animate={isActive ? { x: -40 } : { x: 0 }}
          transition={{ duration: 1 }}
          cy="45"
          r="25"
          stroke="white"
          strokeWidth="10"
        />
        <motion.g>
          <motion.text
            animate={isActive ? { x: 5 } : { x: -30 }}
            transition={{ duration: 1 }}
            y="30%"
            textAnchor="start"
            fill="black"
            fontSize="16"
            fontFamily="var(--font-mono)"
          >
            HELLO
          </motion.text>
          <motion.text
            animate={isActive ? { x: 5 } : { x: -30 }}
            transition={{ duration: 1 }}
            y="45%"
            textAnchor="start"
            fill="black"
            fontSize="16"
            fontFamily="var(--font-mono)"
          >
            WORLD'S
          </motion.text>
          <motion.text
            animate={isActive ? { x: 5 } : { x: -30 }}
            transition={{ duration: 1 }}
            y="60%"
            textAnchor="start"
            fill="black"
            fontSize="16"
            fontFamily="var(--font-mono)"
          >
            BEST
          </motion.text>
          <motion.text
            animate={isActive ? { x: 5 } : { x: -30 }}
            transition={{ duration: 1 }}
            y="75%"
            textAnchor="start"
            fill="black"
            fontSize="16"
            fontFamily="var(--font-mono)"
          >
            DEV
          </motion.text>
        </motion.g>
      </motion.svg>
    </>
  );
};

export default Cup;
