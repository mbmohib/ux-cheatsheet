import React from 'react';
import { Grid } from '@material-ui/core';

import Tip from './Tip';

const Tips = ({ tips }) => {
  return (
    <Grid container spacing={3}>
      {tips.map(tip => (
        <Grid key={tip.id} item sm={4}>
          <Tip tip={tip} />
        </Grid>
      ))}
    </Grid>
  );
};

export default Tips;
