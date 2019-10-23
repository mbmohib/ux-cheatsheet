import React from 'react';
import { Grid } from '@material-ui/core';

import SecondaryCategory from './SecondaryCategory';
import { InputIcon, FormIcon, SearchIcon, ButtonIcon } from 'assets/icons';

const PrimaryCategoryContainer = () => {
  return (
    <Grid container spacing={3}>
      {[
        { label: 'Input', icon: <InputIcon />, url: '' },
        { label: 'Form', icon: <FormIcon />, url: '' },
        {
          label: 'Search',
          icon: <SearchIcon size="80" />,
          url: '',
        },
        { label: 'Button', icon: <ButtonIcon />, url: '' },
      ].map(category => (
        <Grid item sm={3} key={category.label}>
          <SecondaryCategory category={category} />
        </Grid>
      ))}
    </Grid>
  );
};

export default PrimaryCategoryContainer;
