import React from 'react';
import { Container } from '@material-ui/core';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';

import Hero from 'views/components/Hero';
import Tips from 'views/components/Tips';
import { Wrapper } from 'views/ui';
import { selectId } from 'store/meta';

const Category = () => {
  const param = useParams();
  const categoryId = useSelector(state => selectId(state, param.slug));

  return (
    <Container>
      <Hero text={`${param.slug} cheatsheet for`} />
      <Wrapper mt={10}>
        <Tips categoryId={categoryId} />
      </Wrapper>
    </Container>
  );
};

export default Category;
