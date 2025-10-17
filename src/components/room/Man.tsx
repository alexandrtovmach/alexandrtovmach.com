import React, { useRef } from 'react';
import {
  motion,
  useMotionValue,
  useSpring,
  type PanInfo,
  animate,
} from 'framer-motion';

interface ManProps {
  isChairActive?: boolean;
  onChangeChairState?: (isActive: boolean) => void;
}

const Man: React.FC<ManProps> = ({ isChairActive, onChangeChairState }) => {
  const constraintsRef = useRef<HTMLDivElement>(null);
  const numFollowers = 4;
  const motionValues = Array.from({ length: numFollowers + 1 }, () => ({
    x: useMotionValue(0),
    y: useMotionValue(0),
  }));

  // The leader's onDrag updates its motion values
  const handleDrag = (
    event: MouseEvent | TouchEvent | PointerEvent,
    info: PanInfo
  ) => {
    motionValues[0].x.set(motionValues[0].x.get() + info.delta.x);
    motionValues[0].y.set(motionValues[0].y.get() + info.delta.y);
  };

  const handleDragEnd = () => {
    if (constraintsRef.current) {
      const containerHeight = constraintsRef.current.offsetHeight;
      const elementHeight = 50;
      animate(motionValues[0].y, containerHeight - elementHeight, {
        type: 'spring',
        stiffness: 50,
        damping: 10,
      });
    }
  };

  // Followers use useSpring to smoothly follow the element in front of them
  for (let i = 1; i < motionValues.length; i++) {
    const prev = motionValues[i - 1];
    const current = motionValues[i];

    const springConfig = { damping: 30, stiffness: 200 - i * 25 };

    current.x = useSpring(prev.x, springConfig);
    current.y = useSpring(prev.y, springConfig);
  }

  return (
    <div ref={constraintsRef} className="h-full w-full">
      {motionValues.map((mv, i) => (
        <motion.div
          key={i}
          drag={i === 0}
          onDrag={i === 0 ? handleDrag : undefined}
          onDragEnd={i === 0 ? handleDragEnd : undefined}
          dragConstraints={constraintsRef}
          dragElastic={0.1}
          dragTransition={{ bounceStiffness: 600, bounceDamping: 20 }}
          style={{
            x: mv.x,
            y: mv.y,
            position: 'absolute',
            width: 50,
            height: 50,
            borderRadius: '50%',
            backgroundColor: i === 0 ? '#ff0055' : '#0099ff',
            opacity: 1 - i / (numFollowers + 2),
            zIndex: numFollowers + 1 - i,
          }}
        />
      ))}
    </div>
  );
};

export default Man;
