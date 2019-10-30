import React from 'react';
import { Typography, Wrapper } from 'views/ui';

const Hero = ({ text, totalTips }) => {
  return (
    <Wrapper p={6}>
      <Typography variant="h1" fontWeight={600} textTransform="capitalize">
        {text} <em>Frontend Devs</em>
      </Typography>
      <Typography variant="subtitle1">
        <em>{(totalTips && totalTips + '+') || 'Loading..'}</em> User Experience
        Tips
      </Typography>
    </Wrapper>
  );
};

export default Hero;
