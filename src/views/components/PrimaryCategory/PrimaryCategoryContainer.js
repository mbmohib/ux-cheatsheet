import React, { useEffect } from 'react';
import { Grid } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';

import { metaActions } from 'store/metas';
import PrimaryCategory from './PrimaryCategory';
import { signInImage, checkoutImage } from 'assets/images';

const PrimaryCategoryContainer = () => {
  const dispatch = useDispatch();
  const categories = useSelector(state => state.metas.categories);

  useEffect(() => {
    dispatch(metaActions.getCategories());
    console.log(categories);
  }, []);

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
