import React from 'react';
import { Grid } from '@material-ui/core';

import SecondaryCategory from './SecondaryCategory';
import { InputIcon, FormIcon, SearchIcon, ButtonIcon } from 'assets/icons';

const PrimaryCategoryContainer = () => {
  return (
    <Grid container spacing={3}>
      {[
        { label: 'Input', icon: <InputIcon size="40" />, url: '' },
        { label: 'Form', icon: <FormIcon size="40" />, url: '' },
        {
          label: 'Search',
          icon: <SearchIcon size="40" />,
          url: '',
        },
        { label: 'Button', icon: <ButtonIcon size="40" />, url: '' },
      ].map(category => (
        <Grid item sm={3} key={category.label}>
          <SecondaryCategory category={category} />
        </Grid>
      ))}
    </Grid>
  );
};

export default PrimaryCategoryContainer;
