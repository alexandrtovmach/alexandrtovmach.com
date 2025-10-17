import Chair from '@/components/room/Chair';
// import Man from '@/components/room/Man';
import { useState } from 'react';

const ManOnChair: React.FC = () => {
  const [isChairActive, setIsChairActive] = useState(false);
  return (
    <>
      {/* <Man isChairActive={isChairActive} onChangeChairState={setIsChairActive} /> */}
      <Chair isChairActive={isChairActive} onChangeChairState={setIsChairActive} />
    </>
  );
};

export default ManOnChair;
