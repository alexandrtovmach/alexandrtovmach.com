

const TopWall: React.FC = () => {
  return (
    <div className="w-full h-full relative flex items-center justify-center">
      <div className="absolute rounded-full bg-black h-24 w-24" style={{ transform: 'translate3d(0, 0, -40px)' }}></div>
    </div>
  );
};

export default TopWall;
  