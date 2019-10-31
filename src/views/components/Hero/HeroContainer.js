import React from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

import { selectTipsCount, selectTipsCountCategoryWise } from 'store/tips';
import Hero from './Hero';
import { selectId } from 'store/meta';

const HeroContainer = () => {
  const param = useParams();
  const { slug } = param;
  const categoryId = useSelector(state => selectId(state, slug));
  const totalTips = useSelector(selectTipsCount);
  const totalTipsCategoryWise = useSelector(state =>
    selectTipsCountCategoryWise(state, categoryId)
  );

  const heading = slug ? `${slug} cheatsheet for` : 'UX Cheatsheet for';

  return (
    <Hero totalTips={slug ? totalTipsCategoryWise : totalTips} text={heading} />
  );
};

export default HeroContainer;
