import { motion } from 'motion/react';

const MonitorRight: React.FC = () => {
  return (
    <motion.svg
      className="absolute bottom-32 -mr-21 w-20 overflow-visible"
      viewBox="0 0 300 260"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      initial={{ y: -2000 }}
      animate={{ y: 0 }}
      transition={{ delay: 0.6, type: 'tween' }}
    >
      <rect
        x="5"
        y="5"
        width="290"
        height="190"
        fill="#4A4A4A"
        stroke="#090909"
        strokeWidth="10"
      />
      <rect x="110" y="200" width="80" height="60" fill="#090909" />
      <motion.g
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, type: 'tween' }}
      >
        <rect x="10" y="10" width="80" height="180" fill="#292929" />
        <rect x="14" y="14" width="70" height="5" fill="#D9D9D9" />
        <rect x="14" y="23" width="70" height="5" fill="#D9D9D9" />
        <rect x="14" y="32" width="52" height="5" fill="#D9D9D9" />
        <rect x="14" y="41" width="70" height="5" fill="#D9D9D9" />
        <rect x="14" y="50" width="62" height="5" fill="#D9D9D9" />
        <rect x="14" y="59" width="56" height="5" fill="#D9D9D9" />
        <rect x="14" y="68" width="52" height="5" fill="#D9D9D9" />
        <rect x="94" y="14" width="156" height="5" fill="#A0BEFF" />
        <rect x="94" y="77" width="156" height="5" fill="#72FFE0" />
        <rect x="94" y="23" width="27" height="5" fill="#FD92FF" />
        <rect x="94" y="86" width="142" height="5" fill="#F1FF85" />
        <rect x="94" y="32" width="19" height="5" fill="#F1FF85" />
        <rect x="94" y="95" width="27" height="5" fill="#72FFE0" />
        <rect x="94" y="41" width="120" height="5" fill="#A0BEFF" />
        <rect x="94" y="104" width="156" height="5" fill="#72FFE0" />
        <rect x="94" y="152" width="108" height="5" fill="#FD92FF" />
        <rect x="94" y="50" width="156" height="5" fill="#A0BEFF" />
        <rect x="94" y="113" width="69" height="5" fill="#FD92FF" />
        <rect x="94" y="161" width="116" height="5" fill="#FD92FF" />
        <rect x="94" y="59" width="27" height="5" fill="#72FFE0" />
        <rect x="94" y="122" width="69" height="5" fill="#F1FF85" />
        <rect x="94" y="170" width="19" height="5" fill="#F1FF85" />
        <rect x="94" y="68" width="142" height="5" fill="#72FFE0" />
        <rect x="94" y="131" width="27" height="5" fill="#FD92FF" />
        <rect x="94" y="179" width="51" height="5" fill="#F1FF85" />
      </motion.g>
    </motion.svg>
  );
};

export default MonitorRight;
