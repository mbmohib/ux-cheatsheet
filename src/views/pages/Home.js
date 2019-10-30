import React from 'react';
import { Container } from '@material-ui/core';

import Hero from 'views/components/Hero';
import PrimaryCategory from 'views/components/PrimaryCategory';
import SecondaryCategory from 'views/components/SecondaryCategory';
import Features from 'views/components/Tips';
import { Wrapper } from 'views/ui';

const Home = () => (
  <Container>
    <Hero />
    <PrimaryCategory />
    <Wrapper mt={10}>
      <SecondaryCategory />
    </Wrapper>
    <Wrapper mt={10}>
      <Features />
    </Wrapper>
  </Container>
);

export default Home;
