import BookShelf from '@/components/room/BookShelf';
import Window from '@/components/room/Window';

const FrontWall: React.FC = () => {
  return (
    <div className="w-full h-full">
      Front
      <Window />
    </div>
  );
};

export default FrontWall;
