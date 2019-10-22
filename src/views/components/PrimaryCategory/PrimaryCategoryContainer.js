import React from 'react';
import { Grid } from '@material-ui/core';

import PrimaryCategory from './PrimaryCategory';
import { signInImage, checkoutImage } from 'assets/images';

const PrimaryCategoryContainer = () => {
  return (
    <Grid container spacing={3}>
      {[
        { label: 'Authentication', img: signInImage, url: '' },
        { label: 'Checkout', img: checkoutImage, url: '' },
      ].map(category => (
        <Grid item sm={6} key={category.label}>
          <PrimaryCategory category={category} />
        </Grid>
      ))}
    </Grid>
  );
};

export default PrimaryCategoryContainer;
