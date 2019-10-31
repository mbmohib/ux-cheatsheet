import React from 'react';
import { Container } from '@material-ui/core';

import Hero from 'views/components/Hero';
import Tips from 'views/components/Tips';
import { Wrapper } from 'views/ui';

const Category = () => {
  return (
    <Container>
      <Hero />
      <Wrapper mt={10}>
        <Tips />
      </Wrapper>
    </Container>
  );
};

export default Category;
