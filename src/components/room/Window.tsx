import { useState } from 'react';
import { motion, AnimatePresence, type PanInfo } from 'framer-motion';
import ColdSun from '@/assets/images/room/wallpapers/cold_sun.jpg';
import Asia from '@/assets/images/room/wallpapers/asia.jpg';
import Modern from '@/assets/images/room/wallpapers/modern.jpg';
import Tower from '@/assets/images/room/wallpapers/tower.jpg';
import Sunset from '@/assets/images/room/wallpapers/sunset.jpg';
import Asteroid from '@/assets/images/room/wallpapers/asteroid.jpg';
import Snow from '@/assets/images/room/wallpapers/snow.jpg';

const wallpapers: { author: string; image: string }[] = [
  {
    author: 'empty',
    image: '',
  },
  {
    author: 'Photo by Laura Cleffmann on Unsplash',
    image: ColdSun.src,
  },
  {
    author: 'Photo by Suzi Kim on Unsplash',
    image: Asia.src,
  },
  {
    author: 'topntp26 on Freepik',
    image: Tower.src,
  },
  {
    author: 'wirestock on Freepik',
    image: Modern.src,
  },
  {
    author: 'AI vecstock on Freepik',
    image: Sunset.src,
  },
  {
    author: 'AI Freepik on Freepik',
    image: Asteroid.src,
  },
  {
    author: 'wirestock on Freepik',
    image: Snow.src,
  },
];

const variants = {
  enter: (direction: number) => {
    return {
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
    };
  },
  center: {
    zIndex: 0,
    x: 0,
    opacity: 1,
  },
  exit: (direction: number) => {
    return {
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
    };
  },
};

const swipeConfidenceThreshold = 10000;
const swipePower = (offset: number, velocity: number) => {
  return Math.abs(offset) * velocity;
};

const Window: React.FC = () => {
  const [[page, direction], setPage] = useState([0, 0]);

  const paginate = (newDirection: number) => {
    setPage([page + newDirection, newDirection]);
  };

  const onDragEnd = (
    e: MouseEvent | TouchEvent | PointerEvent,
    { offset, velocity }: PanInfo
  ) => {
    const swipe = swipePower(offset.x, velocity.x);

    if (swipe < -swipeConfidenceThreshold) {
      paginate(1);
    } else if (swipe > swipeConfidenceThreshold) {
      paginate(-1);
    }
  };

  const wallpaperIndex =
    (((page % wallpapers.length) + wallpapers.length) % wallpapers.length) || 0;
  const selectedWallpaper = wallpapers[wallpaperIndex];

  return (
    <div className="absolute bottom-0 right-0 w-[40vw] h-[90vh] border-12 border-white overflow-hidden">
      <AnimatePresence initial={false} custom={direction}>
        <motion.div
          key={page}
          className="absolute inset-0 bg-center bg-size-[100vw 100vh]"
          style={{
            backgroundImage: `url(${selectedWallpaper.image})`,
          }}
          title={selectedWallpaper.author}
          custom={direction}
          variants={variants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{
            x: { type: 'spring', stiffness: 300, damping: 30 },
            opacity: { duration: 0.2 },
          }}
          drag="x"
          dragConstraints={{ left: 0, right: 0 }}
          dragElastic={1}
          onDragEnd={onDragEnd}
        />
      </AnimatePresence>
    </div>
  );
};

export default Window;
