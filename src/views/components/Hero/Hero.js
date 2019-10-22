import React from 'react';
import { Typography, Wrapper } from 'views/ui';

const Hero = () => {
  return (
    <Wrapper p={6}>
      <Typography variant="h1" fontWeight={600}>
        UX Cheatsheet for <em>Frontend Devs</em>
      </Typography>
      <Typography variant="subtitle1">
        <em>55+</em> User Experience Tips
      </Typography>
    </Wrapper>
  );
};

export default Hero;
