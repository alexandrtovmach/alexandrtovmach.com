import { motion, type Variants } from 'motion/react';
import { useState } from 'react';

const chairMotion: Variants = {
  initial: {
    x: -2000,
    rotate: -50,
  },
  rest: {
    x: 0,
    rotate: 0,
  },
  hover: {
    x: 0,
    rotate: 0,
  },
};

const backMotion: Variants = {
  rest: {
    width: [300, 80, 300],
    x: [0, 240, 0],
    rotate: [0, 10, 0],
    scale: [0.8, 1, 1],
    // opacity: [0.95, 1, 1],
  },
  hover: {
    width: [300, 80, 300],
    x: [0, 240, 0],
    rotate: [0, 10, 0],
    scale: [1, 1, 0.8],
    // opacity: [1, 1, 0.95],
  },
};
const bottomMotion: Variants = {
  rest: {
    rotate: [0, 4, 0],
    scale: [1, 0.95, 0.95],
  },
  hover: {
    rotate: [0, 4, 0],
    scale: [0.95, 0.95, 1],
  },
};

const tooltipMessages = {
  hover: [
    "Hey, I'm not your property!",
    "Oh... you meant the chair. Well, I guess that's okay then.",
  ],
};

interface ChairProps {
  isChairActive: boolean;
  onChangeChairState: (isActive: boolean) => void;
}

const Chair: React.FC<ChairProps> = ({ isChairActive, onChangeChairState }) => {
  const [tooltip, setTooltip] = useState<string[] | undefined>();

  return (
    <motion.svg
      className="absolute bottom-0 w-36 overflow-visible cursor-help"
      viewBox="0 0 300 525"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      variants={chairMotion}
      initial="initial"
      animate="rest"
      whileHover="hover"
      // animate={isChairActive ? "hover" : "rest"}
      // whileHover={isChairActive ? undefined : "hover"}
      // onHoverStart={() => onChangeChairState(true)}
      // onHoverEnd={() => onChangeChairState(false)}
      transition={{ duration: 0.5, delay: 1, }}
    >
      {tooltip && (
        <g>
          {tooltip.map((text, index) => (
            <motion.text
              key={index}
              x="50%"
              y={`${-100 + index * 64}`}
              width={300}
              textAnchor="middle"
              fill="black"
              fontSize="64"
              fontFamily="var(--font-mono)"
              initial={{ opacity: 0, y: -110 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -110 }}
              transition={{ duration: 0.3, delay: index * 2 }}
            >
              {text}
            </motion.text>
          ))}
        </g>
      )}
      <motion.rect
        variants={bottomMotion}
        transition={{ duration: 0.3 }}
        width="300"
        height="80"
        y="320"
        rx="40"
        fill="#090909"
      />
      <motion.rect
        variants={backMotion}
        transition={{ duration: 0.3 }}
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
