import React, { useEffect } from 'react';
import { Grid } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';

import { metaActions, selectPrimaryCategories } from 'store/meta';
import PrimaryCategory from './PrimaryCategory';

const PrimaryCategoryContainer = () => {
  const dispatch = useDispatch();
  const categories = useSelector(selectPrimaryCategories);

  useEffect(() => {
    dispatch(metaActions.getCategories());
  }, [dispatch]);

  return (
    <Grid container spacing={3}>
      {categories.map(category => (
        <Grid item sm={6} key={category.id}>
          <PrimaryCategory category={category} />
        </Grid>
      ))}
    </Grid>
  );
};

export default PrimaryCategoryContainer;
