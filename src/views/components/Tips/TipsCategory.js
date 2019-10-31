import React from 'react';
import { useSelector } from 'react-redux';

import {
  selectTipsCategoryWiseWithImages,
  selectTipsCategoryWiseWithoutImage,
} from 'store/tips';
import Tips from './Tips';
import TipsWithoutImage from './TipsWithoutImage';

const TipsCategory = ({ categoryId }) => {
  const tips = useSelector(state =>
    selectTipsCategoryWiseWithImages(state, categoryId)
  );
  const tipsWithoutImage = useSelector(state =>
    selectTipsCategoryWiseWithoutImage(state, categoryId)
  );

  return (
    <>
      {tips[0] && <Tips tips={tips} />}
      {tipsWithoutImage[0] && <TipsWithoutImage tips={tipsWithoutImage} />}
    </>
  );
};

export default TipsCategory;
