import React from 'react';
import { Grid } from '@material-ui/core';

import TipWithoutImage from './TipWithoutImage';

const TipsWithoutImage = ({ tips }) => {
  return (
    <Grid container spacing={3}>
      {tips.map(tip => (
        <Grid key={tip.id} item sm={4}>
          <TipWithoutImage tip={tip} />
        </Grid>
      ))}
    </Grid>
  );
};

export default TipsWithoutImage;
