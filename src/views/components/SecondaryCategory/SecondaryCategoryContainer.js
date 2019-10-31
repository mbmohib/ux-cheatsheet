import React from 'react';
import { Grid } from '@material-ui/core';
import { useSelector } from 'react-redux';

import { selectSecondaryCategories } from 'store/meta';
import SecondaryCategory from './SecondaryCategory';

const PrimaryCategoryContainer = () => {
  const categories = useSelector(selectSecondaryCategories);

  return (
    <Grid container spacing={3}>
      {categories.map(category => (
        <Grid item sm={3} key={category.id}>
          <SecondaryCategory category={category} />
        </Grid>
      ))}
    </Grid>
  );
};

export default PrimaryCategoryContainer;
