import React from 'react';
import { useSelector } from 'react-redux';

import { selectTipsCount } from 'store/tips';
import Hero from './Hero';

const HeroContainer = ({ text, categoryId }) => {
  const totalTips = useSelector(state => selectTipsCount(state, categoryId));

  return <Hero totalTips={totalTips} text={text} />;
};

export default HeroContainer;
