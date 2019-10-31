import React from 'react';
import { useSelector } from 'react-redux';

import { selectTipsWithImages, selectTipsWithoutImage } from 'store/tips';
import Tips from './Tips';
import TipsWithoutImage from './TipsWithoutImage';

const AllTips = () => {
  const tips = useSelector(selectTipsWithImages);
  const tipsWithoutImage = useSelector(selectTipsWithoutImage);

  return (
    <>
      {tips[0] && <Tips tips={tips} />}
      {tipsWithoutImage[0] && <TipsWithoutImage tips={tipsWithoutImage} />}
    </>
  );
};

export default AllTips;
