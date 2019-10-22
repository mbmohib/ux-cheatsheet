import React from 'react';
import { Container } from '@material-ui/core';

import Hero from 'views/components/Hero';
import PrimaryCategory from 'views/components/PrimaryCategory';
import SecondaryCategory from 'views/components/SecondaryCategory';
import { Wrapper } from 'views/ui';

const Home = () => (
  <Container>
    <Hero />
    <PrimaryCategory />
    <Wrapper mt={10}>
      <SecondaryCategory />
    </Wrapper>
  </Container>
);

export default Home;
