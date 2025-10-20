import { useState } from 'react';
import { motion, type PanInfo } from 'framer-motion';
import FrontWall from '@/components/room/Walls/Front';

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
      setActiveWall(activeWall + 1);
    } else if (info.offset.x < -50) {
      setActiveWall(activeWall - 1);
    }
  };

  const getOpacity = (wallIndex: number) => {
    const normalizedActive = ((activeWall % 4) + 4) % 4;
    return wallIndex !== normalizedActive ? 0 : 1;
  };

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
          className="absolute border-2 border-black"
          style={{
            transform: `rotateY(0deg) translate3d(0, 0, -${H / 2}px)`,
            width: W,
            height: H,
          }}
          animate={{
            opacity: getOpacity(0),
            display: getOpacity(0) === 0 ? 'none' : 'block',
          }}
        >
          <FrontWall />
        </motion.div>
        <motion.div
          className="absolute border-2 border-black"
          style={{
            transform: `rotateY(90deg) translate3d(0, 0, -${H / 2}px)`,
            width: H,
            height: H,
          }}
          animate={{
            opacity: getOpacity(1),
            display: getOpacity(1) === 0 ? 'none' : 'block',
          }}
        >
          Right
        </motion.div>
        <motion.div
          className="absolute border-2 border-black"
          style={{
            transform: `rotateY(180deg) translate3d(0, 0, -${H / 2}px)`,
            width: W,
            height: H,
          }}
          animate={{
            opacity: getOpacity(2),
            display: getOpacity(2) === 0 ? 'none' : 'block',
          }}
        >
          Back
        </motion.div>
        <motion.div
          className="absolute border-2 border-black"
          style={{
            transform: `rotateY(-90deg) translate3d(0, 0, -${W - H / 2}px)`,
            width: H,
            height: H,
          }}
          animate={{
            opacity: getOpacity(3),
            display: getOpacity(3) === 0 ? 'none' : 'block',
          }}
        >
          Left
        </motion.div>
        <div
          className="absolute border-2 border-black"
          style={{
            transform: `rotateX(90deg) translate3d(0, 0, -${H / 2}px)`,
            width: W,
            height: H,
            opacity: 1,
          }}
        >
          Bottom
        </div>
        <div
          className="absolute border-2 border-black"
          style={{
            transform: `rotateX(-90deg) translate3d(0, 0, -${H / 2}px)`,
            width: W,
            height: H,
            opacity: 1,
          }}
        >
          Top
        </div>
      </motion.div>
    </div>
  );
};

export default Walls;
