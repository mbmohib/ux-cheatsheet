import React from 'react';
import { useSelector } from 'react-redux';

import { selectTipsCount } from 'store/tips';
import Hero from './Hero';

const HeroContainer = ({ text }) => {
  const totalTips = useSelector(selectTipsCount);

  return <Hero totalTips={totalTips} text={text} />;
};

export default HeroContainer;
