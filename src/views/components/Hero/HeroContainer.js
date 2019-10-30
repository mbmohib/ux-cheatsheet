import React from 'react';
import { useSelector } from 'react-redux';

import { selectTipsCount } from 'store/tips';
import Hero from './Hero';

const HeroContainer = () => {
  const totalTips = useSelector(selectTipsCount);

  return <Hero totalTips={totalTips} />;
};

export default HeroContainer;
