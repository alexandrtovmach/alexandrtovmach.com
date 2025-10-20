import { useState } from 'react';
import { motion, type PanInfo } from 'framer-motion';

const Q = 1.4;
const H = 1200;
const W = H * Q;

const Walls: React.FC = () => {
  const [activeWall, setActiveWall] = useState(0);

  const onDragEnd = (
    event: MouseEvent | TouchEvent | PointerEvent,
    info: PanInfo
  ) => {
    if (info.offset.x > 50) {
      setActiveWall(activeWall - 1);
    } else if (info.offset.x < -50) {
      setActiveWall(activeWall + 1);
    }
  };

  console.log(activeWall);

  return (
    <div
      className="w-full h-full flex items-center justify-center gap-0"
      style={{ perspective: '1000px' }}
    >
      <motion.div
        className="relative"
        style={{ transformStyle: 'preserve-3d', width: W, height: H }}
        animate={{
          rotateY: activeWall * -90,
        }}
        transition={{ type: 'spring', stiffness: 1500, damping: 200 }}
        drag="x"
        dragConstraints={{ left: 0, right: 0 }}
        onDragEnd={onDragEnd}
      >
        <motion.div
          className="absolute bg-red-500"
          style={{
            transform: `rotateY(0deg) translate3d(0, 0, ${H / 2}px)`,
            width: W,
            height: H,
            opacity: !activeWall || activeWall % 4 === 0 ? 0 : 1,
          }}
        >
          Front
        </motion.div>
        <div
          className="absolute bg-blue-500 opacity-50"
          style={{
            transform: `rotateY(90deg) translate3d(0, 0, ${W - H / 2}px)`,
            width: H,
            height: H,
            opacity: !activeWall || activeWall % 5 === 0 ? 0 : 1,
          }}
        >
          Right
        </div>
        <div
          className="absolute bg-green-500 opacity-50"
          style={{
            transform: `rotateY(180deg) translate3d(0, 0, ${H / 2}px)`,
            width: W,
            height: H,
          }}
        >
          Back
        </div>
        <div
          className="absolute bg-yellow-500 opacity-50"
          style={{
            transform: `rotateY(-90deg) translate3d(0, 0, ${H / 2}px)`,
            width: H,
            height: H,
          }}
        >
          Left
        </div>
        <div
          className="absolute bg-purple-500 opacity-50"
          style={{
            transform: `rotateX(90deg) translate3d(0, 0, ${H / 2}px)`,
            width: W,
            height: H,
          }}
        >
          Top
        </div>
        <div
          className="absolute bg-pink-500 opacity-50"
          style={{
            transform: `rotateX(-90deg) translate3d(0, 0, ${H / 2}px)`,
            width: W,
            height: H,
          }}
        >
          Bottom
        </div>
      </motion.div>
    </div>
  );
};

export default Walls;
