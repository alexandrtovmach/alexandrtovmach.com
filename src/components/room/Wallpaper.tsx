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

const Wallpaper: React.FC = () => {
  const [[page, direction], setPage] = useState([0, 0]);

  const paginate = (newDirection: number) => {
    setPage([page + newDirection, newDirection]);
  };

  const handlePan = (
    e: MouseEvent | TouchEvent | PointerEvent,
    info: PanInfo
  ) => {
    if (info.offset.x > 100) {
      paginate(-1);
    } else if (info.offset.x < -100) {
      paginate(1);
    }
  };

  const wallpaperIndex =
    (((page % wallpapers.length) + wallpapers.length) % wallpapers.length) || 0;
  const selectedWallpaper = wallpapers[wallpaperIndex];

  return (
    <AnimatePresence initial={false} custom={direction}>
      <motion.div
        key={page}
        className="absolute inset-0 -z-10 bg-center bg-no-repeat bg-fixed"
        style={{
          backgroundImage: `url(${selectedWallpaper.image})`,
          backgroundSize: 'auto 100%',
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
        onPan={handlePan}
      />
    </AnimatePresence>
  );
};

export default Wallpaper;
