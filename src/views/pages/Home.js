import React from 'react';
import { Container } from '@material-ui/core';

import Hero from 'views/components/Hero';
import PrimaryCategory from 'views/components/PrimaryCategory';
import SecondaryCategory from 'views/components/SecondaryCategory';
import Tips from 'views/components/Tips';
import { Wrapper } from 'views/ui';

const Home = () => (
  <Container>
    <Hero text="UX Cheatsheet for" />
    <PrimaryCategory />
    <Wrapper mt={10}>
      <SecondaryCategory />
    </Wrapper>
    <Wrapper mt={10}>
      <Tips />
    </Wrapper>
  </Container>
);

export default Home;
