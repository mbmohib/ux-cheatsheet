import React from 'react';
import { Container } from '@material-ui/core';

import Hero from 'views/components/Hero';
import PrimaryCategory from 'views/components/PrimaryCategory';

const Home = () => (
  <Container>
    <Hero />
    <PrimaryCategory />
  </Container>
);

export default Home;
